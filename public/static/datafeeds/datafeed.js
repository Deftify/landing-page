import {
  fetchBitqueryChartCandles,
  getISODate,
  getISOToUnixTs,
  getISODateLastBar,
  getResolutionMinutes,
} from "./helpFunctions";
// import { subscribeOnStream, unsubscribeFromStream } from "./chartStreaming";

const configurationData = {
  supported_resolutions: ["1", "15", "240", "D"], //"1 minute, 15 minutes, 4 hours, (1440) 1 day, "6M" 6 months"
  exchanges: [
    {
      value: "Pancakeswap",
      name: "Pancakeswap",
      desc: "Pancakeswap Dex Exchange",
    },
    {
      value: "Binance",
      name: "Binance",
      desc: "Binance",
    },
    {
      value: "Bitfinex",
      name: "Bitfinex",
      desc: "Bitfinex",
    },
    {
      // `exchange` argument for the `searchSymbols` method, if a user selects this exchange
      value: "Kraken",

      // filter name
      name: "Kraken",

      // full exchange name displayed in the filter popup
      desc: "Kraken bitcoin exchange",
    },
  ],
  symbols_types: [
    {
      name: "crypto",

      // `symbolType` argument for the `searchSymbols` method, if a user selects this symbol type
      value: "crypto",
    },
    // ...
  ],
};

const lastBarsCache = new Map();
let interval;

export default {
  // get a configuration of your datafeed (e.g. supported resolutions, exchanges and so on)
  onReady: (callback) => {
    // console.log('[onReady]: Method call');
    setTimeout(() => callback(configurationData));
  },
 
  resolveSymbol: async (
    symbolName,
    onSymbolResolvedCallback,
    onResolveErrorCallback
  ) => {
    // console.log('[resolveSymbol]: Method call', symbolName);

    // As symbol is like this = `${this.props.symbol}_${this.props.baseAddress}_${this.props.quoteAddress}`
    const symbolAddresses = symbolName.split("_");

    if (!symbolName) {
      console.log("[resolveSymbol]: Cannot resolve symbol", symbolName);
      onResolveErrorCallback("cannot resolve symbol");
      return;
    }

    const symbolInfo = {
      // ticker: symbolItem.full_name,
      name: symbolAddresses[0],
      description: symbolAddresses[0],
      baseAddress: symbolAddresses[1],
      quoteAddress: symbolAddresses[2],
      type: "crypto",
      session: "24x7",
      timezone: "Etc/UTC",
      exchange: "PAN",
      listed_exchange: "Pancake",
      currency: "USD",
      minmov: 1,
      pricescale: 100000000,
      has_no_volume: false,

      has_weekly_and_monthly: false,
      has_daily: true,
      has_intraday: true,
      intraday_multipliers: ["1", "15", "240", "1440"],
      supported_resolutions: configurationData.supported_resolutions,
      volume_precision: 2,
      data_status: "streaming",
    };

    // console.log('[resolveSymbol]: Symbol resolved', symbolName);
    onSymbolResolvedCallback(symbolInfo);
  },
  // get historical data for the symbol
  getBars: async (
    symbolInfo,
    resolution,
    periodParams,
    onHistoryCallback,
    onErrorCallback
  ) => {
    const { from, to, countBack, firstDataRequest } = periodParams;
    // console.log('[getBars]: Method call', symbolInfo, resolution, from, to, countBack, firstDataRequest);

    //Generate a window (minutes) according to the selected resolution (1, 15, 240 (4 hours), D (1440))
    let window = 1;
    let isoDateSince = getISODate(2);

    if (resolution === "15") {
      window = 15;
      isoDateSince = getISODate(4);
    } else if (resolution === "240") {
      window = 240;
      isoDateSince = getISODate(7);
    } else if (resolution === "1D" || resolution === "D") {
      window = 1440;
      isoDateSince = getISODate(30);
    }

    // "since": "2021-05-26T11:47:10.000Z",
    const queryVariables = {
      baseCurrency: symbolInfo.baseAddress,
      quoteCurrency: symbolInfo.quoteAddress,
      since: isoDateSince, // Gets past date from (today - 2) days
      till: getISODate(0), // Gets iso Date of right now.
      window: window,
      exchange: "bsc",
    };

    const query = /* GraphQL */ `
      query GetCandleData(
        $baseCurrency: String!
        $since: ISO8601DateTime
        $till: ISO8601DateTime
        $quoteCurrency: String!
        $window: Int
      ) {
        ethereum(network: bsc) {
          dexTrades(
            options: { asc: "timeInterval.minute" }
            date: { since: $since, till: $till }
            baseCurrency: { is: $baseCurrency }
            quoteCurrency: { is: $quoteCurrency }
          ) {
            timeInterval {
              minute(count: $window, format: "%Y-%m-%dT%H:%M:%SZ")
            }
            baseCurrency {
              symbol
              address
            }
            quoteCurrency {
              symbol
              address
            }
            trades: count
            quotePrice
            low: quotePrice(calculate: minimum)
            high: quotePrice(calculate: maximum)
            open: minimum(of: block, get: quote_price)
            close: maximum(of: block, get: quote_price)
            vol: tradeAmount(in: USD)
          }
        }
      }
    `;

    try {
      //returns list of dexTrades directly
      const data = await fetchBitqueryChartCandles(query, queryVariables);
      // console.log("Chart BAR data fetched >", data)

      if (!data || data.length === 0) {
        // "noData" should be set if there is no data in the requested period.
        //ONHISTORY IS AVAILABLE IN THE LATEST UNSTABLE VERSION ONLY.
        console.log("Chart BAR data fetch ERROR>>");
        onHistoryCallback([], { noData: true });
        return;
      }
      let bars = [];
      data.forEach((bar) => {
        // if (bar.trades < countBack) {
        const barUnixts = getISOToUnixTs(bar.timeInterval.minute);
        if (barUnixts >= from && barUnixts < to) {
          // if (bars.length < countBack)
          bars = [
            ...bars,
            {
              time: barUnixts * 1000,
              low: bar.low,
              high: bar.high,
              open: bar.open,
              close: bar.close,
              volume: bar.vol,
            },
          ];
        }
      });

      if (firstDataRequest) {
        // to save the last bar data for the current symbol. We wouldn't need this if we had a more accurate way to check for the new bar or if we had a bars streaming API.
        // console.log('[getBars] First request', firstDataRequest)
        lastBarsCache.set(symbolInfo.name, { ...bars[bars.length - 1] });
      }

      // console.log(`[getBars]: returned ${bars.length} bar(s)`);
      onHistoryCallback(bars, { noData: false });
    } catch (error) {
      console.log("[getBars]: Get error", error);
      onErrorCallback(error);
    }
  },
  // subscription to real-time updates
  subscribeBars: (
    symbolInfo,
    resolution,
    onRealtimeCallback,
    subscribeUID,
    onResetCacheNeededCallback
  ) => {
    // console.log('[subscribeBars]: Method call with subscribeUID:', subscribeUID);

    // BELLOW ONY NEEDED WHEN DATA PROVIDER DOESN'T HAVE WEBSOCKET CONNECTION.
    // Fetch the Last kLine (BAR) 1 minute, 15 minute, 4 hours, 1, day.
    interval = setInterval(() => {
      getLastKline(symbolInfo, resolution).then(
        (kline) => kline && onRealtimeCallback(kline)
      );
    }, 1000 * 60); // 60s (1 min) update interval
  },
  unsubscribeBars: (subscriberUID) => {
    // console.log('[unsubscribeBars]: Method call with subscriberUID:', subscriberUID);
    // unsubscribeFromStream(subscriberUID);

    // BELLOW only NEEDED WHEN DATA PROVIDER DOESN'T HAVE WEBSOCKET CONNECTION.
    clearInterval(interval);
    console.log("[unsubscribeBars]: cleared", interval);
    interval = null;
  },
};

//Generate a window (minutes) according to the selected resolution (1, 15, 240 (4 hours), D (1440))
const getLastKline = async (symbolInfo, resolution) => {
  // console.log("[getLastKline]: params: >", symbolInfo, resolution)

  let window = getResolutionMinutes(resolution);

  const queryVariables = {
    baseCurrency: symbolInfo.baseAddress,
    quoteCurrency: symbolInfo.quoteAddress,
    // "since": getISODateLastBar(window),       // Gets past date for last bar (time - 1 mins) days, params are minutes
    since: null,
    till: getISODateLastBar(0), // Gets iso Date of right now time.
    window: window,
    exchange: "bsc",
  };

  const query = /* GraphQL */ `
    query GetCandleData(
      $baseCurrency: String!
      $since: ISO8601DateTime
      $till: ISO8601DateTime
      $quoteCurrency: String!
      $window: Int
    ) {
      ethereum(network: bsc) {
        dexTrades(
          options: { limit: 2, desc: "timeInterval.minute" }
          date: { since: $since, till: $till }
          baseCurrency: { is: $baseCurrency }
          quoteCurrency: { is: $quoteCurrency }
        ) {
          timeInterval {
            minute(count: $window, format: "%Y-%m-%dT%H:%M:%SZ")
          }
          baseCurrency {
            symbol
            address
          }
          quoteCurrency {
            symbol
            address
          }
          trades: count
          quotePrice
          low: quotePrice(calculate: minimum)
          high: quotePrice(calculate: maximum)
          open: minimum(of: block, get: quote_price)
          close: maximum(of: block, get: quote_price)
          vol: tradeAmount(in: USD)
        }
      }
    }
  `;

  //returns list of dexTrades directly
  const data = await fetchBitqueryChartCandles(query, queryVariables);
  // console.log("Chart kline Last BAR data fetched >", data)

  if (!data || data.length === 0) {
    console.log("Chart kline Last BAR data fetch ERROR>>");
    return undefined;
  }

  // let bar = data[data.length - 1]  // Need most recent, Last bar
  let bar = data[0]; // Need most recent, Last bar (desc list)
  const barUnixts = getISOToUnixTs(bar.timeInterval.minute);
  return {
    time: barUnixts * 1000,
    low: bar.low,
    high: bar.high,
    open: bar.open,
    close: bar.close,
    volume: bar.vol,
  };
};




import { bitQueryFetcher } from "./fetchers";



export const getUnixToLocaleTime = (unix_timestamp) => {
  console.log("timestamp", unix_timestamp);

  var startDate = new Date(unix_timestamp * 1000);

  return startDate.toLocaleString();
};

export const getISOToUnixTs = (localTime) => {
  let unixTimeZero = Date.parse(localTime);
  return unixTimeZero / 1000; // to get unix in seconds.
};

export const getISODate = (day = 0) => {
  const yesterday = ((d) => new Date(d.setDate(d.getDate() - day)))(new Date());
  // console.log(yesterday);

  const strDate = yesterday.toISOString();
  return strDate;
  // return strDate.replace(strDate.substr(-4), '000Z')
};

export const getISODateLastBar = (minutes = 1) => {
  const pastTime = ((d) => new Date(d.setMinutes(d.getMinutes() - minutes)))(
    new Date()
  );

  const strDate = pastTime.toISOString();
  // console.log(strDate);
  return strDate;
  // return strDate.replace(strDate.substr(-4), '000Z')
};

export const getUnixTime = (minutes = 1) => {
  const pastTime = ((d) => new Date(d.setMinutes(d.getMinutes() - minutes)))(
    new Date()
  );

  const strDate = pastTime.toISOString();
  return getISOToUnixTs(strDate);
};

export const getResolutionMinutes = (resolution) => {
  let window = 1;
  if (resolution === "15") {
    window = 15;
  } else if (resolution === "240") {
    window = 240;
  } else if (resolution === "1D" || resolution === "D") {
    window = 1440;
  }

  return window;
};

export async function fetchBitqueryChartCandles(query, variables) {
  try {
    // const query = ``
    const response = await bitQueryFetcher(query, variables);
    // console.log("bitquery OHLC response: ", response)
    return response.ethereum.dexTrades;
  } catch (error) {
    // throw new Error(`Bitquery request error: ${error.status}`);
    console.log(`Bitquery request error: ${error.status}`);
  }
}
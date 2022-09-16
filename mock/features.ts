interface Features {
  title: string
  text: string
  image: string
}

export const features: Features[] = [
  {
    title: 'Crypto Research Tool',
    text: 'The problem is that most crypto traders always open multiple tabs and compare all of them before they get into a trade. Imagine if you can open a trading chart, correlation module, screener, and different indicators, all can be personalized in one same screen.',
    image: '/svgs/research-tool.svg',
  },
  {
    title: 'Defi & NFT Research Tool',
    text: 'Like DeFiLlama or DAppRadar but more comprehensive. Compare TVL, trends, on-chain activities, and other important metrics across various DeFi apps and NFT projects. Get ahead of other traders by using our DeFi and NFT analytics. Discover new trends and projects all at once.',
    image: '/svgs/trend.svg',
  },
  {
    title: 'On-Chain Pair Explorer',
    text: 'Copy-paste a token contract address and see everything at once. If you are familiar with DexTools, this is basically utilizing the same idea, but we simplify everything. Designed from the ground up to help mid-cap and low-cap altcoin traders, you should give our on-chain pair explorer a try.',
    image: '/svgs/on-chain.svg',
  },
]

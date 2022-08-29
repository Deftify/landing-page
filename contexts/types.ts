export interface PoolData {
	pairAddress: string;
	token0: string;
	token1: string;
	token0Name: string;
	token1Name: string;
	exchange: string;
	createdAt: string;
	tokenA?: {
		name: string;
		symbol: string;
		address: string;
	};
	tokenB?: {
		name: string;
		symbol: string;
		address: string;
	};
	volumeUSD?: number;
	volumeUSDChange?: number;
	volumeUSDWeek?: number;
	volumeUSDChangeWeek?: number;

	liquidityUSD?: number;
	liquidityUSDChange?: number;

	token0Price?: number;
	token1Price?: number;

	liquidityToken0?: number;
	liquidityToken1?: number;
}

export interface PoolState {
	[pairAddress: string]: {
		data?: PoolData;
	};
}

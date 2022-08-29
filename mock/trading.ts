export interface Trading {
  icon: string
  title: string
  description: string
  button: string
  url?: string
}

export const trading: Trading[] = [
  {
    icon: '/svgs/withdraw.svg',
    title: 'Add Withdrawal Method',
    description: 'Add bank account for withdrawal to local bank.',
    button: 'Add Bank Account',
    url: '/bank-verification',
  },
  {
    icon: '/svgs/verify.svg',
    title: 'Verify your Account',
    description: 'Deposit a minimum of $1 to verify your bank details',
    button: 'Verify Account',
    url: '/account-verification',
  },
  {
    icon: '/svgs/secure.svg',
    title: 'Add Two-Factor Authentication',
    description: 'Add an extra layer of security to your account',
    button: 'Enable 2FA',
    url: '/authentication',
  },
]

export interface TradingInfo {
  title: string
  amount?: number
  description: string
  time?: string
  value?: string | number
  id?: string
}

export const tradingInfo: TradingInfo[] = [
  {
    title: 'Wallet Balance',
    amount: 278232,
    description: 'in this epoch',
  },
  {
    title: 'Countdown',
    time: '22h 45m',
    description: 'until the next epoch on July 22',
  },
  {
    title: 'Total Rewards',
    amount: 198.19,
    description: 'estimated from all epoch',
  },
  {
    title: 'Leaderboard Rewards',
    amount: 278232,
    description: 'from 20,291 referral',
  },
  {
    title: 'In Bot Trade',
    amount: 278.19,
    description: 'in this epoch',
  },
  {
    title: 'Staking Reward',
    value: '--',
    description: 'for holding 0.00 staked',
  },
  {
    title: 'Leaderboard Ranking',
    value: 12,
    description: 'until the next epoch on July 22',
  },
  {
    title: 'Representative Leader',
    value: 'L2',
    description: 'estimated from all epoch',
  },
  {
    title: 'Cumulative Volume',
    value: 459281,
    description: 'from 20,291 referral',
  },
  {
    title: 'Referral ID',
    id: '192011',
    description: 'estimated from all epoch',
  },
]

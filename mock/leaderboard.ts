export interface LeaderBoardInfo {
  title: string
  amount?: number
  description: string
  time?: string
  value?: string | number
  id?: string
}

export const leaderBoard: LeaderBoardInfo[] = [
  {
    title: 'Earned',
    amount: 278232,
    description: 'in this epoch',
  },
  {
    title: 'Invitation List',
    value: '26381 Traders',
    description: 'until the next epoch on July 22',
  },
  {
    title: 'Referral ID',
    id: '192011',
    description: 'estimated from all epoch',
  },
  {
    title: 'Cumulative Volume',
    value: 459281,
    description: 'from 20,291 referral',
  },
  {
    title: 'Referral Bonus',
    value: '5%',
    description: 'in this epoch',
  },
]

export interface LeaderCard {
  name: string
  leader?: string
  rank: number
  amount?: number
}

export const leaderCards: LeaderCard[] = [
  {
    name: 'Lolo Granville',
    rank: 1,
  },
  {
    name: 'Pastor Dennis',
    rank: 2,
  },
  {
    name: 'Mr. Raphael',
    rank: 3,
  },
  {
    name: 'Lolo Granville',
    rank: 1,
  },
  {
    name: 'Lolo Granville',
    rank: 1,
  },
]

interface LeaderTable {
  trader: string
  leader: string
  volume: number
  invites: number
}

export const leaderTable: LeaderTable[] = [
  {
    trader: 'Lolo Granville',
    leader: 'L2',
    volume: 459400171,
    invites: 1231,
  },
  {
    trader: 'Lolo Granville',
    leader: 'L2',
    volume: 459400171,
    invites: 1231,
  },
  {
    trader: 'Lolo Granville',
    leader: 'L3',
    volume: 459400171,
    invites: 1231,
  },
  {
    trader: 'Lolo Granville',
    leader: 'L3',
    volume: 459400171,
    invites: 1231,
  },
  {
    trader: 'Lolo Granville',
    leader: 'L3',
    volume: 459400171,
    invites: 1231,
  },
]

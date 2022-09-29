export interface NavLink {
  name: string
  title: string
  url: string
  external: boolean
}

export const navLinks: NavLink[] = [
  {
    name: 'Launchpad',
    title: 'launchpad',
    url: '/',
    external: false,
  },

  {
    name: 'Metacurse',
    title: 'metacurse',
    url: '/',
    external: false,
  },

  {
    name: 'Team',
    title: 'team',
    url: '/',
    external: false,
  },

  {
    name: 'Contact',
    title: 'contact',
    url: '/contact',
    external: false,
  },
]

export const product: NavLink[] = [
  {
    name: 'Trading',
    title: 'trading',
    url: '#',
    external: true,
  },
  {
    name: 'Staking',
    title: 'staking',
    url: '#',
    external: true,
  },
  {
    name: 'ICO',
    title: 'ICO',
    url: '#',
    external: true,
  },
]

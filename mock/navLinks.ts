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
    name: 'contact',
    title: 'contact',
    url: '/',
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

export const company: NavLink[] = [
  {
    name: 'About Us',
    title: 'about',
    url: '/',
    external: false,
  },
  {
    name: 'Blog',
    title: 'Blog',
    url: '#',
    external: true,
  },
  {
    name: 'FAQ',
    title: 'faq',
    url: '/',
    external: false,
  },
]

export const help: NavLink[] = [
  {
    name: 'support',
    title: 'support',
    url: '#',
    external: false,
  },
  {
    name: 'Terms and Conditions',
    title: 'terms and conditions',
    url: '/',
    external: false,
  },
  {
    name: 'Privacy Policy',
    title: 'Privacy Policy',
    url: '/',
    external: false,
  },
]

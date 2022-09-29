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
    url: '#',
    external: true,
  },

  {
    name: 'Metacurse',
    title: 'metacurse',
    url: '#',
    external: true,
  },

  {
    name: 'Team',
    title: 'team',
    url: '/team',
    external: false,
  },

  {
    name: 'Contact',
    title: 'contact',
    url: '/contact',
    external: false,
  },
]

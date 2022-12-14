export interface NavLink {
  name: string
  title: string
  url: string
  external: boolean
}

export const navLinks: NavLink[] = [
  {
    name: 'App',
    title: 'app',
    url: 'https://beta.deftify.io',
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

  {
    name: 'Blog',
    title: 'blog',
    url: 'https://blog.deftify.io/first-version-of-deftify-beta-is-live/',
    external: true,
  },
]

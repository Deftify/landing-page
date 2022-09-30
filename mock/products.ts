interface Products {
  image: string
  title: string
  description: string
  url: string
}

export const products: Products[] = [
  {
    image: '/svgs/metacurse-min.svg',
    title: 'GamePad',
    description:
      'Developed by our own in-house game development team, MetaCurse is built to revolutionize blockchain gaming ecosystem.',
    url: '#',
  },
  {
    image: '/svgs/launchpad-min.svg',
    title: 'Launchpad',
    description:
      "Deftify will also offer a launchpad service, where we will help new promising cryptocurrency projects to become part of Deftify's broader ecosystem.",
    url: '#',
  },
]

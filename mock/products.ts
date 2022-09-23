interface Products {
  image: string
  title: string
  description: string
  url: string
}

export const products: Products[] = [
  {
    image: '/svgs/metacurse-min.svg',
    title: 'Metacurse',
    description:
      'Developed by our own in-house game development team, MetaCurse is built to revolutionize blockchain gaming ecosystem.',
    url: '#',
  },
  {
    image: '/svgs/launchpad-min.svg',
    title: 'Launchpad',
    description:
      'In the future where regulations will become the default issue for every crypto fundraising, it’s important to have a launchpad that pander to local audiences.',
    url: '#',
  },
]

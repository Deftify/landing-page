import { ReactElement, useEffect } from 'react'
import { MainLayout } from '@/layout'
import { useRouter } from 'next/router'
import { Contact } from '@/components'

const Home = (): ReactElement => {
  return (
    <MainLayout page="contact">
      <Contact />
    </MainLayout>
  )
}

export default Home

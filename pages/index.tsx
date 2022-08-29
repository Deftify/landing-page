import { ReactElement, useEffect } from 'react'
import { MainLayout } from '@/layout'
import { useRouter } from 'next/router'
import { Analytics, Chains, Contact, CounterSection, Feedback, Hero, LaunchPad, Products } from '@/components'

const Home = (): ReactElement => {
  const router = useRouter()
  // useEffect(() => {
  //   router.replace('/trading')
  // })
  return (
    <>
      <Hero />
      <LaunchPad />
      <Chains />
      <CounterSection />
      <Analytics />
      <Products />
      <Feedback />
      <Contact />
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactElement) {
  return <MainLayout page="home">{page}</MainLayout>
}

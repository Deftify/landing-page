import { ReactElement, useEffect } from 'react'
import { MainLayout } from '@/layout'
import { useRouter } from 'next/router'
import {
  Analytics,
  Chains,
  Contact,
  CounterSection,
  Features,
  Feedback,
  Hero,
  LaunchPad,
  Products,
  TestSection,
} from '@/components'

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
      <Features />
      {/* <TestSection /> */}
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

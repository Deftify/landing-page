import { ReactElement, useEffect } from 'react'
import { MainLayout } from '@/layout'
import { useRouter } from 'next/router'
import { Analytics, Chains, Contact, CounterSection, Features, Feedback, Hero, LaunchPad, Products } from '@/components'

const Home = (): ReactElement => {
  return (
    <MainLayout>
      <Hero />
      <LaunchPad />
      <Chains />
      <CounterSection />
      <Features />
      <Analytics />
      <Products />
      <Feedback />
      <Contact />
    </MainLayout>
  )
}

export default Home

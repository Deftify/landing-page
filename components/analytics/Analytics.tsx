import Image from 'next/image'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './Analytics.module.scss'

const Analytics = () => {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const element = ref.current
    gsap.to(element, {
      y: -150,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
      },
    })
  }, [])
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Crypto analytics to make data-driven decisions</h1>
        </div>
        <div className={styles.text}>
          <p>
            Pofitable trading decisions are based on metrics and market analysis. Track, filter, and analyze thousands
            of cryptocurrencies by market cap, multiply volumes timeframes, and do more research with our unique crypto
            research tool modules.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <div className={styles.image}>
          <Image src="/svgs/analytic-chart.svg" layout="fill" alt="" quality={100} />
          {/* <img src="/svgs/analytic-chart.svg" alt="" /> */}
        </div>
      </div>
    </section>
  )
}
export default Analytics

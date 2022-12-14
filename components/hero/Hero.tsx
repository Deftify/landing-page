import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Button } from '@/shared'
import styles from './Hero.module.scss'

const Hero = () => {
  gsap.registerPlugin(ScrollTrigger)
  let tl = gsap.timeline({ delay: 0.8 })
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const element = ref.current
    const alert = element?.children[1]
    const title = element?.children[2]
    const text = element?.children[3]
    const buttons = element?.children[4]
    gsap.fromTo(
      [alert, title, text, buttons],
      {
        y: 370,
        duration: 1.5,
        delay: 1,
      },
      { y: 0, duration: 2, ease: 'elastic.out(1, 1)', stagger: 0.1 },
    )
  }, [])
  return (
    <section className={styles.section} id="home" ref={ref}>
      <div className={styles.light}></div>
      <div className={styles.alert}>
        <div className={styles.alert_blue}>
          <div className={styles.title}>
            <h3>Deftify beta 🎉</h3>
          </div>
        </div>
        <div className={styles.title}>
          <h6>
            We&apos;ve launched, click the link to{' '}
            <a href="https://blog.deftify.io" rel="nofollow noopener" target="blank">
              learn more
            </a>
          </h6>
        </div>
      </div>
      <div className={styles.title}>
        <h1>Simpler Crypto and DeFi Analytics</h1>
      </div>
      <div className={styles.text}>
        <p>
          Predict crypto movement with Deftify’s market data aggregator, DeFi analytics, and research tools. Try our app
          and see for yourself
        </p>
      </div>
      <div className={styles.button_container}>
        <Button type="primary" className={styles.button}>
          <a href="https://beta.deftify.io" rel="nofollow noopener" target="blank">
            <div>Explore</div>
          </a>
        </Button>
        {/* <Button type="transparent" className={styles.button}>
          <a
            href="https://drive.google.com/file/d/1r6i5xi8nkG4Y15e8YomfW1JpzUFF1rmf/view?usp=sharing"
            rel="nofollow noopener"
            target="blank"
          >
            <div>White Paper</div>
          </a>
        </Button> */}
      </div>
    </section>
  )
}

export default Hero

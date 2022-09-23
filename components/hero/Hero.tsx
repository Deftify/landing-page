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
    const title = element?.children[1]
    const text = element?.children[2]
    const buttons = element?.children[3]
    // gsap.to(element, {
    //   visibility: 'visible',
    //   duration: 0,
    // })
    gsap.fromTo(
      [title, text, buttons],
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
      <div className={styles.title}>
        <h1>Crypto Analytics at your fingertips</h1>
      </div>
      <div className={styles.text}>
        <p>
          Predict crypto movement with Deftify’s market data aggregator and research tools. Try our app and see for
          yourself
        </p>
      </div>
      <div className={styles.button_container}>
        <Button type="primary" className={styles.button}>
          Explore
        </Button>
        <a href="https://drive.google.com/file/d/1r6i5xi8nkG4Y15e8YomfW1JpzUFF1rmf/view?usp=sharing" rel="nofollow noopener" target="blank"><Button type="transparent" className={styles.button}>
          <div>Pitch Deck</div>
        </Button></a>
      </div>
    </section>
  )
}

export default Hero

import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import Image from 'next/image'
import styles from './LaunchPad.module.scss'

const LaunchPad = () => {
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const element = ref.current
    gsap.fromTo(
      element,
      {
        y: 370,
        duration: 2.5,
        delay: 2,
      },
      { y: 0, duration: 2, ease: 'elastic.out(1, 1)', stagger: 0.1 },
    )
  }, [])
  return (
    <section className={styles.section} id="launchpad">
      <div className={styles.light}></div>
      <div className={styles.image}>
        <Image src="/svgs/analytics-large.svg" layout="fill" alt="launchpad" priority={true} loading="eager" />
      </div>
    </section>
  )
}

export default LaunchPad

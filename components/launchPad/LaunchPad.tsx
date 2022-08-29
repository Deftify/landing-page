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
    <section className={styles.section} id="launchpad">
      <div className={styles.light}></div>
      <div className={styles.image}>
        <Image src="/svgs/launchpad.svg" layout="fill" alt="launchpad" />
      </div>
    </section>
  )
}

export default LaunchPad

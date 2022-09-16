import { icons } from '@/mock'
import Image from 'next/image'
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './Chains.module.scss'

const Chains = () => {
  const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false)
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
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 650) {
        setIsSmallScreen(true)
        return
      }
      return setIsSmallScreen(false)
    }

    document.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      document.removeEventListener('resize', handleResize)
    }
  }, [])
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.title}>
          <h1>Do your due dilligence with our tools</h1>
        </div>
        <div className={styles.text}>
          <p>
            Whether you are a daytrader or long-term HODL-ers, our tools are designed to help you make more informed and
            more confidence decision. Use Deftify to do your due dilligence before you trade BTC, ETH, or low-cap
            tokens.
          </p>
        </div>
      </div>
      <div className={styles.container}>
        {isSmallScreen ? (
          <div className={styles.row}>
            {icons.map(({ icon, title }, index) => (
              <div className={styles.icon} key={index}>
                <Image src={icon} alt="" layout="fill" title={title} />
              </div>
            ))}
          </div>
        ) : (
          <>
            {' '}
            <div className={styles.row}>
              {icons.slice(0, 9).map(({ icon, title }, index) => (
                <div className={styles.icon} key={index}>
                  <Image src={icon} alt="" layout="fill" title={title} />
                </div>
              ))}
            </div>
            <div className={styles.row}>
              {icons.slice(9, 18).map(({ icon, title }, index) => (
                <div className={styles.icon} key={index}>
                  <Image src={icon} alt="" layout="fill" title={title} />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  )
}

export default Chains

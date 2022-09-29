import { features } from '@/mock'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import styles from './Features.module.scss'

const Features = () => {
  const [activeNumber, setActiveNumber] = useState<number>(0)
  useEffect(() => {
    let timeout: any
    if (window.innerWidth > 950) {
      timeout = setTimeout(() => {
        if (activeNumber < 3) setActiveNumber(activeNumber + 1)
        if (activeNumber === 2) setActiveNumber(0)
      }, 8000)
    }
    return () => clearTimeout(timeout)
  }, [activeNumber])
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Our features</h1>
      </div>
      <div className={styles.containers}>
        <div className={styles.container}>
          {features.map(({ title, text, image }, index) => {
            return (
              <Accordion
                key={index}
                text={text}
                title={title}
                image={image}
                isActive={activeNumber === index}
                setIsActive={() => setActiveNumber(index)}
              />
            )
          })}
        </div>
        <div className={styles.container}>
          <div className={styles.image}>
            <Image src={features[activeNumber].image} alt="" layout="fill" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features

interface AccordionProps {
  title: string
  text: string
  isActive: boolean
  image: string
  setIsActive: (isActive: any) => void
}
const Accordion = ({ title, text, isActive, setIsActive, image }: AccordionProps) => {
  //   const [isActive, setIsActive] = useState<boolean>(false)
  return (
    <div className={styles.accordion} data-active={isActive}>
      <div className={styles.header} onClick={setIsActive}>
        <div className={styles.text}>
          <h3>{title}</h3>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.text}>
          <p>{text}</p>
        </div>
        <div className={styles.accordion_image}>
          <Image src={image} layout="fill" alt="" />
        </div>
      </div>
      <span className={styles.active_line}></span>
    </div>
  )
}

import { features } from '@/mock'
import Image from 'next/image'
import React, { useState } from 'react'
import styles from './Features.module.scss'

const Features = () => {
  const [activeNumber, setActiveNumber] = useState<number>(0)
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Our features</h1>
      </div>
      <div className={styles.containers}>
        <div className={styles.indicator_container}>
          <span className={styles.indicator} data-active={activeNumber === 0} style={{ top: '0' }}></span>
          <span className={styles.indicator} data-active={activeNumber === 1} style={{ top: '5.5rem' }}></span>
          <span className={styles.indicator} data-active={activeNumber === 2} style={{ top: '11rem' }}></span>
        </div>
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
    </div>
  )
}

import Image from 'next/image'
import React from 'react'
import styles from './Card.module.scss'

interface CardProps {
  icon?: string
  name?: string
  description?: string
}

const Card = ({ icon, name, description }: CardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <div className={styles.icon}>
          <Image src="/svgs/quotes.svg" alt="" layout="fill" />
        </div>
        <div className={styles.container}>
          <div className={styles.text}>
            <h4>
              Deftify has a decentralized team of crypto professionals - it's the peak of bear market and they keep building, unlike other pre-funded crypto projects.
            </h4>
          </div>
          <div className={styles.small_row}>
            <div className={styles.image}>
              <Image src="/svgs/twitter-icon.svg" alt="" layout="fill" />
            </div>
            <div className={styles.title}>
              <h3>John Doe</h3>
              <p>twitter</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card

import Image from 'next/image'
import styles from './Analytics.module.scss'

const Analytics = () => {
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
          <Image src="/svgs/analytics-min.svg" layout="fill" alt="" quality={100} />
        </div>
      </div>
    </section>
  )
}
export default Analytics

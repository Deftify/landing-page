import Image from 'next/image'
import styles from './LaunchPad.module.scss'

const LaunchPad = () => {
  return (
    <section className={styles.section} id="launchpad">
      <div className={styles.light}></div>
      <div className={styles.image}>
        <Image src="/svgs/hero.svg" layout="fill" alt="launchpad" priority={true} loading="eager" />
      </div>
    </section>
  )
}

export default LaunchPad

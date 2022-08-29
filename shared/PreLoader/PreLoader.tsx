import Image from 'next/image'
import React from 'react'
import styles from './PreLoader.module.scss'

const PreLoader = () => {
  return (
    <div className={styles.preloader}>
      {/* <div className={styles.loader}></div> */}
      <div className={styles.loader}>
        {/* <div className={styles.bar}>
          <div className={styles.circle}></div>
          <p>Deftify</p>
        </div> */}
      </div>
      <div className={styles.icon_container}>
        <div className={styles.icon}>
          <Image
            src="/svgs/icon-deftify.svg"
            layout="fill"
            loading="eager"
            priority={true}
            quality={100}
            alt="deftify"
          />
        </div>
      </div>
    </div>
  )
}

export default PreLoader

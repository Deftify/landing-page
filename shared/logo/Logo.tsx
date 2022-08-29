import styles from './Logo.module.scss'
import React from 'react'

import Image from 'next/image'
import { useGlobalContext } from '@/contexts/AppContext'

const Logo = () => {
  //   const { isLargeScreen }: any = useGlobalContext()
  return (
    <div className={styles.logo}>
      <Image src={'/svgs/logo.svg'} layout="fill" loading="eager" priority={true} quality={100} alt="deftify" />
    </div>
  )
}

export default Logo

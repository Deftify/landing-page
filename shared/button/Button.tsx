import React from 'react'
import styles from './Button.module.scss'

import Image from 'next/image'

interface Props {
  type?: 'primary' | 'transparent'
  buttonType?: 'button' | 'submit'
  children: React.ReactNode
  iconPrefix?: string
  iconSuffix?: string
  className?: string
  onClick?: (event?: any) => void
}

const Button = ({
  type = 'primary',
  children,
  onClick,
  className,
  iconPrefix,
  iconSuffix,
  buttonType = 'button',
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${styles[type]} ${className} ${styles.button}`}
      data-type={type}
      type={buttonType}
    >
      {!!iconPrefix && (
        <figure className={styles.button_icon}>
          <Image src={iconPrefix} layout="fill" alt="" />
        </figure>
      )}
      {children}
      {!!iconSuffix && (
        <figure className={styles.button_icon}>
          <Image src={iconSuffix} layout="fill" alt="" />
        </figure>
      )}
    </button>
  )
}

export default Button

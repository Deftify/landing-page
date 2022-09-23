import React from 'react'
import styles from './InputField.module.scss'

import Image from 'next/image'

interface Props {
  icon?: string
  placeholder?: string
  value?: string | number
  name?: string
  label?: string
  type?: 'text' | 'number' | 'password' | 'email' | 'textarea'
  className?: string
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  onFocus?: (e: any) => void
}

const InputField = ({
  name,
  type = 'text',
  icon,
  label,
  placeholder,
  onChange,
  onBlur,
  onFocus,
  value,
  className,
}: Props) => {
  return (
    <div className={`${styles.input} ${className}`}>
      {!!label && (
        <label className={styles.input_label} htmlFor={name}>
          {label}
        </label>
      )}

      <div className={styles.input_container} data-type={type}>
        <div className={styles.input_wrapper}>
          {!!icon && (
            <figure className={styles.input_icon}>
              <Image src={icon} layout="fill" alt="" />
            </figure>
          )}
          {type === 'textarea' ? (
            <textarea
              required
              className={styles.input_field}
              data-icon={!!icon}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              value={value}
            />
          ) : (
            <input
              className={styles.input_field}
              type={type}
              data-icon={!!icon}
              placeholder={placeholder}
              onChange={onChange}
              onBlur={onBlur}
              onFocus={onFocus}
              value={value}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default InputField

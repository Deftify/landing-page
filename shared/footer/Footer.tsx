import { navLinks } from '@/mock'
import { scrollTo } from '@/utils'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'

const Footer = () => {
  const handleNavClick = (id: string) => {
    scrollTo({ id })
  }
  return (
    <footer className={styles.section}>
      <div className={styles.logo}>
        <Image src="/svgs/icon-deftify.svg" alt="logo" layout="fill" />
      </div>
      <ul className={styles.navList}>
        {navLinks.map(({ title, name, external, url }, index) => {
          return (
            <li key={index} className={styles.navLink} onClick={() => handleNavClick(title)}>
              {external ? (
                <a href={url} rel="noreferrer" target="_blank">
                  {name}
                </a>
              ) : (
                <Link href={url}>
                  <a>{name}</a>
                </Link>
              )}
            </li>
          )
        })}
      </ul>
      <ul className={styles.nav_list}>
        <li className={styles.navLink}>
          <a href={'#'} rel="noreferrer" target="_blank">
            Terms of Use
          </a>
        </li>
        <li className={styles.navLink}>
          <a href={'#'} rel="noreferrer" target="_blank">
            Privacy Policy
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer

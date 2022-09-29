import { navLinks } from '@/mock'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Logo, Button } from '@/shared'
import styles from './Header.module.scss'
import { scrollTo } from '@/utils'
import Image from 'next/image'

const Header = () => {
  const router = useRouter()
  const [scroll, setScroll] = useState<boolean>(false)
  const [collapsed, setCollapsed] = useState<boolean>(true)
  const [dropDown, setDropDown] = useState<boolean>(false)
  const handleNavClick = (id: string) => {
    // scrollTo({ id })
    setCollapsed(true)
  }
  const checkActive = (url: string) => {
    let isActive = url === router.pathname

    return isActive
  }

  const toggling = (event: React.MouseEvent) => {
    setDropDown(!dropDown)
    event.stopPropagation()
  }

  useEffect(() => {
    const scrollCheck = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > 50) {
        setScroll(true)
      }
      if (currentScrollY <= 50) setScroll(false)
    }
    window.addEventListener('scroll', scrollCheck, { passive: true })

    return () => window.removeEventListener('scroll', scrollCheck)
  }, [])

  useEffect(() => {
    const handleClickOutside = () => {
      setDropDown(false)
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [])
  return (
    <header className={`${styles.header} ${scroll ? styles.header_scrolled : ''}`}>
      <Link href="/">
        <a>
          <div className={styles.header_logoContainer} onClick={() => setCollapsed(true)}>
            <Logo />
          </div>
        </a>
      </Link>
      <div className={styles[!collapsed ? 'header_wrapper' : 'header_wrapper__collapsed']}>
        <nav className={styles.header_nav}>
          <ul className={styles.header_navList}>
            {navLinks.map(({ title, name, external, url }, index) => {
              return (
                <li
                  key={index}
                  className={styles.header_navLink}
                  onClick={() => handleNavClick(title)}
                  data-active={checkActive(url)}
                >
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
        </nav>
      </div>
      <div
        onClick={() => setCollapsed(!collapsed)}
        className={styles[collapsed ? 'header_hamburger' : 'header_hamburger__open']}
      >
        <span className={styles.header_hamburgerBar}></span>
        <span className={styles.header_hamburgerBar}></span>
      </div>
    </header>
  )
}

export default Header

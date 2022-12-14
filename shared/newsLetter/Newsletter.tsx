import { useGlobalContext } from '@/contexts/AppContext'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import Button from '../button/Button'
import SmallLoader from '../smallLoader/SmallLoader'
import styles from './Newsletter.module.scss'

const Newsletter = () => {
  const { hideModal, setHideModal }: any = useGlobalContext()
  const [email, setEmail] = useState<string>('')
  const [state, setState] = useState<string>('IDLE')
  const [errorMessage, setErrorMessage] = useState<any>(null)
  const body = document.body.style

  const subscribe = async (e: any) => {
    e.preventDefault()
    if (email) {
      setState('LOADING')
      setErrorMessage(null)
      try {
        const response = await axios.post('/api/newsletter', { email })
        setState('SUCCESS')
        setEmail('')
        if (typeof window !== 'undefined') window.localStorage.setItem('subscribed', 'true')

        //   setHideModal(true)
      } catch (e: any) {
        setErrorMessage(e.response.data.error)
        setEmail('')
        setState('ERROR')
      }
    } else if (!email) {
      setState('EMPTY')
      setErrorMessage('Please input an email address')
    }
  }
  useEffect(() => {
    hideModal ? (body.overflowY = '') : (body.overflowY = 'hidden')
  }, [hideModal, body])
  useEffect(() => {
    const handleClickOutside = () => {
      setHideModal(true)
      body.overflowY = ''
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [setHideModal, body])

  return (
    <div className={styles.section}>
      <div
        className={styles.icon_container}
        onClick={(e) => {
          setHideModal(false)
          e.stopPropagation()
          body.overflowY = 'hidden'
        }}
      >
        <div className={styles.icon}>
          <Image src="/svgs/icon-deftify.svg" layout="fill" alt="" />
        </div>
      </div>
      {hideModal === false && (
        <div className={styles.modal}>
          <div className={styles.container} onClick={(e: any) => e.stopPropagation()}>
            <div
              className={styles.closeModal_container}
              onClick={() => {
                setHideModal(true)
                body.overflowY = ''
              }}
            >
              <div className={styles.closeModal}>
                <span></span>
                <span></span>
              </div>
            </div>
            <div className={styles.sub_container}>
              <div className={styles.title}>
                <h3>Subscribe to our newsletter</h3>
              </div>
              <div className={styles.text}>
                <p>
                  Get access to our latest updates on our newsletter. Stay up to date and don&apos;t miss any important
                  update from Deftify.
                </p>
              </div>
              <form onSubmit={subscribe}>
                <div className={styles.input}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    placeholder="Enter email address"
                    value={email}
                    onChange={(e: any) => setEmail(e.target.value)}
                  />
                </div>
                <div className={styles.text}>
                  {state === 'ERROR' && <span data-type={'error'}>{errorMessage!.message}</span>}
                  {state === 'EMPTY' && !email && <span data-type={'error'}>{errorMessage}</span>}
                  {state === 'SUCCESS' && <span data-type={'success'}>Thank you for subscribing</span>}
                </div>
                <Button className={styles.button} disabled={state === 'LOADING'} buttonType="submit">
                  {state === 'LOADING' ? <SmallLoader /> : 'Subscribe'}
                </Button>
              </form>
            </div>
            <div className={styles.image}>
              <Image src="/svgs/newsletter.svg" layout="fill" alt="" priority={true} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Newsletter

import { Button } from '@/shared'
import SmallLoader from '@/shared/smallLoader/SmallLoader'
import axios from 'axios'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from './Subscribe.module.scss'

const Subscribe = () => {
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
      } catch (e: any) {
        setErrorMessage(e.response.data.error)
        setEmail('')
        setState('ERROR')
      }
    }
  }
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Subscribe</h1>
      </div>
      <div className={styles.text}>
        <p>Get access to our latest updates on our newsletter. Stay up to date and do not miss any important update from Deftify.</p>
      </div>
      <form onSubmit={subscribe} className={styles.container}>
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
          {state === 'SUCCESS' && <span data-type={'success'}>Thank you for subscribing</span>}
        </div>
        <Button className={styles.button} disabled={state === 'LOADING'} buttonType="submit">
          {state === 'LOADING' ? <SmallLoader /> : 'Subscribe'}
        </Button>
      </form>
    </section>
  )
}

export default Subscribe

import React, { useState, useEffect } from 'react'
import { Button, InputField } from '@/shared'
import emailjs from 'emailjs-com'
import styles from './Contact.module.scss'

const SERVICE_ID: any = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const TEMPLATE_ID: any = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY: any = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

const Contact = () => {
  const [values, setValues] = useState<{ email: string; message: string }>({
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<string>('IDLE')
  const [responseMessage, setResponseMessage] = useState<string>('')
  useEffect(() => {
    if (status === 'SUCCESS') {
      const timeout = setTimeout(() => {
        setStatus('IDLE')
      }, 5000)
      return () => clearTimeout(timeout)
    }
    if (status === 'LOADING' || status === 'FAILED') {
      const timeout = setTimeout(() => {
        setStatus('IDLE')
      }, 3000)
      return () => clearTimeout(timeout)
    }
  }, [status])

  const handleSubmit = (e: any) => {
    e.preventDefault()

    if (values.email && values.message) {
      emailjs.send(SERVICE_ID, TEMPLATE_ID, values, PUBLIC_KEY).then(
        (response) => {
          setValues({
            email: '',
            message: '',
          })
          setResponseMessage('Thank you for reaching out to us!')
          setStatus('SUCCESS')
        },
        (error) => {
          console.log('FAILED...', error)
          setResponseMessage('An error occurred')
          setStatus('FAILED')
        },
      )
    }
  }
  const handleChange = (e: any) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <section className={styles.section} id="contact">
      <div className={styles.title}>
        <h1>Get in touch with the team</h1>
      </div>
      <form action="" className={styles.container} onSubmit={handleSubmit}>
        <InputField
          label="Email Address"
          placeholder="Contact@deftify.com"
          onChange={(e: any) => setValues({ ...values, email: e.target.value })}
          value={values.email}
          type="email"
        />
        <InputField
          label="Message"
          placeholder="Message"
          className={styles.input}
          onChange={(e: any) => setValues({ ...values, message: e.target.value })}
          value={values.message}
          type="textarea"
        />
        <Button type="primary" className={styles.button} buttonType="submit">
          Submit
        </Button>
        {responseMessage && status === 'SUCCESS' && (
          <div className={styles.text}>
            <p data-type="success">{responseMessage}</p>
          </div>
        )}
        {responseMessage && status === 'FAILED' && (
          <div className={styles.text}>
            <p data-type="error">{responseMessage}</p>
          </div>
        )}
      </form>
    </section>
  )
}

export default Contact

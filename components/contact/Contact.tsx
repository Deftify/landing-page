import { Button, InputField } from '@/shared'
import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import styles from './Contact.module.scss'

const Contact = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault()
  }
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const element = ref.current
    gsap.to(element, {
      y: -200,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'top top',
        scrub: 1,
      },
    })
  }, [])
  return (
    <section className={styles.section} id="contact">
      <div className={styles.title}>
        <h1>Get in touch with the team</h1>
      </div>
      <form action="" className={styles.container} onSubmit={handleSubmit}>
        <InputField label="Email Address" placeholder="Contact@deftify.com" />
        <InputField label="Company Name" placeholder="Company" className={styles.input} />
        <Button type="primary" className={styles.button} buttonType="submit">
          Submit
        </Button>
      </form>
    </section>
  )
}

export default Contact

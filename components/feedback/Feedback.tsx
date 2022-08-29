import { Card } from '@/shared'
import React, { useEffect, useLayoutEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/css'
import styles from './Feedback.module.scss'

const list = [1, 2, 3, 4, 5, 6, 7]

const Feedback = () => {
  const [testimonialNumber, setTestimonialNumber] = useState<number>(3)
  const [testimonialNumber2, setTestimonialNumber2] = useState<number>(3)

  const testimonialSlider = () => {
    let windowSize = window.innerWidth
    if (windowSize > 1023) {
      setTestimonialNumber(3)
      setTestimonialNumber2(3.4)
    }
    if (windowSize > 650 && windowSize <= 1023) {
      setTestimonialNumber(2.2)
      setTestimonialNumber2(2.4)
    }
    if (windowSize > 485 && windowSize <= 650) {
      setTestimonialNumber(1.2)
      setTestimonialNumber2(1.4)
    }
    if (windowSize <= 485) {
      setTestimonialNumber(1)
      setTestimonialNumber2(1.15)
    }
  }
  useEffect(() => {
    testimonialSlider()
  })

  useLayoutEffect(() => {
    window.addEventListener('resize', testimonialSlider)
    testimonialSlider()
    return () => window.removeEventListener('resize', testimonialSlider)
  })
  gsap.registerPlugin(ScrollTrigger)
  const ref = useRef<HTMLElement | null>(null)
  useEffect(() => {
    const element = ref.current
    gsap.to(element, {
      y: -150,
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
    <section className={styles.section}>
      <div className={styles.light}></div>
      <div className={styles.title}>
        <h1>What our users say</h1>
      </div>
      <Swiper
        slidesPerView={testimonialNumber}
        spaceBetween={0}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        className={styles.row}
      >
        {list.map((item) => {
          return (
            <SwiperSlide key={item}>
              <Card />
            </SwiperSlide>
          )
        })}
      </Swiper>
      <Swiper
        slidesPerView={testimonialNumber2}
        spaceBetween={30}
        modules={[Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        centeredSlides={false}
        className={styles.row}
      >
        {list.map((item) => {
          return (
            <SwiperSlide key={item}>
              <Card />
            </SwiperSlide>
          )
        })}
      </Swiper>
      {/* <div className={styles.row}>
        {list.slice(0, 3).map((item) => {
          return <Card key={item} />
        })}
      </div> */}
      {/* <div className={styles.row}>
        {list.slice(0, 4).map((item) => {
          return <Card key={item} />
        })}
      </div> */}
    </section>
  )
}

export default Feedback

import { Card } from '@/shared'
import React, { useEffect, useLayoutEffect, useState } from 'react'
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
  return (
    <section className={styles.section}>
      {/*I disabled this section for now until it's truly ready - Ruddy */}
      {/* <div className={styles.light}></div>
      <div className={styles.title}>
        <h1>What our users say</h1>
      </div>
      <Swiper
        slidesPerView={testimonialNumber2}
        spaceBetween={80}
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
        spaceBetween={100}
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
      </Swiper> */}
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

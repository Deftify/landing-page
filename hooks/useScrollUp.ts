import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

interface Props {
  height: number | string
}

export const useScrollUp = () => {
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
  return ref
}

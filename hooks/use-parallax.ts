"use client"

import { useEffect, useState } from "react"

export const useParallax = () => {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const updateScrollY = () => {
      setScrollY(window.scrollY)
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateScrollY)
        ticking = true
      }
    }

    const handleScroll = () => requestTick()

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollY
}

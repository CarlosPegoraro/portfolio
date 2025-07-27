"use client"

import { useParallax } from "@/hooks/use-parallax"

const ParallaxBackground = () => {
  const scrollY = useParallax()

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Floating geometric shapes */}
      <div
        className="absolute w-64 h-64 bg-portfolio-cyan/5 rounded-full blur-3xl"
        style={{
          top: "10%",
          left: "10%",
          transform: `translate3d(0, ${scrollY * 0.1}px, 0)`,
        }}
      />
      <div
        className="absolute w-96 h-96 bg-portfolio-teal/5 rounded-full blur-3xl"
        style={{
          top: "60%",
          right: "10%",
          transform: `translate3d(0, ${scrollY * -0.15}px, 0)`,
        }}
      />
      <div
        className="absolute w-48 h-48 bg-portfolio-mint/10 rounded-full blur-2xl"
        style={{
          top: "30%",
          right: "30%",
          transform: `translate3d(0, ${scrollY * 0.08}px, 0)`,
        }}
      />
      <div
        className="absolute w-72 h-72 bg-portfolio-beige/5 rounded-full blur-3xl"
        style={{
          bottom: "20%",
          left: "20%",
          transform: `translate3d(0, ${scrollY * -0.12}px, 0)`,
        }}
      />

      {/* Code-like floating elements */}
      <div
        className="absolute text-portfolio-cyan/10 text-6xl font-mono"
        style={{
          top: "20%",
          right: "15%",
          transform: `translate3d(0, ${scrollY * 0.05}px, 0) rotate(${scrollY * 0.02}deg)`,
        }}
      >
        {"<?php"}
      </div>
      <div
        className="absolute text-portfolio-teal/10 text-4xl font-mono"
        style={{
          top: "70%",
          left: "15%",
          transform: `translate3d(0, ${scrollY * -0.08}px, 0) rotate(${scrollY * -0.01}deg)`,
        }}
      >
        {"{ }"}
      </div>
      <div
        className="absolute text-portfolio-mint/10 text-5xl font-mono"
        style={{
          top: "45%",
          left: "5%",
          transform: `translate3d(0, ${scrollY * 0.06}px, 0)`,
        }}
      >
        {"</>"}
      </div>
    </div>
  )
}

export default ParallaxBackground

"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToNext = () => {
    const element = document.getElementById("stacks")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-br from-portfolio-dark to-portfolio-rust flex items-center justify-center relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div
          className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-portfolio-light mb-6">
            {t("hero.title")}
            <span className="block text-portfolio-cyan">{t("hero.titleHighlight")}</span>
          </h1>

          <p className="text-xl md:text-2xl text-portfolio-mint mb-8 max-w-3xl mx-auto leading-relaxed">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <div className="bg-portfolio-teal/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-portfolio-cyan/30">
              <span className="text-portfolio-light font-semibold">{t("hero.stack1")}</span>
            </div>
            <div className="bg-portfolio-teal/20 backdrop-blur-sm rounded-lg px-6 py-3 border border-portfolio-cyan/30">
              <span className="text-portfolio-light font-semibold">{t("hero.stack2")}</span>
            </div>
          </div>

          <div className="prose prose-lg text-portfolio-beige max-w-3xl mx-auto">
            <p className="mb-6">{t("hero.description1")}</p>
            <p>{t("hero.description2")}</p>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-portfolio-mint hover:text-portfolio-cyan transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  )
}

export default HeroSection

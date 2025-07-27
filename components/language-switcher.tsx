"use client"

import { useTranslation } from "@/contexts/translation-context"
import { Globe } from "lucide-react"

const LanguageSwitcher = () => {
  const { language, setLanguage } = useTranslation()

  return (
    <div className="flex items-center space-x-2">
      <Globe className="w-4 h-4 text-portfolio-light" />
      <div className="flex bg-portfolio-brown/20 rounded-lg p-1">
        <button
          onClick={() => setLanguage("en")}
          className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
            language === "en"
              ? "bg-portfolio-cyan text-portfolio-dark"
              : "text-portfolio-light hover:text-portfolio-mint"
          }`}
        >
          EN
        </button>
        <button
          onClick={() => setLanguage("pt")}
          className={`px-3 py-1 text-sm font-medium rounded transition-all duration-200 ${
            language === "pt"
              ? "bg-portfolio-cyan text-portfolio-dark"
              : "text-portfolio-light hover:text-portfolio-mint"
          }`}
        >
          PT
        </button>
      </div>
    </div>
  )
}

export default LanguageSwitcher

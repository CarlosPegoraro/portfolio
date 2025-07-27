"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import enTranslations from "../translations/en.json"
import ptTranslations from "../translations/pt.json"

type Language = "en" | "pt"

interface TranslationContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
  translations: any
}

const TranslationContext = createContext<TranslationContextType | undefined>(undefined)

export const useTranslation = () => {
  const context = useContext(TranslationContext)
  if (!context) {
    throw new Error("useTranslation must be used within a TranslationProvider")
  }
  return context
}

const translationsMap = {
  en: enTranslations,
  pt: ptTranslations,
}

export const TranslationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>("en")
  const [translations, setTranslations] = useState<any>(enTranslations)

  useEffect(() => {
    // Load saved language from localStorage
    const savedLanguage = localStorage.getItem("preferred-language") as Language
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "pt")) {
      setLanguage(savedLanguage)
      setTranslations(translationsMap[savedLanguage])
    }
  }, [])

  useEffect(() => {
    // Update translations when language changes
    setTranslations(translationsMap[language])
  }, [language])

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang)
    setTranslations(translationsMap[lang])
    localStorage.setItem("preferred-language", lang)
  }

  const t = (key: string): string => {
    const keys = key.split(".")
    let value = translations

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k]
      } else {
        return key // Return key if translation not found
      }
    }

    return typeof value === "string" ? value : key
  }

  return (
    <TranslationContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
        translations,
      }}
    >
      {children}
    </TranslationContext.Provider>
  )
}

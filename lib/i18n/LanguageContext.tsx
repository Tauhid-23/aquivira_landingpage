"use client"

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react"
import { translations, Language } from "./translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, fallback?: string) => string
}

const LanguageContext = createContext<LanguageContextType>({
  language: "en",
  setLanguage: () => {},
  t: (key: string, fallback?: string) => fallback || key,
})

const STORAGE_KEY = "aquivira_lang"

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>("en")

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY) as Language
      if (saved === "en" || saved === "bn") {
        setLanguageState(saved)
        document.documentElement.lang = saved
      }
    } catch {
      // Ignore localStorage errors in SSR / private mode
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
      document.documentElement.lang = lang
    } catch {
      // Ignore
    }
  }

  const t = (key: string, fallback?: string): string => {
    const dict = translations[language] as Record<string, string>
    if (dict && dict[key]) {
      return dict[key]
    }
    const defaultDict = translations.en as Record<string, string>
    if (defaultDict && defaultDict[key]) {
      return defaultDict[key]
    }
    return fallback || key
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

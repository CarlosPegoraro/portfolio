"use client"

import { useState, useEffect, useMemo } from "react"
import { Menu, X } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import LanguageSwitcher from "./language-switcher"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("about")
  const { t } = useTranslation()

  const navItems = useMemo(
    () => [
      { id: "about", label: t("nav.about") },
      { id: "stacks", label: t("nav.stacks") },
      { id: "projects", label: t("nav.projects") },
      { id: "history", label: t("nav.history") },
      { id: "contact", label: t("nav.contact") },
    ],
    [t],
  )

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id))
      const scrollPosition = window.scrollY + 100

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [navItems])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-portfolio-dark/95 backdrop-blur-sm border-b border-portfolio-brown/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-portfolio-light font-bold text-xl">{"<Developer />"}</div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  activeSection === item.id
                    ? "text-portfolio-cyan border-b-2 border-portfolio-cyan"
                    : "text-portfolio-light hover:text-portfolio-mint"
                }`}
              >
                {item.label}
              </button>
            ))}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSwitcher />
            <button onClick={() => setIsOpen(!isOpen)} className="text-portfolio-light hover:text-portfolio-mint">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden bg-portfolio-dark border-t border-portfolio-brown/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`block px-3 py-2 text-base font-medium w-full text-left transition-colors duration-200 ${
                    activeSection === item.id
                      ? "text-portfolio-cyan bg-portfolio-brown/20"
                      : "text-portfolio-light hover:text-portfolio-mint hover:bg-portfolio-brown/10"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation

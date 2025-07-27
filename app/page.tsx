"use client"

import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import TechStack from "@/components/tech-stack"
import Projects from "@/components/projects"
import ITHistory from "@/components/it-history"
import Contact from "@/components/contact"
import { useTranslation } from "@/contexts/translation-context"

export default function Home() {
  const { t } = useTranslation()

  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TechStack />
      <Projects />
      <ITHistory />
      <Contact />

      {/* Footer */}
      <footer className="bg-portfolio-dark py-8 border-t border-portfolio-brown/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-portfolio-beige">{t("footer.copyright")}</p>
            <p className="text-portfolio-rust mt-2">{t("footer.crafted")}</p>
          </div>
        </div>
      </footer>
    </main>
  )
}

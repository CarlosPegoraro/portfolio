"use client"

import { useEffect, useState, useMemo } from "react"
import { Database, Server, Globe, Code, Layers, GitBranch } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t, translations } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("stacks")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const techCategories = useMemo(
    () => [
      {
        title: t("techStack.backend.title"),
        icon: <Server className="w-8 h-8" />,
        color: "portfolio-cyan",
        technologies: translations?.techStack?.backend?.technologies || [],
      },
      {
        title: t("techStack.database.title"),
        icon: <Database className="w-8 h-8" />,
        color: "portfolio-teal",
        technologies: translations?.techStack?.database?.technologies || [],
      },
      {
        title: t("techStack.frontend.title"),
        icon: <Globe className="w-8 h-8" />,
        color: "portfolio-mint",
        technologies: translations?.techStack?.frontend?.technologies || [],
      },
      {
        title: t("techStack.devops.title"),
        icon: <Layers className="w-8 h-8" />,
        color: "portfolio-beige",
        technologies: translations?.techStack?.devops?.technologies || [],
      },
      {
        title: t("techStack.development.title"),
        icon: <Code className="w-8 h-8" />,
        color: "portfolio-cyan",
        technologies: translations?.techStack?.development?.technologies || [],
      },
      {
        title: t("techStack.versionControl.title"),
        icon: <GitBranch className="w-8 h-8" />,
        color: "portfolio-teal",
        technologies: translations?.techStack?.versionControl?.technologies || [],
      },
    ],
    [t, translations],
  )

  return (
    <section id="stacks" className="py-20 bg-portfolio-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-6">{t("techStack.title")}</h2>
          <p className="text-xl text-portfolio-rust max-w-3xl mx-auto">{t("techStack.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techCategories.map((category, index) => (
            <div
              key={category.title}
              className={`bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className={`text-${category.color} mr-3`}>{category.icon}</div>
                <h3 className="text-xl font-semibold text-portfolio-dark">{category.title}</h3>
              </div>

              <ul className="space-y-2">
                {Array.isArray(category.technologies) &&
                  category.technologies.map((tech: string) => (
                    <li key={tech} className="text-portfolio-rust flex items-center">
                      <span className={`w-2 h-2 bg-${category.color} rounded-full mr-3`}></span>
                      {tech}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TechStack

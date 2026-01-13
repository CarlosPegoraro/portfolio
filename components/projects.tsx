"use client"

import { useEffect, useState } from "react"
import { ExternalLink, Github, Database, Globe } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"
import Link from "next/link"

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("projects")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: t("projects.ecommerce.title"),
      description: t("projects.ecommerce.description"),
      technologies: ["Laravel", "PostgreSQL", "Blade", "Tailwind", "Serp API"],
      type: t("projects.ecommerce.type"),
      icon: <Globe className="w-6 h-6" />,
      site: t("projects.ecommerce.site"),
      color: "portfolio-cyan",
    },
    {
      title: t("projects.api.title"),
      description: t("projects.api.description"),
      technologies: ["TypeScript", "fastify", "Redis", "Meta API", "Google AI Studio"],
      type: t("projects.api.type"),
      icon: <Database className="w-6 h-6" />,
      site: t("projects.api.site"),
      color: "portfolio-beige",
    },
    {
      title: t("projects.taskManager.title"),
      description: t("projects.taskManager.description"),
      technologies: ["Laravel", "Blade", "PostgreSQL", "Open Finance", "Google AI Studio"],
      type: t("projects.taskManager.type"),
      icon: <Globe className="w-6 h-6" />,
      site: t("projects.taskManager.site"),
      color: "portfolio-mint",
    },
    {
      title: t("projects.analytics.title"),
      description: t("projects.analytics.description"),
      technologies: ["PHP", "React", "PostgreSQL", "Open Street Map", "Server TCP"],
      type: t("projects.analytics.type"),
      icon: <Database className="w-6 h-6" />,
      site: t("projects.analytics.site"),
      color: "portfolio-beige",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-portfolio-dark to-portfolio-brown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-light mb-6">{t("projects.title")}</h2>
          <p className="text-xl text-portfolio-mint max-w-3xl mx-auto">{t("projects.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-portfolio-cyan/20 hover:border-portfolio-cyan/40 transition-all duration-300 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className={`text-${project.color} mr-3`}>{project.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold text-portfolio-light">{project.title}</h3>
                    <span className={`text-sm text-${project.color} font-medium`}>{project.type}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Link href={project.site} className="text-portfolio-mint hover:text-portfolio-cyan transition-colors">
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>

              <p className="text-portfolio-beige mb-4 leading-relaxed">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-portfolio-teal/20 text-portfolio-mint text-sm rounded-full border border-portfolio-cyan/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

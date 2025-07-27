"use client"

import { useEffect, useState } from "react"
import { Calendar, Award, BookOpen, Briefcase } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const ITHistory = () => {
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

    const element = document.getElementById("history")
    if (element) {
      observer.observe(element)
    }

    return () => observer.disconnect()
  }, [])

  const milestones = [
    {
      year: "2018",
      title: t("history.milestones.2018.title"),
      description: t("history.milestones.2018.description"),
      icon: <BookOpen className="w-6 h-6" />,
      type: t("history.milestones.2018.type"),
    },
    {
      year: "2019",
      title: t("history.milestones.2019.title"),
      description: t("history.milestones.2019.description"),
      icon: <Award className="w-6 h-6" />,
      type: t("history.milestones.2019.type"),
    },
    {
      year: "2020",
      title: t("history.milestones.2020.title"),
      description: t("history.milestones.2020.description"),
      icon: <Briefcase className="w-6 h-6" />,
      type: t("history.milestones.2020.type"),
    },
    {
      year: "2021",
      title: t("history.milestones.2021.title"),
      description: t("history.milestones.2021.description"),
      icon: <Award className="w-6 h-6" />,
      type: t("history.milestones.2021.type"),
    },
    {
      year: "2022",
      title: t("history.milestones.2022.title"),
      description: t("history.milestones.2022.description"),
      icon: <BookOpen className="w-6 h-6" />,
      type: t("history.milestones.2022.type"),
    },
    {
      year: "2023",
      title: t("history.milestones.2023.title"),
      description: t("history.milestones.2023.description"),
      icon: <Briefcase className="w-6 h-6" />,
      type: t("history.milestones.2023.type"),
    },
    {
      year: "2024",
      title: t("history.milestones.2024.title"),
      description: t("history.milestones.2024.description"),
      icon: <Award className="w-6 h-6" />,
      type: t("history.milestones.2024.type"),
    },
  ]

  const getTypeColor = (type: string) => {
    if (type.includes("Learning") || type.includes("Aprendizado")) return "portfolio-cyan"
    if (type.includes("Milestone") || type.includes("Marco")) return "portfolio-teal"
    if (type.includes("Professional") || type.includes("Profissional")) return "portfolio-mint"
    return "portfolio-beige"
  }

  return (
    <section id="history" className="py-20 bg-portfolio-light">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-dark mb-6">{t("history.title")}</h2>
          <p className="text-xl text-portfolio-rust max-w-3xl mx-auto">{t("history.subtitle")}</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-0.5 h-full bg-portfolio-rust/30"></div>

          {milestones.map((milestone, index) => (
            <div
              key={milestone.year}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-${getTypeColor(milestone.type)} rounded-full border-4 border-white shadow-lg z-10`}
              ></div>

              {/* Content */}
              <div
                className={`ml-16 md:ml-0 md:w-5/12 ${index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"}`}
              >
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-3">
                    <div className={`text-${getTypeColor(milestone.type)} mr-3`}>{milestone.icon}</div>
                    <div>
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-portfolio-rust mr-2" />
                        <span className="text-portfolio-rust font-semibold">{milestone.year}</span>
                      </div>
                      <span
                        className={`text-xs text-${getTypeColor(milestone.type)} font-medium uppercase tracking-wide`}
                      >
                        {milestone.type}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-portfolio-dark mb-3">{milestone.title}</h3>

                  <p className="text-portfolio-rust leading-relaxed">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ITHistory

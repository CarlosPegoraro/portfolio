"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react"
import { useTranslation } from "@/contexts/translation-context"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const { t } = useTranslation()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-portfolio-dark via-portfolio-brown to-portfolio-rust">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-portfolio-light mb-6">{t("contact.title")}</h2>
          <p className="text-xl text-portfolio-mint max-w-3xl mx-auto">{t("contact.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-portfolio-light mb-6">{t("contact.getInTouch")}</h3>
              <p className="text-portfolio-beige leading-relaxed mb-8">{t("contact.description")}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-portfolio-teal/20 p-3 rounded-lg mr-4">
                  <Mail className="w-6 h-6 text-portfolio-cyan" />
                </div>
                <div>
                  <p className="text-portfolio-light font-medium">{t("contact.email")}</p>
                  <p className="text-portfolio-mint">carlospegorarolopes@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-portfolio-teal/20 p-3 rounded-lg mr-4">
                  <Phone className="w-6 h-6 text-portfolio-cyan" />
                </div>
                <div>
                  <p className="text-portfolio-light font-medium">{t("contact.phone")}</p>
                  <p className="text-portfolio-mint">+55 (11) 972231780</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="bg-portfolio-teal/20 p-3 rounded-lg mr-4">
                  <MapPin className="w-6 h-6 text-portfolio-cyan" />
                </div>
                <div>
                  <p className="text-portfolio-light font-medium">{t("contact.location")}</p>
                  <p className="text-portfolio-mint">Sorocaba, São Paulo, Brasil</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4 pt-6">
              <a
                href="https://www.linkedin.com/in/carlos-eduardo-pegoraro-lopes-426a7637b/" target="_blank"
                className="bg-portfolio-teal/20 p-3 rounded-lg text-portfolio-cyan hover:text-portfolio-mint hover:bg-portfolio-teal/30 transition-all duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/CarlosPegoraro" target="_blank"
                className="bg-portfolio-teal/20 p-3 rounded-lg text-portfolio-cyan hover:text-portfolio-mint hover:bg-portfolio-teal/30 transition-all duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Contact Form */}
          {/* <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-portfolio-cyan/20">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-portfolio-light font-medium mb-2">
                    {t("contact.form.name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-portfolio-cyan/30 rounded-lg text-portfolio-light placeholder-portfolio-beige focus:outline-none focus:border-portfolio-cyan focus:ring-1 focus:ring-portfolio-cyan"
                    placeholder={t("contact.form.namePlaceholder")}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-portfolio-light font-medium mb-2">
                    {t("contact.form.email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/10 border border-portfolio-cyan/30 rounded-lg text-portfolio-light placeholder-portfolio-beige focus:outline-none focus:border-portfolio-cyan focus:ring-1 focus:ring-portfolio-cyan"
                    placeholder={t("contact.form.emailPlaceholder")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-portfolio-light font-medium mb-2">
                  {t("contact.form.subject")}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white/10 border border-portfolio-cyan/30 rounded-lg text-portfolio-light placeholder-portfolio-beige focus:outline-none focus:border-portfolio-cyan focus:ring-1 focus:ring-portfolio-cyan"
                  placeholder={t("contact.form.subjectPlaceholder")}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-portfolio-light font-medium mb-2">
                  {t("contact.form.message")}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-white/10 border border-portfolio-cyan/30 rounded-lg text-portfolio-light placeholder-portfolio-beige focus:outline-none focus:border-portfolio-cyan focus:ring-1 focus:ring-portfolio-cyan resize-none"
                  placeholder={t("contact.form.messagePlaceholder")}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-portfolio-cyan hover:bg-portfolio-teal text-portfolio-dark font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center"
              >
                <Send className="w-5 h-5 mr-2" />
                {t("contact.form.send")}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default Contact

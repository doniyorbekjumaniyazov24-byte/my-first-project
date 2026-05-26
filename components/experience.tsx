"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

const experiences = [
  {
    company: "O'qituvchi",
    role: "Matematika va Informatika O'qituvchisi",
    period: "2023 — Hozir",
    description: [
      "Matematika va informatika fanlarini samarali uslublar bilan o'qitish",
      "C#, Python, Java tillarida dasturlash asoslarini o'rgatish",
      "SAT va IELTS imtihonlariga tayyorgarlik kurslari o'tkazish",
      "Instagram orqali minglab foydalanuvchilarga ta'lim kontenti yaratish",
    ],
    technologies: ["Pedagogika", "Python", "C#", "Java", "Matematika"],
  },
  {
    company: "Bakalavr",
    role: "Amaliy Matematika (4-kurs Talaba)",
    period: "2022 — 2026",
    description: [
      "Diplom ishi: SQL Engine from Scratch — to'liq funksional query processor",
      "Query optimization orqali 7.2x tezlashishga erishish",
      "Uchta execution model (Volcano, RBO+Volcano, Vectorized) solishtirish",
      "Magistratura rejasi: Computer Science yo'nalishida davom ettirish",
    ],
    technologies: ["SQL", "Python", "AST", "Query Optimization", "NumPy"],
  },
  {
    company: "EdTech",
    role: "Mustaqil Dasturchi",
    period: "2024 — Hozir",
    description: [
      "Instagram carousel generator — ta'lim postlarini avtomatik yaratish tizimi",
      "Portfolio sayt — Next.js va TypeScript bilan professional platforma",
      "Telegram bot LMS kontseptsiyasi va online dars platformasi dizayni",
      "Har xil ta'lim vositalarini yaratish va sinab ko'rish",
    ],
    technologies: ["Next.js", "TypeScript", "Python", "aiogram", "Tailwind"],
  },
]

export function Experience() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            Tajriba
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-8">
          {/* Tab List */}
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-4 py-3 text-left text-sm font-medium transition-colors whitespace-nowrap",
                  "border-b-2 md:border-b-0 md:border-l-2 -mb-px md:mb-0 md:-ml-px",
                  activeTab === index
                    ? "text-primary border-primary bg-primary/5"
                    : "text-muted-foreground border-transparent hover:text-foreground hover:bg-muted/50"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          {/* Tab Panel */}
          <div className="min-h-[300px]">
            {experiences.map((exp, index) => (
              <div
                key={exp.company}
                className={cn(
                  "space-y-4",
                  activeTab === index ? "block" : "hidden"
                )}
              >
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.role}{" "}
                    <span className="text-primary">@ {exp.company}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground font-mono mt-1">
                    {exp.period}
                  </p>
                </div>
                <ul className="space-y-3">
                  {exp.description.map((item, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                      <span dangerouslySetInnerHTML={{ __html: item.replace(/&apos;/g, "'") }} />
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2 pt-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

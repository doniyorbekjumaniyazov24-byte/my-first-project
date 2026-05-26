import { ExternalLink, Github, Folder } from "lucide-react"
import Link from "next/link"

const featuredProjects = [
  {
    title: "SQL Engine from Scratch",
    description:
      "To'liq funksional SQL engine — lexer, parser, semantic analyzer, logical optimizer (RBO) va uchta xil execution model (Volcano naive, RBO+Volcano, Vectorized). Predicate Pushdown va Column Pruning orqali 7.2x tezlashish erishildi. Diplom ishi sifatida yaratilgan.",
    technologies: ["Python", "NumPy", "SQL", "AST", "Query Optimization", "Graphviz", "Streamlit"],
    github: "https://github.com/Quantum117/SQL_engine",
    external: "https://sql-engine.streamlit.app",
  },
  {
    title: "Instagram Carousel Generator",
    description:
      "Instagram uchun ta'lim karousel postlarini avtomatik generatsiya qiluvchi tool. AI taqqoslash, Brain Hacks va boshqa ta'lim mavzularida professional dizaynli slaydlar yaratadi. Playwright orqali to'liq avtomatlashtirilgan.",
    technologies: ["Next.js", "TypeScript", "Playwright", "HTML/CSS", "Design Automation"],
    github: "",
    external: "",
  },
  {
    title: "Diploma Defense Speech Generator",
    description:
      "Diplom himoyasi uchun professional speech va prezentatsiya materiallari generatori. Real kod namunalari va savol-javob bo'limlari bilan to'liq rus tilidagi nutq tayyorlaydi. docx va pptx formatlarida eksport qiladi.",
    technologies: ["Node.js", "docx", "pptx", "Document Generation"],
    github: "",
    external: "",
  },
]

const otherProjects = [
  {
    title: "5-Year EdTech Roadmap Visualizer",
    description: "5 yillik ta'lim texnologiyalari yo'l xaritasini interaktiv vizualizatsiya qiluvchi vosita.",
    technologies: ["React", "Data Visualization"],
    github: "",
  },
  {
    title: "AI Instagram Stories Generator",
    description: "Instagram Stories uchun AI yordamida professional dizaynli rasmlar yaratuvchi dastur.",
    technologies: ["Python", "Image Generation"],
    github: "",
  },
  {
    title: "Personal Brand Logo Designer",
    description: "Shaxsiy brend uchun zamonaviy logotip va vizual identifikatsiya tizimini yaratish.",
    technologies: ["HTML/CSS", "SVG"],
    github: "",
  },
  {
    title: "Math & Code Teaching Materials",
    description: "Matematika va dasturlash darslarida foydalanish uchun interaktiv o'quv materiallari.",
    technologies: ["Jupyter", "Python"],
    github: "",
  },
  {
    title: "SAT & IELTS Prep Tools",
    description: "SAT va IELTS imtihonlariga tayyorgarlik uchun masala va test generatori.",
    technologies: ["Python", "Educational Content"],
    github: "",
  },
  {
    title: "Code Snippet Visualizer",
    description: "Dasturlash darslarida foydalanish uchun chiroyli kod snippetlarini vizualizatsiya qiluvchi vosita.",
    technologies: ["Python", "Syntax Highlighting"],
    github: "",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            Asosiy Loyihalar
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              {/* Project Image Placeholder */}
              <div
                className={`md:col-span-7 aspect-video rounded-lg bg-card border border-border overflow-hidden ${
                  index % 2 === 1 ? "md:col-start-6 md:row-start-1" : ""
                }`}
              >
                <div className="w-full h-full flex items-center justify-center text-muted-foreground/30 text-4xl font-bold bg-gradient-to-br from-primary/5 to-primary/10">
                  {project.title.split(" ").map(w => w[0]).join("")}
                </div>
              </div>

              {/* Project Content */}
              <div
                className={`md:col-span-6 md:row-start-1 space-y-4 ${
                  index % 2 === 1
                    ? "md:col-start-1 md:text-left"
                    : "md:col-start-6 md:text-right"
                }`}
              >
                <p className="text-sm font-mono text-primary">Asosiy Loyiha</p>
                <h3 className="text-2xl font-bold text-foreground">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg shadow-lg border border-border">
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 text-sm font-mono text-muted-foreground ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li key={tech}>{tech}</li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "md:justify-start" : "md:justify-end"
                  }`}
                >
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                  {project.external && (
                    <Link
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live project"
                      className="text-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div className="text-center mb-12">
          <h3 className="text-xl font-bold text-foreground">
            Boshqa Loyihalar
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-card p-6 rounded-lg border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center justify-between mb-6">
                <Folder className="h-10 w-10 text-primary" />
                <div className="flex gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub repository"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                  )}
                  {project.external && (
                    <Link
                      href={project.external}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Live project"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </Link>
                  )}
                </div>
              </div>
              <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors mb-2">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2 text-xs font-mono text-muted-foreground">
                {project.technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

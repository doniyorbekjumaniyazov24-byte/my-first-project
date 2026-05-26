import { ArrowDown } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto w-full">
        <p className="text-primary font-medium mb-4 tracking-wide">
          Salom, mening ismim
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-foreground mb-4 text-balance">
          Doniyor Jumaniyazov.
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-8 text-balance">
          Men dasturlash va matematika o&apos;qitaman.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-12 leading-relaxed">
          Amaliy matematika bo&apos;yicha 4-kurs talabasiman va matematika hamda informatika
          o&apos;qituvchisiman. C#, Python, Java tillarida dasturlash bilan shug&apos;ullanaman.
          Hozirda SQL Engine optimizatsiyasi ustida diplom ishim tugallanmoqda.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Loyihalarim
          </Link>
          <Link
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
          >
            Men haqimda
            <ArrowDown className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

const skills = [
  "Python",
  "C#",
  "Java",
  "SQL & Database Optimization",
  "Next.js & React",
  "C (fundamental)",
  "Matematika",
  "AI & Machine Learning",
]

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            Men haqimda
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Men amaliy matematika bo&apos;yicha 4-kurs bakalavr talabasiman.
              Bir vaqtning o&apos;zida matematika va informatika o&apos;qituvchisi sifatida
              ishlayman. Dasturlashga bo&apos;lgan qiziqishim yoshligimdan boshlangan —
              birinchi yozgan kodim meni butunlay yangi dunyoga olib kirdi.
            </p>
            <p>
              Hozirda{" "}
              <span className="text-primary font-medium">SQL Engine from Scratch</span>{" "}
              mavzusida diplom ishim tugallanmoqda. Ushbu loyihada to&apos;liq
              funksional SQL engine yaratdim — lexer, parser, semantic analyzer va
              query optimizer bilan. Predicate Pushdown va Column Pruning orqali{" "}
              <span className="text-primary font-medium">7.2x tezlashish</span>{" "}
              erishildi.
            </p>
            <p>
              Instagram&apos;da{" "}
              <span className="text-primary font-medium">@doniyorbekjumaniyazov</span>{" "}
              handle ostida ta&apos;lim kontenti yarataman — Code teacher, Brain teacher
              va Math teacher yo&apos;nalishlarida. Kelajakda magistraturani{" "}
              <span className="text-primary font-medium">Computer Science</span>{" "}
              yo&apos;nalishida davom ettirish va EdTech sohasida innovatsion loyihalar
              yaratish rejam bor.
            </p>
            <p className="pt-2">
              So&apos;nggi vaqtda ishlayotgan texnologiyalar:
            </p>
            <ul className="grid grid-cols-2 gap-2 pt-2">
              {skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-primary/20">
              <div className="absolute inset-0 flex items-center justify-center text-primary/50 text-6xl font-bold">
                DJ
              </div>
              <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors duration-300" />
            </div>
            <div className="absolute -inset-2 border-2 border-primary rounded-lg -z-10 translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300" />
          </div>
        </div>
      </div>
    </section>
  )
}

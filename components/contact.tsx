import Link from "next/link"
import { Github, Mail } from "lucide-react"

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">Keyingi qadam?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
          Bog&apos;laning
        </h2>
        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Hamkorlik, savol yoki shunchaki salom aytish uchun murojaat qilishingiz mumkin.
          Instagram&apos;da ta&apos;lim kontentlarimni ko&apos;rishingiz va u orqali
          bog&apos;lanishingiz ham mumkin. Har qanday xabarga imkon qadar tezroq javob beraman!
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="https://instagram.com/doniyorbekjumaniyazov"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            <InstagramIcon className="h-5 w-5" />
            Instagram
          </Link>
          <Link
            href="https://github.com/Quantum117"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
          >
            <Github className="h-5 w-5" />
            GitHub
          </Link>
        </div>
      </div>
    </section>
  )
}

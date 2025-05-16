import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Code, Globe, Users } from "lucide-react"
import Image from "next/image"
import TestimonialCarousel from "@/components/testimonial-carousel"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="border-b bg-white">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold">école {241} communities</span>
          </div>
          <nav className="flex items-center gap-4">
            <div className="flex gap-2">
              <Link href="/login/apprenant" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Apprenant
              </Link>
              <Link href="/login/formateur" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Formateur
              </Link>
              <Link
                href="/login/administrateur"
                className="text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Admin
              </Link>
            </div>
            <Link href="/contact">
              <Button variant="default">Nous contacter</Button>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-32">
          {/* Decorative shapes */}
          <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 transform">
            <div className="shape-blob h-64 w-64 bg-secondary/20"></div>
          </div>
          <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 transform">
            <div className="shape-blob-2 h-80 w-80 bg-primary/20"></div>
          </div>
          <div className="absolute right-1/4 top-1/4">
            <div className="shape-blob-3 h-40 w-40 bg-secondary/30"></div>
          </div>

          <div className="container relative z-10">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                La plateforme d'apprentissage pour les métiers du numérique
              </h1>
              <p className="mb-8 text-xl text-muted-foreground">
                Développez vos compétences avec école {241} communities et rejoignez une communauté d'apprenants
                passionnés
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/login/apprenant">
                  <Button size="lg" className="gap-2">
                    Commencer <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    En savoir plus
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Formations Section */}
        <section className="py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Nos Formations</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Découvrez nos programmes de formation conçus pour vous préparer aux métiers du numérique.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {/* Formation 1 */}
              <div className="group overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Développement Web"
                    width={600}
                    height={300}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full">12 modules</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Code className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Développement Web</h3>
                  <p className="mb-4 text-muted-foreground">
                    Apprenez à créer des sites et applications web modernes avec les technologies les plus demandées.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>12 modules de formation</span>
                  </div>
                </div>
              </div>

              {/* Formation 2 */}
              <div className="group overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Référent Digital"
                    width={600}
                    height={300}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-secondary/90 text-white text-xs px-2 py-1 rounded-full">10 modules</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10">
                    <Globe className="h-6 w-6 text-secondary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Référent Digital</h3>
                  <p className="mb-4 text-muted-foreground">
                    Devenez expert en stratégie digitale et accompagnez les entreprises dans leur transformation
                    numérique.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>10 modules de formation</span>
                  </div>
                </div>
              </div>

              {/* Formation 3 */}
              <div className="group overflow-hidden rounded-xl border bg-card transition-all hover:shadow-lg">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=600"
                    alt="Digital Creator"
                    width={600}
                    height={300}
                    className="object-cover w-full h-full transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-primary/90 text-white text-xs px-2 py-1 rounded-full">8 modules</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold">Digital Creator</h3>
                  <p className="mb-4 text-muted-foreground">
                    Maîtrisez la création de contenu digital et développez votre présence en ligne.
                  </p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <BookOpen className="mr-2 h-4 w-4" />
                    <span>8 modules de formation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="bg-muted py-20">
          <div className="container">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold">Ce que disent nos apprenants</h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Découvrez les témoignages de ceux qui ont suivi nos formations.
              </p>
            </div>

            <TestimonialCarousel />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="mx-auto max-w-4xl rounded-2xl bg-gradient-to-r from-primary to-primary/80 p-10 text-center text-white">
              <h2 className="mb-4 text-3xl font-bold">Prêt à commencer votre parcours ?</h2>
              <p className="mx-auto mb-8 max-w-2xl">
                Contactez-nous pour en savoir plus sur nos formations et comment vous inscrire.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link href="/login/apprenant">
                  <Button variant="secondary" size="lg">
                    Se connecter
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="bg-transparent text-white hover:bg-white/10">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <span className="font-bold">école {241} communities</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Une plateforme éducative moderne pour apprendre, enseigner et grandir ensemble.
              </p>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Formations</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Développement Web
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Référent Digital
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Digital Creator
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Liens utiles</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/login/apprenant" className="text-muted-foreground hover:text-foreground">
                    Connexion Apprenant
                  </Link>
                </li>
                <li>
                  <Link href="/login/formateur" className="text-muted-foreground hover:text-foreground">
                    Connexion Formateur
                  </Link>
                </li>
                <li>
                  <Link href="/login/administrateur" className="text-muted-foreground hover:text-foreground">
                    Connexion Admin
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4 font-bold">Contact</h4>
              <address className="not-italic text-sm text-muted-foreground">
                <p>123 Rue de l'Innovation</p>
                <p>Libreville, Gabon</p>
                <p className="mt-2">contact@ecole241.com</p>
                <p>+241 12 34 56 78</p>
              </address>
            </div>
          </div>

          <div className="mt-8 border-t pt-8 text-center text-sm text-muted-foreground">
            <p>
              &copy; {new Date().getFullYear()} école {241} communities. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

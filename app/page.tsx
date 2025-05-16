"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, BookOpen, Code, Globe, Users } from "lucide-react"
import Image from "next/image"
import TestimonialCarousel from "@/components/testimonial-carousel"
import Header from "@/components/header"
import Footer from "@/components/footer"
import Hero from "@/components/hero"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
        <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />
        
        {/* Formations Section */}
        <section className=" py-20">
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
                    src="/dev-web.jpeg?height=300&width=600"
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
                    src="/referent-digital.jpeg?height=300&width=600"
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
                    src="/digital-creator.jpeg?height=300&width=600"
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
                  <Button className="text-white" variant="secondary" size="lg">
                    Se connecter
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg" className="bg-transparent bg-white text-black hover:bg-white/10">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
        <Footer />

      
    </div>
  )
}

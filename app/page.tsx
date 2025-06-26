"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ChevronRight, Code, Laptop, PenTool, Star } from "lucide-react"
import Header from "@/components/header"
import { AceternityTestimonials } from "@/components/aceternity-testimonials"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const testimonials = [
    {
      name: "Marie Dupont",
      role: "Développeuse Web",
      content:
        "La formation en développement web m'a permis d'acquérir les compétences nécessaires pour décrocher mon premier emploi dans le domaine. Les formateurs sont exceptionnels et le contenu est parfaitement adapté au marché du travail actuel.",
      avatarSrc: "/placeholder.svg?height=400&width=400&text=Marie",
    },
    {
      name: "Jean Martin",
      role: "Référent Digital",
      content:
        "Grâce à École {241} Communities, j'ai pu me reconvertir professionnellement et trouver un emploi passionnant dans le marketing digital. L'accompagnement personnalisé et les projets concrets m'ont donné confiance en mes capacités.",
      avatarSrc: "/placeholder.svg?height=400&width=400&text=Jean",
    },
    {
      name: "Sophie Leclerc",
      role: "Digital Creator",
      content:
        "La formation Digital Creator m'a donné tous les outils pour lancer ma carrière de créatrice de contenu et développer ma communauté. Je recommande vivement cette formation à tous ceux qui souhaitent se démarquer sur les réseaux sociaux.",
      avatarSrc: "/placeholder.svg?height=400&width=400&text=Sophie",
    },
    {
      name: "Thomas Dubois",
      role: "Entrepreneur Tech",
      content:
        "J'ai suivi plusieurs formations chez École {241} Communities et chacune d'entre elles m'a apporté des compétences précieuses pour développer mon entreprise. Le rapport qualité-prix est imbattable !",
      avatarSrc: "/placeholder.svg?height=400&width=400&text=Thomas",
    },
  ]
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative w-full overflow-hidden py-20 md:py-32 lg:py-40 bg-white">
          <div className="container relative z-10 px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center ">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl text-black"
              >
                La plateforme pour les apprenants du numérique
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mt-6 text-lg text-black md:text-xl"
              >
                Rejoignez plus de 500 apprenants qui utilisent École {241} Communities pour développer leurs compétences
                numériques et transformer leur carrière
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
              >
                <Link href="/connexion">
                  <Button size="lg" className="w-full sm:w-auto text-white bg-red-500 hover:bg-red-300">
                    Commencer maintenant
                  </Button>
                </Link>
                <Link href="/formations">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto border-black border-2 text-black"
                  >
                    Découvrir nos formations
                  </Button>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-32 grid gap-6 md:grid-cols-3"
            >
              {/* Carte Développement Web */}
              <div className="group relative overflow-hidden rounded-xl bg-blue-400 p-6 transition-all hover:shadow-lg">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-200 transition-all group-hover:scale-110"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-black">Développement Web</h3>
                  <p className="mt-2 text-sm  text-black">
                    Apprenez à créer des sites web et des applications modernes avec HTML, CSS, JavaScript et les
                    frameworks populaires.
                  </p>
                  <div className="mt-4 flex items-center">
                    <Code className="mr-2 h-5 w-5" />
                    <span className="text-sm font-medium text-black">12 cours disponibles</span>
                  </div>
                </div>
              </div>

              {/* Carte Référent Digital */}
              <div className="group relative overflow-hidden rounded-xl bg-red-400 p-6 transition-all hover:shadow-lg">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-red-200  transition-all group-hover:scale-110"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold  text-black">Référent Digital</h3>
                  <p className="mt-2 text-sm text-black">
                    Devenez expert en stratégie digitale, marketing numérique, SEO et analyse de données.
                  </p>
                  <div className="mt-4 flex items-center">
                    <Laptop className="mr-2 h-5 w-5 text-black" />
                    <span className="text-sm font-medium text-black">10 cours disponibles</span>
                  </div>
                </div>
              </div>

              {/* Carte Digital Creator */}
              <div className="group relative overflow-hidden rounded-xl bg-purple-400 p-6 transition-all hover:shadow-lg">
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-200 transition-all group-hover:scale-110"></div>
                <div className="relative">
                  <h3 className="text-xl font-bold text-black">Digital Creator</h3>
                  <p className="mt-2 text-sm text-black">
                    Créez du contenu captivant pour les réseaux sociaux et développez votre présence en ligne.
                  </p>
                  <div className="mt-4 flex items-center">
                    <PenTool className="mr-2 h-5 w-5 text-tertiary" />
                    <span className="text-sm font-medium text-black">8 cours disponibles</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Espace supplémentaire */}
            <div className="mt-16"></div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-red-500 px-3 py-1 text-sm text-white">
                  Nos formations
                </div>
                <h2 className="text-black text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Choisissez votre parcours d&apos;apprentissage
                </h2>
                <p className="text-black max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nos formations sont conçues pour vous aider à développer des compétences recherchées sur le marché du
                  travail.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-blue-500 hover:border-primary-blue transition-colors duration-300 bg-white">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500 text-white">
                      <Code className="h-6 w-6 text-black" />
                    </div>
                    <CardTitle className="text-black mt-4">Développement Web</CardTitle>
                    <CardDescription>Apprenez à créer des sites web et des applications web modernes.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-black">
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>HTML, CSS et JavaScript</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>React et Next.js</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>Développement backend</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/formations/developpement-web" className="w-full">
                      <Button className="w-full bg-blue-500 hover:bg-blue-300">En savoir plus</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-red-500 hover:border-tertiary transition-colors duration-300 bg-white">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-red-500">
                      <Laptop className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 text-black">Référent Digital</CardTitle>
                    <CardDescription>Devenez un expert en stratégie digitale et marketing numérique.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-black">
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>Marketing digital</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>SEO et SEM</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>Analyse de données</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/formations/referent-digital" className="w-full">
                      <Button className="w-full bg-red-500 hover:bg-red-300">En savoir plus</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <Card className="h-full border-2 border-purple-500 hover:border-purple-500 transition-colors duration-300 bg-white">
                  <CardHeader>
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-purple-500 text-black">
                      <PenTool className="h-6 w-6" />
                    </div>
                    <CardTitle className="mt-4 text-black">Digital Creator</CardTitle>
                    <CardDescription>Créez du contenu digital captivant pour les réseaux sociaux.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-black">
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>Création de contenu</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>Montage vidéo</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <Star className="h-4 w-4 text-red-500" />
                        <span>Stratégie de contenu</span>
                      </li>
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Link href="/formations/digital-creator" className="w-full">
                      <Button className="w-full bg-purple-500 hover:bg-purple-300">En savoir plus</Button>
                    </Link>
                  </CardFooter>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-purple-500 px-3 py-1 text-sm text-white">Témoignages</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">Ce que disent nos apprenants</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
                  Découvrez les expériences de nos apprenants qui ont transformé leur carrière grâce à nos formations.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-6xl">
              <AceternityTestimonials testimonials={testimonials} />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
                  Prêt à commencer votre parcours ?
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-black">
                  Rejoignez notre communauté d&apos;apprenants et transformez votre carrière dès aujourd&apos;hui.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/login/apprenant">
                  <Button size="lg" className="bg-red-500 gap-1.5">
                    Commencer maintenant
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="outline">
                    Nous contacter
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}

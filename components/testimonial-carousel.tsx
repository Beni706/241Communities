"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

type Testimonial = {
  id: number
  name: string
  role: string
  initials: string
  content: string
  bgColor: string
  textColor: string
}

export default function TestimonialCarousel() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Jean Dupont",
      role: "Développeur Web",
      initials: "JD",
      content:
        "Grâce à école {241} communities, j'ai pu acquérir les compétences nécessaires pour décrocher mon premier emploi en tant que développeur web.",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      id: 2,
      name: "Marie Lefèvre",
      role: "Référente Digitale",
      initials: "ML",
      content:
        "La formation de Référent Digital m'a permis de me reconvertir professionnellement et d'accompagner des entreprises dans leur transformation numérique.",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary",
    },
    {
      id: 3,
      name: "Paul Kouassi",
      role: "Digital Creator",
      initials: "PK",
      content:
        "J'ai pu développer ma présence en ligne et créer du contenu de qualité grâce aux compétences acquises lors de ma formation de Digital Creator.",
      bgColor: "bg-primary/10",
      textColor: "text-primary",
    },
    {
      id: 4,
      name: "Sophie Mbengue",
      role: "Développeuse Mobile",
      initials: "SM",
      content:
        "La qualité de l'enseignement et l'accompagnement personnalisé m'ont permis de progresser rapidement et de me spécialiser dans le développement mobile.",
      bgColor: "bg-purple-100",
      textColor: "text-purple-600",
    },
    {
      id: 5,
      name: "Thomas Nzinga",
      role: "Entrepreneur Digital",
      initials: "TN",
      content:
        "Les compétences acquises à école {241} m'ont donné la confiance nécessaire pour lancer ma propre entreprise dans le secteur du numérique.",
      bgColor: "bg-secondary/10",
      textColor: "text-secondary",
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (autoplay) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
      }, 5000) // Change testimonial every 5 seconds
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [autoplay, testimonials.length])

  const handlePrev = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setAutoplay(false)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const handleDotClick = (index: number) => {
    setAutoplay(false)
    setCurrentIndex(index)
  }

  return (
    <div className="relative mx-auto max-w-4xl px-4">
      <div className="overflow-hidden rounded-xl bg-white p-6 shadow-sm">
        <div className="relative">
          {/* Testimonial content */}
          <div className="transition-opacity duration-500">
            <div className="mb-4 flex items-center gap-4">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full ${testimonials[currentIndex].bgColor}`}
              >
                <span className={`font-bold ${testimonials[currentIndex].textColor}`}>
                  {testimonials[currentIndex].initials}
                </span>
              </div>
              <div>
                <h4 className="font-bold">{testimonials[currentIndex].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>
            </div>
            <p className="text-muted-foreground">"{testimonials[currentIndex].content}"</p>
          </div>

          {/* Navigation buttons */}
          <div className="mt-6 flex items-center justify-between">
            <Button variant="outline" size="icon" onClick={handlePrev} className="rounded-full">
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Précédent</span>
            </Button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleDotClick(index)}
                  className={`h-2 w-2 rounded-full transition-all ${
                    index === currentIndex ? "bg-primary w-4" : "bg-muted"
                  }`}
                  aria-label={`Témoignage ${index + 1}`}
                />
              ))}
            </div>

            <Button variant="outline" size="icon" onClick={handleNext} className="rounded-full">
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Suivant</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

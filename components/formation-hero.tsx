"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, Users, Clock, Award, CheckCircle } from "lucide-react"
import Link from "next/link"

interface FormationHeroProps {
  title: string
  description: string
  image: string
  rating: number
  students: number
  duration: string
  level: string
  price: number
  discountPrice?: number
  category: string
  categoryColor: string
}

export function FormationHero({
  title,
  description,
  image,
  rating,
  students,
  duration,
  level,
  price,
  discountPrice,
  category,
  categoryColor,
}: FormationHeroProps) {
  const stars = Array(5).fill(0)

  return (
    <div className="relative w-full py-12 md:py-16 lg:py-20 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-gray-100" />

      <div className="container relative z-10 px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-start">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-1 md:col-span-1 lg:col-span-2"
          >
            <Badge className="mb-4" style={{ backgroundColor: categoryColor, color: "white" }}>
              {category}
            </Badge>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-black">{title}</h1>
            <p className="text-lg text-black/80 mb-6">{description}</p>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <div className="flex items-center">
                <div className="flex mr-2">
                  {stars.map((_, index) => (
                    <Star
                      key={index}
                      className={`h-5 w-5 ${index < rating ? "text-yellow-500 fill-yellow-500" : "text-black/50"}`}
                    />
                  ))}
                </div>
                <span className="font-medium text-black">{rating.toFixed(1)}</span>
              </div>

              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-black/70" />
                <span className="text-black">{students.toLocaleString()} apprenants</span>
              </div>

              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-black/70" />
                <span className="text-black">{duration}</span>
              </div>

              <div className="flex items-center">
                <Award className="h-5 w-5 mr-2 text-black/70" />
                <span className="text-black">{level}</span>
              </div>
            </div>

            <div className="flex items-center mb-6">
              <div className="h-10 w-10 rounded-full bg-white/20 mr-3 flex items-center justify-center">
                <img src="/placeholder.svg?height=40&width=40" alt="Formateur" className="h-8 w-8 rounded-full" />
              </div>
              <span className="text-black">
                Créé par <strong>École {241} Communities</strong>
              </span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-1 bg-card rounded-xl border shadow-lg p-6"
          >
            <div className="aspect-video rounded-lg overflow-hidden mb-6">
              <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
            </div>

            <div className="mb-6">
              <div className="flex items-baseline mb-2">
                {discountPrice ? (
                  <>
                    <span className="text-3xl font-bold">{discountPrice.toLocaleString()} FCFA</span>
                    <span className="ml-2 text-lg line-through text-muted-foreground">
                      {price.toLocaleString()} FCFA
                    </span>
                    <Badge variant="outline" className="ml-2 bg-green-100 text-green-800 border-green-200">
                      {Math.round((1 - discountPrice / price) * 100)}% de réduction
                    </Badge>
                  </>
                ) : (
                  <span className="text-3xl font-bold">{price.toLocaleString()} FCFA</span>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <Link href="/login/apprenant">
                <Button className="w-full bg-blue-500 hover:bg-blue-300 text-lg py-6">Participer maintenant</Button>
              </Link>
            </div>

            <div className="mt-6 space-y-3 text-sm">
              <p className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
                <span>Accès à vie à la formation</span>
              </p>
              <p className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
                <span>Accès sur mobile</span>
              </p>
              <p className="flex items-center">
                <CheckCircle className="h-4 w-4 mr-2 text-red-500" />
                <span>Certificat de réussite</span>
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground">Partagez cette formation avec vos amis</p>
              <div className="flex justify-center gap-4 mt-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

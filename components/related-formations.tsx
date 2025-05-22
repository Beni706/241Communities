"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, Users } from "lucide-react"
import Link from "next/link"

interface RelatedFormation {
  id: string
  title: string
  image: string
  category: string
  rating: number
  students: number
  price: number
  discountPrice?: number
  slug: string
}

interface RelatedFormationsProps {
  formations: RelatedFormation[]
}

export function RelatedFormations({ formations }: RelatedFormationsProps) {
  return (
    <section className="w-full py-12 bg-muted/50">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Autres formations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {formations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full overflow-hidden hover:shadow-md transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={formation.image || "/placeholder.svg"}
                    alt={formation.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                  <div className="absolute top-2 left-2">
                    <span className="px-2 py-1 text-xs font-medium rounded-md bg-primary-red/90 text-white">
                      {formation.category}
                    </span>
                  </div>
                </div>
                <CardHeader className="p-4">
                  <h3 className="font-semibold line-clamp-2 h-12">{formation.title}</h3>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <div className="flex items-center justify-between text-sm mb-4">
                    <div className="flex items-center">
                      <div className="flex mr-1">
                        {Array(5)
                          .fill(0)
                          .map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < formation.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`}
                            />
                          ))}
                      </div>
                      <span className="text-xs">({formation.rating.toFixed(1)})</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="h-3 w-3 mr-1" />
                      <span className="text-xs">{formation.students.toLocaleString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    {formation.discountPrice ? (
                      <>
                        <span className="font-bold">{formation.discountPrice.toLocaleString()} FCFA</span>
                        <span className="ml-2 text-sm line-through text-muted-foreground">
                          {formation.price.toLocaleString()} FCFA
                        </span>
                      </>
                    ) : (
                      <span className="font-bold">{formation.price.toLocaleString()} FCFA</span>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button asChild className="w-full">
                    <Link href={`/formations/${formation.slug}`}>Voir la formation</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

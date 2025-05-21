"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Testimonial {
  name: string
  role: string
  content: string
  avatarSrc: string
}

interface AceternityTestimonialsProps {
  testimonials: Testimonial[]
  className?: string
  autoplayInterval?: number
}

export function AceternityTestimonials({
  testimonials,
  className,
  autoplayInterval = 5000,
}: AceternityTestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoplay, setIsAutoplay] = useState(true)
  const autoplayRef = useRef<NodeJS.Timeout | null>(null)

  const startAutoplay = () => {
    if (autoplayRef.current) clearInterval(autoplayRef.current)

    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, autoplayInterval)
  }

  const stopAutoplay = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  useEffect(() => {
    if (isAutoplay) startAutoplay()

    return () => stopAutoplay()
  }, [isAutoplay, currentIndex, testimonials.length])

  const handlePrev = () => {
    setIsAutoplay(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const handleNext = () => {
    setIsAutoplay(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const handleMouseEnter = () => {
    stopAutoplay()
  }

  const handleMouseLeave = () => {
    if (isAutoplay) startAutoplay()
  }

  return (
    <div
      className={cn("relative overflow-hidden rounded-2xl bg-background p-4 md:p-8", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute -top-24 left-1/2 h-40 w-[30rem] -translate-x-1/2 rounded-full bg-primary-red/20 blur-3xl" />
      <div className="absolute -bottom-24 left-1/2 h-40 w-[30rem] -translate-x-1/2 rounded-full bg-tertiary/20 blur-3xl" />

      <div className="relative flex flex-col md:flex-row items-center gap-8 md:gap-12">
        {/* Image Section */}
        <div className="relative w-full md:w-1/3 flex justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -50, rotateY: -15 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              exit={{ opacity: 0, x: 50, rotateY: 15 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="relative"
            >
              <div className="relative h-64 w-64 md:h-80 md:w-80 overflow-hidden rounded-2xl shadow-xl">
                <Image
                  src={testimonials[currentIndex].avatarSrc || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>

              {/* Stacked card effect */}
              <div className="absolute -bottom-3 -right-3 h-64 w-64 md:h-80 md:w-80 rounded-2xl bg-muted -z-10 transform rotate-3" />
              <div className="absolute -bottom-6 -right-6 h-64 w-64 md:h-80 md:w-80 rounded-2xl bg-muted/70 -z-20 transform rotate-6" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start text-center md:text-left">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4"
            >
              <div className="flex flex-col gap-1">
                <h3 className="text-2xl font-bold">{testimonials[currentIndex].name}</h3>
                <p className="text-muted-foreground">{testimonials[currentIndex].role}</p>
              </div>

              <blockquote className="text-lg md:text-xl italic relative">
                <span className="text-4xl text-primary-red absolute -top-4 -left-2">"</span>
                <p className="pl-6">{testimonials[currentIndex].content}</p>
                <span className="text-4xl text-primary-red absolute -bottom-10 right-0">"</span>
              </blockquote>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center gap-4 mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoplay(false)
                    setCurrentIndex(index)
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    index === currentIndex ? "w-8 bg-primary-red" : "w-2 bg-muted hover:bg-primary-red/50",
                  )}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2 ml-auto">
              <Button
                variant="outline"
                size="icon"
                onClick={handlePrev}
                className="rounded-full h-10 w-10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={handleNext}
                className="rounded-full h-10 w-10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

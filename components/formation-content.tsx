"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { PlayCircle, FileText, Clock, CheckCircle, Star } from "lucide-react"

interface Module {
  id: string
  title: string
  duration: string
  lessons: Lesson[]
}

interface Lesson {
  id: string
  title: string
  duration: string
  type: string
}

interface Instructor {
  id: string
  name: string
  role: string
  bio: string
  avatar: string
  rating: number
  students: number
  courses: number
}


interface FormationContentProps {
  modules: Module[]
  instructors: Instructor[]
  whatYouWillLearn: string[]
  requirements: string[]
  targetAudience: string[]
}

export function FormationContent({
  modules,
  instructors,
  whatYouWillLearn,
  requirements,
  targetAudience,
}: FormationContentProps) {
  const [activeTab, setActiveTab] = useState("contenu")

  return (
    <div className="container px-4 md:px-6 py-12">
      <Tabs defaultValue="contenu" className="w-full" onValueChange={setActiveTab}>
        <TabsList className="w-full max-w-3xl mx-auto grid grid-cols-2 mb-8">
          <TabsTrigger value="contenu">Contenu</TabsTrigger>
          <TabsTrigger value="formateurs">Formateurs</TabsTrigger>
          
        </TabsList>

        <TabsContent value="contenu">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">Ce que vous allez apprendre</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-8"
              >
                <h2 className="text-2xl font-bold mb-4">Contenu de la formation</h2>
                <div className="text-sm text-muted-foreground mb-4">
                  <span>{modules.length} modules</span>
                  <span className="mx-2">•</span>
                  <span>{modules.reduce((acc, module) => acc + module.lessons.length, 0)} leçons</span>
                  <span className="mx-2">•</span>
                  <span>
                    Durée totale:{" "}
                    {modules.reduce((acc, module) => {
                      const [hours, minutes] = module.duration.split("h")
                      return acc + Number.parseInt(hours) * 60 + Number.parseInt(minutes || "0")
                    }, 0) / 60}{" "}
                    heures
                  </span>
                </div>

                <Accordion type="single" collapsible className="w-full">
                  {modules.map((module, index) => (
                    <AccordionItem key={module.id} value={module.id}>
                      <AccordionTrigger className="hover:bg-muted/50 px-4 py-3 rounded-lg">
                        <div className="flex flex-col items-start text-left">
                          <div className="font-medium">
                            Module {index + 1}: {module.title}
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            {module.lessons.length} leçons • {module.duration}
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4">
                        <ul className="space-y-2 my-2">
                          {module.lessons.map((lesson) => (
                            <li
                              key={lesson.id}
                              className="flex items-center justify-between py-2 px-3 rounded-lg hover:bg-muted/50"
                            >
                              <div className="flex items-center">
                                {lesson.type === "video" ? (
                                  <PlayCircle className="h-5 w-5 mr-3 text-primary-red" />
                                ) : (
                                  <FileText className="h-5 w-5 mr-3 text-primary-red" />
                                )}
                                <span>{lesson.title}</span>
                              
                              </div>
                              <div className="flex items-center text-sm text-muted-foreground">
                                <Clock className="h-4 w-4 mr-1" />
                                <span>{lesson.duration}</span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            </div>

            <div className="md:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="sticky top-24"
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4">Prérequis</h3>
                    <ul className="space-y-2 mb-6">
                      {requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-red-500 shrink-0 mt-1" />
                          <span className="text-sm">{req}</span>
                        </li>
                      ))}
                    </ul>

                    <h3 className="text-lg font-bold mb-4">Public cible</h3>
                    <ul className="space-y-2">
                      {targetAudience.map((audience, index) => (
                        <li key={index} className="flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-red-500 shrink-0 mt-1" />
                          <span className="text-sm">{audience}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="formateurs">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">Vos formateurs</h2>
            <div className="space-y-8">
              {instructors.map((instructor) => (
                <motion.div
                  key={instructor.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="flex flex-col md:flex-row gap-6 p-6 rounded-xl border"
                >
                  <div className="flex flex-col items-center md:items-start gap-4">
                    <Avatar className="h-24 w-24">
                      <AvatarImage src={instructor.avatar || "/placeholder.svg"} alt={instructor.name} />
                      <AvatarFallback>{instructor.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold">{instructor.name}</h3>
                      <p className="text-muted-foreground">{instructor.role}</p>
                    </div>
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-500 fill-yellow-500 mr-1" />
                        <span>{instructor.rating.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="mr-1"
                        >
                          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>{instructor.students.toLocaleString()} apprenants</span>
                      </div>
                      <div className="flex items-center">
                        <FileText className="h-4 w-4 mr-1" />
                        <span>{instructor.courses} cours</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm leading-relaxed">{instructor.bio}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

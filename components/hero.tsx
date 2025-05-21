import React from 'react'
import {  ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
    return (


        <section className="bg-slate-50 relative overflow-hidden py-20 md:py-32">
            {/* Decorative shapes */}
            <div className="absolute left-0 top-0 -translate-x-1/2 -translate-y-1/2 transform">
                <div className="shape-blob h-64 w-64 bg-purple-600"></div>
            </div>
            <div className="absolute bottom-0 right-0 translate-x-1/3 translate-y-1/3 transform">
                <div className="shape-blob-2 h-80 w-80 bg-purple-600"></div>
            </div>
            <div className="absolute right-1/4 top-1/4">
                <div className="shape-blob-3 h-40 w-40 bg-purple-600"></div>
            </div>

            <div className="container relative z-10">
                <div className="mx-auto max-w-3xl text-center">
                    <h1 className="text-black mb-6 text-4xl font-bold leading-tight tracking-tight md:text-6xl">
                        La plateforme d'apprentissage pour les métiers du numérique
                    </h1>
                    <p className="text-black mb-8 text-xl text-muted-foreground">
                        Développez vos compétences avec école {241} communities et rejoignez une communauté d'apprenants
                        passionnés
                    </p>
                    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                        <Link href="/login/apprenant">
                            <Button size="lg" className="bg-red-500 hover:bg-red-200 gap-2">
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
    )
}

export default Hero
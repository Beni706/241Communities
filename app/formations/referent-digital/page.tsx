"use client"

import { FormationHero } from "@/components/formation-hero"
import { FormationContent } from "@/components/formation-content"
import { RelatedFormations } from "@/components/related-formations"
import { AceternityTestimonials } from "@/components/aceternity-testimonials"

export default function ReferentDigitalPage() {
  // Données de la formation
  const formationData = {
    title: "Formation Référent Digital",
    description:
      "Devenez expert en stratégie digitale, marketing numérique, SEO et réseaux sociaux. Une formation complète pour piloter la présence en ligne d'une entreprise.",
    image: "/ref.jpeg",
    rating: 4.7,
    students: 980,
    duration: "100 heures",
    level: "Débutant à Avancé",
    price: 320000,
    discountPrice: 240000,
    category: "Marketing Digital",
    categoryColor: "#ef4444", // red-500
  }

  // Modules et leçons
  const modules = [
    {
      id: "module-1",
      title: "Introduction au marketing digital",
      duration: "10h00",
      lessons: [
        {
          id: "lesson-1-1",
          title: "Présentation de la formation et des outils",
          duration: "45min",
          type: "video",
        },
        {
          id: "lesson-1-2",
          title: "Écosystème digital et tendances actuelles",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-1-3",
          title: "Rôle et missions du référent digital",
          duration: "1h15",
          type: "video",
        },
        {
          id: "lesson-1-4",
          title: "Élaborer une stratégie digitale efficace",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-1-5",
          title: "Analyse de la concurrence et benchmarking",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-1-6",
          title: "Exercice pratique: Audit digital d'une entreprise",
          duration: "3h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-2",
      title: "SEO - Référencement naturel",
      duration: "15h00",
      lessons: [
        {
          id: "lesson-2-1",
          title: "Principes fondamentaux du SEO",
          duration: "1h30",
          type: "video",
          isPreview: true,
        },
        {
          id: "lesson-2-2",
          title: "Recherche de mots-clés et intentions de recherche",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-2-3",
          title: "SEO on-page: optimisation technique",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-2-4",
          title: "SEO off-page: stratégie de backlinks",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-2-5",
          title: "SEO local et Google My Business",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-2-6",
          title: "Outils d'analyse SEO",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-2-7",
          title: "Projet: Audit et optimisation SEO d'un site",
          duration: "3h30",
          type: "video",
        },
      ],
    },
    {
      id: "module-3",
      title: "SEA - Publicité en ligne",
      duration: "12h00",
      lessons: [
        {
          id: "lesson-3-1",
          title: "Introduction au SEA et Google Ads",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-3-2",
          title: "Structure des campagnes et groupes d'annonces",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-3-3",
          title: "Recherche de mots-clés pour le SEA",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-3-4",
          title: "Rédaction d'annonces efficaces",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-3-5",
          title: "Stratégies d'enchères et budgétisation",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-3-6",
          title: "Mesure et optimisation des performances",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-3-7",
          title: "Projet: Création et gestion d'une campagne Google Ads",
          duration: "2h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-4",
      title: "Social Media Marketing",
      duration: "18h00",
      lessons: [
        {
          id: "lesson-4-1",
          title: "Panorama des réseaux sociaux",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-4-2",
          title: "Stratégie de contenu pour les réseaux sociaux",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-4-3",
          title: "Facebook et Instagram: stratégies avancées",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-4-4",
          title: "LinkedIn: marketing B2B et personal branding",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-4-5",
          title: "Twitter et X: communication et veille",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-4-6",
          title: "TikTok et YouTube: stratégies vidéo",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-4-7",
          title: "Publicité sur les réseaux sociaux",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-4-8",
          title: "Outils de gestion et d'automatisation",
          duration: "1h00",
          type: "video",
        },
        {
          id: "lesson-4-9",
          title: "Projet: Élaboration d'une stratégie social media complète",
          duration: "2h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-5",
      title: "Email Marketing et Automation",
      duration: "12h00",
      lessons: [
        {
          id: "lesson-5-1",
          title: "Fondamentaux de l'email marketing",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-5-2",
          title: "Création et segmentation de listes",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-5-3",
          title: "Conception de newsletters efficaces",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-5-4",
          title: "Séquences d'emails automatisés",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-5-5",
          title: "Tests A/B et optimisation",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-5-6",
          title: "Analyse des performances et KPIs",
          duration: "1h00",
          type: "video",
        },
        {
          id: "lesson-5-7",
          title: "Projet: Création d'une campagne d'email marketing",
          duration: "1h30",
          type: "video",
        },
      ],
    },
    {
      id: "module-6",
      title: "Analyse de données et reporting",
      duration: "15h00",
      lessons: [
        {
          id: "lesson-6-1",
          title: "Introduction à Google Analytics",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-6-2",
          title: "Configuration et implémentation",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-6-3",
          title: "Analyse du trafic et du comportement utilisateur",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-6-4",
          title: "Suivi des conversions et des objectifs",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-6-5",
          title: "Tableaux de bord et rapports personnalisés",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-6-6",
          title: "Outils complémentaires d'analyse",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-6-7",
          title: "Projet: Mise en place d'un système de reporting complet",
          duration: "3h30",
          type: "video",
        },
      ],
    },
    {
      id: "module-7",
      title: "Stratégie de contenu et Inbound Marketing",
      duration: "18h00",
      lessons: [
        {
          id: "lesson-7-1",
          title: "Principes de l'Inbound Marketing",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-7-2",
          title: "Création de personas et parcours client",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-7-3",
          title: "Content Marketing: types et formats de contenu",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-7-4",
          title: "Blogging et SEO éditorial",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-7-5",
          title: "Création de lead magnets et contenus premium",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-7-6",
          title: "Stratégie de conversion et nurturing",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-7-7",
          title: "Calendrier éditorial et workflow",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-7-8",
          title: "Projet: Élaboration d'une stratégie de contenu complète",
          duration: "4h00",
          type: "video",
        },
      ],
    },
  ]

  // Formateurs
  const instructors = [
    {
      id: "instructor-1",
      name: "Sophie Leclerc",
      role: "Consultante en Marketing Digital",
      bio: "Sophie est consultante en marketing digital avec plus de 12 ans d'expérience. Elle a travaillé pour des agences internationales et accompagné de nombreuses entreprises dans leur transformation digitale. Passionnée par les nouvelles technologies et les stratégies innovantes, elle partage son expertise à travers des formations et des conférences.",
      avatar: "/placeholder.svg?height=100&width=100&text=SL",
      rating: 4.9,
      students: 2800,
      courses: 4,
    },
    {
      id: "instructor-2",
      name: "Marc Dubois",
      role: "Expert SEO & Analytics",
      bio: "Marc est spécialiste en référencement naturel et analyse de données. Après avoir dirigé le pôle SEO d'une grande agence pendant 8 ans, il accompagne aujourd'hui des entreprises de toutes tailles pour améliorer leur visibilité en ligne. Certifié Google, il est reconnu pour sa capacité à vulgariser des concepts techniques complexes.",
      avatar: "/placeholder.svg?height=100&width=100&text=MD",
      rating: 4.7,
      students: 2100,
      courses: 3,
    },
  ]


  // Ce que vous allez apprendre
  const whatYouWillLearn = [
    "Élaborer une stratégie digitale complète et cohérente",
    "Optimiser le référencement naturel (SEO) d'un site web",
    "Créer et gérer des campagnes publicitaires en ligne (SEA)",
    "Développer une présence efficace sur les réseaux sociaux",
    "Concevoir des campagnes d'email marketing performantes",
    "Analyser les données et créer des rapports pertinents",
    "Mettre en place une stratégie de contenu et d'inbound marketing",
    "Mesurer le ROI des actions marketing digital",
  ]

  // Prérequis
  const requirements = [
    "Connaissances de base en informatique et navigation web",
    "Intérêt pour le marketing et la communication",
    "Ordinateur avec connexion internet",
    "Aucune expérience préalable en marketing digital n'est requise",
  ]

  // Public cible
  const targetAudience = [
    "Professionnels en reconversion vers les métiers du digital",
    "Responsables marketing souhaitant développer leurs compétences digitales",
    "Entrepreneurs et indépendants voulant gérer leur présence en ligne",
    "Chargés de communication cherchant à élargir leur expertise",
    "Étudiants en marketing ou communication",
  ]

  // Formations similaires
  const relatedFormations = [
    {
      id: "formation-1",
      title: "Formation Développement Web",
      image: "/dev-web.jpeg",
      category: "Développement Web",
      rating: 4.8,
      students: 1250,
      price: 350000,
      discountPrice: 250000,
      slug: "developpement-web",
    },
    {
      id: "formation-2",
      title: "Formation Digital Creator",
      image: "/digi-crea.jpeg",
      category: "Création de Contenu",
      rating: 4.9,
      students: 850,
      price: 280000,
      discountPrice: 210000,
      slug: "digital-creator",
    },
  ]

  // Témoignages spécifiques à cette formation
  const testimonials = [
    {
      name: "Émilie Rousseau",
      role: "Responsable Marketing Digital",
      content:
        "Cette formation a été un véritable tremplin pour ma carrière. J'ai pu acquérir toutes les compétences nécessaires pour gérer la stratégie digitale d'une entreprise. Les modules sont complets et les formateurs très pédagogues.",
      avatarSrc: "/placeholder.svg?height=400&width=400&text=Émilie",
    },
    {
      name: "Karim Benali",
      role: "Entrepreneur",
      content:
        "En tant qu'entrepreneur, cette formation m'a permis de prendre en main ma communication digitale sans dépendre d'une agence. J'ai particulièrement apprécié les modules sur le SEO et les réseaux sociaux qui m'ont donné des résultats concrets.",
      avatarSrc: "/placeholder.svg?height=400&width=400&text=Karim",
    },
    {
      name: "Julie Martin",
      role: "Chargée de Communication",
      content:
        "J'ai suivi cette formation pour compléter mes compétences en communication traditionnelle. Le contenu est riche et accessible, même pour quelqu'un qui débute dans le digital. Je recommande vivement !",
      avatarSrc: "/placeholder.svg?height=400&width=400&text=Julie",
    },
  ]

  return (
    <>
      <FormationHero {...formationData} />

      <FormationContent
        modules={modules}
        instructors={instructors}
        whatYouWillLearn={whatYouWillLearn}
        requirements={requirements}
        targetAudience={targetAudience}
      />

      <section className="w-full py-12 bg-background">
        <div className="container px-4 md:px-6">
          <h2 className="text-2xl font-bold text-center mb-8">Témoignages de nos apprenants</h2>
          <div className="max-w-5xl mx-auto">
            <AceternityTestimonials testimonials={testimonials} />
          </div>
        </div>
      </section>

      <RelatedFormations formations={relatedFormations} />
    </>
  )
}

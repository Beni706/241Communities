"use client"

import { FormationContent } from "@/components/formation-content"
import { RelatedFormations } from "@/components/related-formations"
import { FormationHero } from "@/components/formation-hero"
import { AceternityTestimonials } from "@/components/aceternity-testimonials"

export default function DigitalCreatorPage() {
  // Données de la formation
  const formationData = {
    title: "Formation Digital Creator",
    description:
      "Devenez créateur de contenu digital et développez votre présence en ligne. Maîtrisez la photo, la vidéo, le design et les stratégies de contenu pour les réseaux sociaux.",
    image: "/digi-crea.jpeg",
    rating: 4.9,
    students: 850,
    duration: "90 heures",
    level: "Tous niveaux",
    price: 280000,
    discountPrice: 210000,
    category: "Création de Contenu",
    categoryColor: "#8b5cf6", // violet-500
  }

  // Modules et leçons
  const modules = [
    {
      id: "module-1",
      title: "Introduction à la création de contenu digital",
      duration: "8h00",
      lessons: [
        {
          id: "lesson-1-1",
          title: "Présentation de la formation et des outils",
          duration: "45min",
          type: "video",
          isPreview: true,
        },
        {
          id: "lesson-1-2",
          title: "Panorama des plateformes et formats de contenu",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-1-3",
          title: "Définir votre niche et votre audience",
          duration: "1h15",
          type: "video",
        },
        {
          id: "lesson-1-4",
          title: "Développer votre identité de marque personnelle",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-1-5",
          title: "Équipement de base pour débuter",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-1-6",
          title: "Exercice pratique: Définir votre stratégie de contenu",
          duration: "1h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-2",
      title: "Photographie pour les réseaux sociaux",
      duration: "15h00",
      lessons: [
        {
          id: "lesson-2-1",
          title: "Principes fondamentaux de la photographie",
          duration: "2h00",
          type: "video",
          isPreview: true,
        },
        {
          id: "lesson-2-2",
          title: "Composition et cadrage",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-2-3",
          title: "Éclairage naturel et artificiel",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-2-4",
          title: "Photographie avec smartphone: techniques avancées",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-2-5",
          title: "Retouche photo avec Lightroom et Snapseed",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-2-6",
          title: "Créer des visuels cohérents pour Instagram",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-2-7",
          title: "Projet: Shooting et édition d'une série de photos",
          duration: "1h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-3",
      title: "Création et montage vidéo",
      duration: "20h00",
      lessons: [
        {
          id: "lesson-3-1",
          title: "Bases de la vidéo: formats, résolutions et framerates",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-3-2",
          title: "Techniques de tournage avec smartphone et caméra",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-3-3",
          title: "Scénarisation et storyboarding",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-3-4",
          title: "Éclairage et son pour la vidéo",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-3-5",
          title: "Montage vidéo avec Premiere Pro/Rush",
          duration: "4h00",
          type: "video",
        },
        {
          id: "lesson-3-6",
          title: "Création d'animations et transitions",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-3-7",
          title: "Optimisation pour différentes plateformes",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-3-8",
          title: "Projet: Création d'une vidéo complète",
          duration: "3h30",
          type: "video",
        },
      ],
    },
    {
      id: "module-4",
      title: "Design graphique pour les réseaux sociaux",
      duration: "12h00",
      lessons: [
        {
          id: "lesson-4-1",
          title: "Principes de design et théorie des couleurs",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-4-2",
          title: "Typographie et hiérarchie visuelle",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-4-3",
          title: "Création de visuels avec Canva",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-4-4",
          title: "Introduction à Adobe Photoshop",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-4-5",
          title: "Création de templates réutilisables",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-4-6",
          title: "Infographies et data visualisation",
          duration: "1h00",
          type: "video",
        },
        {
          id: "lesson-4-7",
          title: "Projet: Création d'une identité visuelle cohérente",
          duration: "1h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-5",
      title: "Stratégies de contenu pour les réseaux sociaux",
      duration: "15h00",
      lessons: [
        {
          id: "lesson-5-1",
          title: "Instagram: stratégies de croissance",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-5-2",
          title: "TikTok: créer du contenu viral",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-5-3",
          title: "YouTube: optimisation et monétisation",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-5-4",
          title: "LinkedIn: contenu professionnel et personal branding",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-5-5",
          title: "Planification et calendrier éditorial",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-5-6",
          title: "Analyse des performances et ajustements",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-5-7",
          title: "Projet: Élaboration d'une stratégie cross-plateforme",
          duration: "2h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-6",
      title: "Monétisation et collaborations",
      duration: "10h00",
      lessons: [
        {
          id: "lesson-6-1",
          title: "Différentes sources de revenus pour les créateurs",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-6-2",
          title: "Programmes de partenariat et affiliation",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-6-3",
          title: "Travailler avec les marques: du pitch au contrat",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-6-4",
          title: "Création de produits digitaux",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-6-5",
          title: "Aspects juridiques et fiscaux",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-6-6",
          title: "Projet: Élaboration d'un kit média et d'une offre commerciale",
          duration: "1h30",
          type: "video",
        },
      ],
    },
    {
      id: "module-7",
      title: "Community management et engagement",
      duration: "10h00",
      lessons: [
        {
          id: "lesson-7-1",
          title: "Construire et animer une communauté",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-7-2",
          title: "Techniques d'engagement et de fidélisation",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-7-3",
          title: "Gestion des commentaires et messages",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-7-4",
          title: "Gestion de crise et haters",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-7-5",
          title: "Outils d'automatisation et de programmation",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-7-6",
          title: "Projet final: Lancement d'une campagne de contenu",
          duration: "1h30",
          type: "video",
        },
      ],
    },
  ]

  // Formateurs
  const instructors = [
    {
      id: "instructor-1",
      name: "Lucie Moreau",
      role: "Créatrice de contenu & Influenceuse",
      bio: "Lucie est créatrice de contenu lifestyle avec plus de 500 000 abonnés sur Instagram et YouTube. Après des études en communication, elle s'est lancée dans la création de contenu à plein temps et collabore aujourd'hui avec de grandes marques internationales. Passionnée par le partage de connaissances, elle forme la nouvelle génération de créateurs.",
      avatar: "/placeholder.svg?height=100&width=100&text=LM",
      rating: 4.9,
      students: 1800,
      courses: 2,
    },
    {
      id: "instructor-2",
      name: "Thomas Dubois",
      role: "Vidéaste & Expert en Montage",
      bio: "Thomas est réalisateur et monteur vidéo professionnel. Il a travaillé pour des chaînes de télévision et des plateformes de streaming avant de se spécialiser dans la formation. Son expertise technique et sa créativité lui permettent de transmettre des compétences concrètes et applicables immédiatement par ses étudiants.",
      avatar: "/placeholder.svg?height=100&width=100&text=TD",
      rating: 4.8,
      students: 1500,
      courses: 3,
    },
  ]

  // Avis
  const reviews = [
    {
      id: "review-1",
      author: "Sarah Ndiaye",
      avatar: "/placeholder.svg?height=50&width=50&text=SN",
      rating: 5,
      date: "20 mars 2025",
      comment:
        "Formation exceptionnelle ! J'ai pu lancer mon compte Instagram et atteindre 10K abonnés en 6 mois grâce aux techniques enseignées. Les modules sur la photographie et la stratégie de contenu sont particulièrement bien faits. Je recommande vivement !",
    },
    {
      id: "review-2",
      author: "Antoine Lefebvre",
      avatar: "/placeholder.svg?height=50&width=50&text=AL",
      rating: 5,
      date: "15 février 2025",
      comment:
        "Cette formation a transformé ma façon de créer du contenu. Les conseils techniques sont précis et les exercices pratiques très formateurs. J'ai particulièrement apprécié les modules sur le montage vidéo et la monétisation. Un excellent investissement !",
    },
    {
      id: "review-3",
      author: "Camille Durand",
      avatar: "/placeholder.svg?height=50&width=50&text=CD",
      rating: 4,
      date: "5 janvier 2025",
      comment:
        "Formation très complète qui couvre tous les aspects de la création de contenu. Les formateurs sont passionnés et partagent leur expérience sans filtre. J'aurais aimé plus de contenu sur Pinterest et LinkedIn, mais dans l'ensemble c'est excellent.",
    },
  ]

  // Ce que vous allez apprendre
  const whatYouWillLearn = [
    "Maîtriser la photographie et la retouche pour les réseaux sociaux",
    "Créer et monter des vidéos professionnelles",
    "Concevoir des designs graphiques attractifs",
    "Développer une stratégie de contenu efficace",
    "Optimiser votre présence sur Instagram, TikTok et YouTube",
    "Construire et animer une communauté engagée",
    "Monétiser votre contenu et collaborer avec des marques",
    "Analyser vos performances et ajuster votre stratégie",
  ]

  // Prérequis
  const requirements = [
    "Smartphone récent avec appareil photo de qualité",
    "Ordinateur avec connexion internet",
    "Passion pour la création de contenu",
    "Aucune expérience préalable en création n'est requise",
  ]

  // Public cible
  const targetAudience = [
    "Débutants souhaitant se lancer dans la création de contenu",
    "Créateurs amateurs voulant professionnaliser leur approche",
    "Entrepreneurs et indépendants cherchant à développer leur présence en ligne",
    "Responsables communication souhaitant maîtriser la création de contenu",
    "Passionnés de photographie, vidéo ou design",
  ]

  // Formations similaires
  const relatedFormations = [
    {
      id: "formation-1",
      title: "Formation Développement Web",
      image: "/placeholder.svg?height=200&width=300&text=Développement+Web",
      category: "Développement Web",
      rating: 4.8,
      students: 1250,
      price: 350000,
      discountPrice: 250000,
      slug: "developpement-web",
    },
    {
      id: "formation-2",
      title: "Formation Référent Digital",
      image: "/placeholder.svg?height=200&width=300&text=Référent+Digital",
      category: "Marketing Digital",
      rating: 4.7,
      students: 980,
      price: 320000,
      discountPrice: 240000,
      slug: "referent-digital",
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

      <RelatedFormations formations={relatedFormations} />
    </>
  )
}

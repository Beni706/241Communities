"use client"

import { FormationHero } from "@/components/formation-hero"
import { FormationContent } from "@/components/formation-content"
import { RelatedFormations } from "@/components/related-formations"
import { AceternityTestimonials } from "@/components/aceternity-testimonials"

export default function DeveloppementWebPage() {
  // Données de la formation
  const formationData = {
    title: "Formation Développement Web",
    description:
      "Devenez développeur web full-stack en maîtrisant HTML, CSS, JavaScript, React et Node.js. Une formation complète pour créer des sites et applications web modernes.",
    image: "/dev-web.jpeg",
    rating: 4.8,
    students: 1250,
    duration: "120 heures",
    level: "Débutant à Intermédiaire",
    price: 350000,
    discountPrice: 250000,
    category: "Développement Web",
    categoryColor: "#3b82f6",
  }

  // Modules et leçons
  const modules = [
    {
      id: "module-1",
      title: "Introduction au développement web",
      duration: "10h30",
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
          title: "Comment fonctionne le web",
          duration: "1h15",
          type: "video",
        },
        {
          id: "lesson-1-3",
          title: "Mise en place de l'environnement de développement",
          duration: "1h00",
          type: "video",
        },
        {
          id: "lesson-1-4",
          title: "Ressources et documentation",
          duration: "30min",
          type: "text",
        },
      ],
    },
    {
      id: "module-2",
      title: "HTML5 - Structure et sémantique",
      duration: "15h00",
      lessons: [
        {
          id: "lesson-2-1",
          title: "Introduction à HTML5",
          duration: "1h00",
          type: "video",
          isPreview: true,
        },
        {
          id: "lesson-2-2",
          title: "Structure de base d'une page web",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-2-3",
          title: "Balises sémantiques",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-2-4",
          title: "Formulaires et validation",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-2-5",
          title: "Exercice pratique: Créer une page de profil",
          duration: "3h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-3",
      title: "CSS3 - Mise en forme et responsive design",
      duration: "20h00",
      lessons: [
        {
          id: "lesson-3-1",
          title: "Introduction à CSS3",
          duration: "1h30",
          type: "video",
        },
        {
          id: "lesson-3-2",
          title: "Sélecteurs et propriétés",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-3-3",
          title: "Modèle de boîte et positionnement",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-3-4",
          title: "Flexbox et Grid",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-3-5",
          title: "Media queries et responsive design",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-3-6",
          title: "Animations et transitions",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-3-7",
          title: "Projet: Site web responsive",
          duration: "4h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-4",
      title: "JavaScript - Programmation côté client",
      duration: "25h00",
      lessons: [
        {
          id: "lesson-4-1",
          title: "Introduction à JavaScript",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-4-2",
          title: "Variables, types et opérateurs",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-4-3",
          title: "Structures de contrôle",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-4-4",
          title: "Fonctions et portée",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-4-5",
          title: "DOM et événements",
          duration: "3h30",
          type: "video",
        },
        {
          id: "lesson-4-6",
          title: "AJAX et Fetch API",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-4-7",
          title: "ES6+ et fonctionnalités modernes",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-4-8",
          title: "Projet: Application web interactive",
          duration: "5h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-5",
      title: "React - Bibliothèque front-end",
      duration: "30h00",
      lessons: [
        {
          id: "lesson-5-1",
          title: "Introduction à React",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-5-2",
          title: "Composants et props",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-5-3",
          title: "État et cycle de vie",
          duration: "3h30",
          type: "video",
        },
        {
          id: "lesson-5-4",
          title: "Gestion des événements",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-5-5",
          title: "Hooks et fonctions composants",
          duration: "4h00",
          type: "video",
        },
        {
          id: "lesson-5-6",
          title: "Routage avec React Router",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-5-7",
          title: "Gestion d'état avec Redux",
          duration: "4h00",
          type: "video",
        },
        {
          id: "lesson-5-8",
          title: "Projet final: Application React complète",
          duration: "8h00",
          type: "video",
        },
      ],
    },
    {
      id: "module-6",
      title: "Node.js et Express - Développement back-end",
      duration: "20h00",
      lessons: [
        {
          id: "lesson-6-1",
          title: "Introduction à Node.js",
          duration: "2h00",
          type: "video",
        },
        {
          id: "lesson-6-2",
          title: "Modules et npm",
          duration: "2h30",
          type: "video",
        },
        {
          id: "lesson-6-3",
          title: "Express.js - Framework web",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-6-4",
          title: "API RESTful",
          duration: "3h30",
          type: "video",
        },
        {
          id: "lesson-6-5",
          title: "Bases de données MongoDB",
          duration: "4h00",
          type: "video",
        },
        {
          id: "lesson-6-6",
          title: "Authentification et sécurité",
          duration: "3h00",
          type: "video",
        },
        {
          id: "lesson-6-7",
          title: "Projet: API back-end complète",
          duration: "5h00",
          type: "video",
        },
      ],
    },
  ]

  // Formateurs
  const instructors = [
    {
      id: "instructor-1",
      name: "Jean Martin",
      role: "Développeur Full-Stack Senior",
      bio: "Jean est développeur web full-stack avec plus de 10 ans d'expérience. Il a travaillé pour plusieurs startups et grandes entreprises, et a contribué à de nombreux projets open source. Sa passion pour l'enseignement l'a amené à créer des formations en ligne suivies par des milliers d'apprenants.",
      avatar: "/placeholder.svg?height=100&width=100&text=JM",
      rating: 4.9,
      students: 3500,
      courses: 5,
    },
    {
      id: "instructor-2",
      name: "Marie Dupont",
      role: "Experte Front-End & UX/UI",
      bio: "Marie est spécialiste en développement front-end et design UX/UI. Après avoir obtenu son diplôme en design numérique, elle a travaillé pendant 8 ans dans des agences web avant de se lancer en freelance. Elle partage maintenant son expertise à travers des formations et des conférences internationales.",
      avatar: "/placeholder.svg?height=100&width=100&text=MD",
      rating: 4.8,
      students: 2800,
      courses: 3,
    },
  ]

  // Ce que vous allez apprendre
  const whatYouWillLearn = [
    "Maîtriser HTML5, CSS3 et JavaScript pour créer des sites web interactifs",
    "Développer des applications web modernes avec React",
    "Créer des API RESTful avec Node.js et Express",
    "Concevoir des interfaces responsives adaptées à tous les appareils",
    "Utiliser Git pour la gestion de versions et la collaboration",
    "Intégrer des bases de données MongoDB à vos applications",
    "Déployer vos applications sur des serveurs en production",
    "Appliquer les bonnes pratiques de développement et de sécurité",
  ]

  // Prérequis
  const requirements = [
    "Connaissances de base en informatique",
    "Ordinateur avec connexion internet",
    "Aucune expérience préalable en programmation n'est requise",
    "Motivation et disponibilité pour suivre le cours et faire les exercices",
  ]

  // Public cible
  const targetAudience = [
    "Débutants souhaitant apprendre le développement web de zéro",
    "Professionnels en reconversion vers les métiers du numérique",
    "Designers souhaitant élargir leurs compétences techniques",
    "Entrepreneurs voulant créer leur propre site web ou application",
    "Étudiants en informatique cherchant à compléter leur formation",
  ]

  // Autres similaires
  const relatedFormations = [
    {
      id: "formation-1",
      title: "Formation Référent Digital",
      image: "/ref.jpeg",
      category: "Marketing Digital",
      rating: 4.7,
      students: 980,
      price: 320000,
      discountPrice: 240000,
      slug: "referent-digital",
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

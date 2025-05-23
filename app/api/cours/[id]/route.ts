import { NextResponse } from "next/server"
import { PrismaClient } from "@/generated/prisma"
// import { verifyJWT } from "lib/auth"; // Nous n'utiliserons plus verifyJWT de lib/auth ici pour le décodage
import jwt, { JwtPayload } from "jsonwebtoken" // Importer jsonwebtoken
import fs from "fs"
import path from "path"

// Modifier DecodedToken pour qu'il étende JwtPayload pour une meilleure compatibilité
interface DecodedToken extends JwtPayload {
  id: number
  role: string
  email: string
}

const prisma = new PrismaClient()

// Récupérer un cours par son ID
export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
  // Await params avant d'accéder à ses propriétés
  const resolvedParams = await params
  console.log("=== Récupération du cours par ID ===", resolvedParams.id)

  try {
    // Vérification de l'authentification
    const token = request.headers.get("Authorization")?.split(" ")[1]

    if (!token) {
      console.log("Aucun token fourni")
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 })
    }

    let decodedTokenPayload: DecodedToken | null = null
    const secretKey = process.env.JWT_SECRET // Assurez-vous que JWT_SECRET est bien le nom de votre variable d'env

    if (!secretKey) {
      console.error("JWT_SECRET n'est pas défini dans les variables d'environnement.")
      return NextResponse.json({ error: "Erreur de configuration serveur." }, { status: 500 })
    }

    try {
      // jwt.verify va lever une erreur si le token est invalide (expiré, signature incorrecte, etc.)
      decodedTokenPayload = jwt.verify(token, secretKey) as DecodedToken
    } catch (error) {
      // Le token est invalide, decodedTokenPayload restera null
    }

    if (!decodedTokenPayload) {
      console.log("Token invalide")
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 })
    }
    console.log("Authentification réussie, utilisateur:", decodedTokenPayload)

    // Accès explicite à resolvedParams.id
    const id = Number.parseInt(resolvedParams.id, 10)

    // Vérification de l'ID
    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "Cette ID n'est pas valide" }, { status: 400 })
    }

    const cours = await prisma.cours.findUnique({
      where: {
        id_cours: id,
      },
      include: {
        chapitre: true,
      },
    })

    if (!cours) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    console.log("Cours trouvé:", cours)
    return NextResponse.json(cours, { status: 200 })
  } catch (error) {
    console.error("Error fetching course:", error)
    return NextResponse.json({ error: "Failed to fetch course" }, { status: 500 })
  }
}

// Mettre à jour un cours par son ID
export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
  // Await params avant d'accéder à ses propriétés
  const resolvedParams = await params
  console.log("=== Mise à jour du cours par ID ===", resolvedParams.id)

  try {
    // Vérification de l'authentification
    const token = request.headers.get("Authorization")?.split(" ")[1]

    if (!token) {
      console.log("Aucun token fourni")
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 })
    }

    let decodedTokenPayload: DecodedToken | null = null
    const secretKey = process.env.JWT_SECRET

    if (!secretKey) {
      console.error("JWT_SECRET n'est pas défini dans les variables d'environnement.")
      return NextResponse.json({ error: "Erreur de configuration serveur." }, { status: 500 })
    }

    try {
      decodedTokenPayload = jwt.verify(token, secretKey) as DecodedToken
    } catch (error) {
      // Le token est invalide
    }

    if (!decodedTokenPayload) {
      console.log("Token invalide")
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 })
    }
    console.log("Authentification réussie, utilisateur:", decodedTokenPayload)

    const id = Number.parseInt(resolvedParams.id, 10)

    // Vérification de l'ID
    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "Cette ID n'est pas valide" }, { status: 400 })
    }

    // Déterminer le type de contenu
    const contentType = request.headers.get("Content-Type") || ""
    console.log("Content-Type:", contentType)

    let categorie = ""
    let titre = ""
    let description = ""
    let photoCours: string | undefined = undefined

    // Traiter les données selon le type de contenu
    if (contentType.includes("application/json")) {
      // Traitement des données JSON
      console.log("Traitement des données JSON...")
      try {
        const body = await request.json()
        categorie = body.categorie
        titre = body.titre
        description = body.description
        photoCours = body.photoCours
      } catch (error) {
        console.error("Erreur lors du parsing JSON:", error)
        return NextResponse.json({ error: "Invalid JSON format" }, { status: 400 })
      }
    } else if (contentType.includes("multipart/form-data")) {
      // Traitement des données FormData
      console.log("Traitement des données FormData...")
      try {
        const formData = await request.formData()
        console.log("FormData reçu:", Object.fromEntries(formData.entries()))

        categorie = formData.get("categorie") as string
        titre = formData.get("titre") as string
        description = formData.get("description") as string

        // Récupérer la photo si elle existe
        const photoFile = formData.get("photoCours") as File | null
        console.log("Photo reçue:", photoFile ? `${photoFile.name} (${photoFile.size} bytes)` : "Aucune")

        if (photoFile && photoFile.size > 0) {
          // Traitement du fichier image
          console.log("Traitement du fichier image...")

          // Générer un nom de fichier unique
          const fileName = `cours_${id}_${Date.now()}.${photoFile.name.split(".").pop()}`
          console.log("Nom de fichier généré:", fileName)

          // Chemin où l'image sera stockée
          const publicPath = `/uploads/cours/${fileName}`
          console.log("Chemin public:", publicPath)

          // Convertir le fichier en ArrayBuffer
          const bytes = await photoFile.arrayBuffer()
          const buffer = Buffer.from(bytes)

          // Créer le répertoire s'il n'existe pas
          const uploadDir = path.join(process.cwd(), "public", "uploads", "cours")
          if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true })
            console.log("Répertoire créé:", uploadDir)
          }

          // Écrire le fichier
          const filePath = path.join(uploadDir, fileName)
          fs.writeFileSync(filePath, buffer)
          console.log("Fichier écrit à:", filePath)

          // Définir l'URL de l'image
          photoCours = publicPath
          console.log("URL de l'image définie:", photoCours)
        } else {
          console.log("Aucun fichier image valide reçu")
        }
      } catch (error) {
        console.error("Erreur lors du parsing FormData:", error)
        return NextResponse.json({ error: "Invalid form data" }, { status: 400 })
      }
    } else {
      console.log("Type de contenu non pris en charge:", contentType)
      return NextResponse.json({ error: "Unsupported content type" }, { status: 400 })
    }

    console.log("Données reçues:", {
      categorie,
      titre,
      description,
      photoCours,
    })

    // Vérification des données reçues
    console.log("Vérification des champs obligatoires...")
    if (!categorie || !titre || !description) {
      console.log("Champs manquants:", {
        categorie: !!categorie,
        titre: !!titre,
        description: !!description,
      })
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }
    console.log("Tous les champs obligatoires sont présents")

    // Récupérer le cours existant pour conserver les champs non modifiés
    const existingCours = await prisma.cours.findUnique({
      where: { id_cours: id },
    })

    if (!existingCours) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    // Préparer les données pour la mise à jour
    const updateData: any = {
      categorie,
      titre,
      description,
    }

    // Ajouter la photo si elle est fournie
    if (photoCours !== undefined) {
      updateData.photoCours = photoCours
    }

    console.log("Données de mise à jour:", updateData)
    console.log("Données finales pour la mise à jour:", updateData)

    // Mettre à jour le cours
    const cours = await prisma.cours.update({
      where: {
        id_cours: id,
      },
      data: updateData,
    })

    console.log("Résultat de la mise à jour:", cours)
    console.log("Cours mis à jour avec succès:", cours)
    return NextResponse.json({ message: "Course updated successfully", cours }, { status: 200 })
  } catch (error) {
    console.error("Error updating course:", error)
    return NextResponse.json({ error: "Failed to update course" }, { status: 500 })
  }
}

// Supprimer un cours par son ID
export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
  // Await params avant d'accéder à ses propriétés
  const resolvedParams = await params
  console.log("=== Suppression du cours par ID ===", resolvedParams.id)

  try {
    // Vérification de l'authentification
    const token = request.headers.get("Authorization")?.split(" ")[1]

    if (!token) {
      console.log("Aucun token fourni")
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 })
    }

    let decodedTokenPayload: DecodedToken | null = null
    const secretKey = process.env.JWT_SECRET

    if (!secretKey) {
      console.error("JWT_SECRET n'est pas défini dans les variables d'environnement.")
      return NextResponse.json({ error: "Erreur de configuration serveur." }, { status: 500 })
    }

    try {
      decodedTokenPayload = jwt.verify(token, secretKey) as DecodedToken
    } catch (error) {
      // Le token est invalide
    }

    if (!decodedTokenPayload) {
      console.log("Token invalide")
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 })
    }
    console.log("Authentification réussie, utilisateur:", decodedTokenPayload)

    const id = Number.parseInt(resolvedParams.id, 10)

    // Vérification de l'ID
    if (!id || isNaN(id)) {
      return NextResponse.json({ error: "Cette ID n'est pas valide" }, { status: 400 })
    }

    // Vérifier si le cours existe
    const existingCours = await prisma.cours.findUnique({
      where: { id_cours: id },
      include: {
        chapitre: {
          include: {
            lecon: true,
          },
        },
      },
    })

    if (!existingCours) {
      return NextResponse.json({ error: "Course not found" }, { status: 404 })
    }

    // Supprimer dans l'ordre : leçons -> chapitres -> cours
    console.log("Suppression des données liées...")

    // 1. Supprimer toutes les leçons de tous les chapitres
    for (const chapitre of existingCours.chapitre) {
      if (chapitre.lecon && chapitre.lecon.length > 0) {
        await prisma.lecon.deleteMany({
          where: {
            id_chapitre: chapitre.id_chapitre,
          },
        })
        console.log(`Leçons supprimées pour le chapitre ${chapitre.id_chapitre}`)
      }
    }

    // 2. Supprimer tous les chapitres du cours
    if (existingCours.chapitre.length > 0) {
      await prisma.chapitre.deleteMany({
        where: {
          id_cours: id,
        },
      })
      console.log("Chapitres supprimés")
    }

    // 3. Supprimer les suivis de cours s'ils existent
    await prisma.suiviCours.deleteMany({
      where: {
        id_cours: id,
      },
    })
    console.log("Suivis de cours supprimés")

    // 4. Finalement, supprimer le cours
    const cours = await prisma.cours.delete({
      where: {
        id_cours: id,
      },
    })

    console.log("Cours supprimé avec succès:", cours)
    return NextResponse.json({ message: "Course deleted successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error deleting course:", error)
    return NextResponse.json({ error: "Failed to delete course" }, { status: 500 })
  }
}

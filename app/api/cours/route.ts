import { PrismaClient } from "@/generated/prisma"
import { verifyJWT } from "lib/auth"
import { NextResponse } from "next/server"
import { writeFile } from "fs/promises"
import path from "path"
import { v4 as uuidv4 } from "uuid"

const prisma = new PrismaClient() // Instance de PrismaClient pour interagir avec la base de données

// Récupérer tous les cours
export async function GET(request: Request) {
  // Vérification de l'authentification
  const isAuthorized = await verifyJWT(request) // Vérifie l'authentification
  if (!isAuthorized) {
    return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }) // Retourne une erreur 401 si non autorisé
  }

  try {
    const cours = await prisma.cours.findMany({
      include: {
        chapitre: true, // Inclure les chapitres associés au cours
      },
    })
    return NextResponse.json(cours, { status: 200 })
  } catch (error) {
    console.error("Error fetching courses:", error) // Erreur lors de la récupération des cours
    return NextResponse.json({ error: "Failed to fetch courses" }, { status: 500 })
  }
}

// Ajouter un cours
export async function POST(request: Request) {
  // Vérification de l'authentification
  const isAuthorized = await verifyJWT(request) // Vérifie l'authentification
  if (!isAuthorized) {
    return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }) // Retourne une erreur 401 si non autorisé
  }

  try {
    // Utiliser formData au lieu de json
    const formData = await request.formData()

    // Extraire les champs du formData
    const categorie = formData.get("categorie") as string
    const titre = formData.get("titre") as string
    const description = formData.get("description") as string
    const dateCreation = formData.get("dateCreation") as string
    const id_formateur = formData.get("id_formateur") as string
    const photoFile = formData.get("photoCours") as File

    // Vérification des données reçues
    if (!categorie || !titre || !description || !dateCreation || !id_formateur) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 }) // Champs obligatoires manquants
    }

    let photoCours = ""

    // Traiter le fichier photo si présent
    if (photoFile && photoFile.size > 0) {
      try {
        // Générer un nom de fichier unique
        const fileExtension = photoFile.name.split(".").pop()
        const fileName = `${uuidv4()}.${fileExtension}`

        // Définir le chemin de sauvegarde
        const publicDir = path.join(process.cwd(), "public")
        const uploadsDir = path.join(publicDir, "uploads", "cours")

        // Créer le répertoire s'il n'existe pas
        try {
          await writeFile(path.join(uploadsDir, fileName), Buffer.from(await photoFile.arrayBuffer()))
          photoCours = `/uploads/cours/${fileName}`
        } catch (error) {
          console.error("Error saving file:", error)
          // Continuer même si l'enregistrement du fichier échoue
          photoCours = ""
        }
      } catch (error) {
        console.error("Error processing file:", error)
        // Continuer même si le traitement du fichier échoue
        photoCours = ""
      }
    }

    const newCours = await prisma.cours.create({
      data: {
        categorie,
        titre,
        description,
        photoCours,
        dateCreation: new Date(dateCreation), // Conversion de la date au format Date
        id_formateur: Number.parseInt(id_formateur, 10), // ID de l'utilisateur qui a créé le cours
      },
    })

    return NextResponse.json({ message: "Cours ajouté avec succès", newCours }, { status: 201 })
  } catch (error) {
    console.error("Error creating course:", error) // Erreur lors de la création du cours
    return NextResponse.json({ error: "Failed to create course" }, { status: 500 })
  }
}

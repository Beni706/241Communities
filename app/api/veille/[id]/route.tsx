import { PrismaClient } from "@/generated/prisma"
import { NextResponse } from "next/server"
import { verifyJWT } from "@/lib/auth"

const prisma = new PrismaClient()

// Interface pour les erreurs Prisma
interface PrismaError extends Error {
  code?: string
  meta?: any
}

// Recuperer les veille par ID
export async function GET(request: Request, { params }: { params: { id: string } }) {
  console.log(`GET /api/veille/${params.id} - Début de la requête`)

  const isAuthorized = await verifyJWT(request)
  if (!isAuthorized) {
    console.log(`GET /api/veille/${params.id} - Accès refusé`)
    return NextResponse.json({ error: "Accès refusé !" }, { status: 401 })
  }

  try {
    const id = Number.parseInt(params.id, 10)
    console.log(`GET /api/veille/${params.id} - Recherche de la veille avec ID:`, id)

    const veille = await prisma.veille.findUnique({
      where: { id_veille: id },
    })

    // Vérifie si la veille existe
    if (!veille) {
      console.log(`GET /api/veille/${params.id} - Veille non trouvée`)
      return NextResponse.json({ message: "veille non trouvé" }, { status: 404 })
    }

    console.log(`GET /api/veille/${params.id} - Veille trouvée:`, veille)
    return NextResponse.json(veille, { status: 200 })
  } catch (error: unknown) {
    console.error(`GET /api/veille/${params.id} - Erreur:`, error)

    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue"
    return NextResponse.json({ error: `Failed to fetch veille: ${errorMessage}` }, { status: 500 })
  }
}

// Modifier la veille (mise à jour partielle autorisée)
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  console.log(`PUT /api/veille/${params.id} - Début de la requête`)

  const isAuthorized = await verifyJWT(request)
  if (!isAuthorized) {
    console.log(`PUT /api/veille/${params.id} - Accès refusé`)
    return NextResponse.json({ error: "Accès refusé !" }, { status: 401 })
  }

  try {
    const id = Number.parseInt(params.id, 10)
    const body = await request.json()
    console.log(`PUT /api/veille/${params.id} - Données reçues:`, body)

    const { titre, lien_docDonnee, lien_docRendu, date_fin, id_apprenant, id_formateur, referentiel } = body

    // Préparer les données à mettre à jour (seulement les champs fournis)
    const updateData: any = {}

    // Mise à jour conditionnelle - seulement si le champ est fourni
    if (titre !== undefined && titre !== null) {
      updateData.titre = titre
      console.log(`PUT /api/veille/${params.id} - Mise à jour du titre:`, titre)
    }

    if (lien_docDonnee !== undefined && lien_docDonnee !== null) {
      updateData.lien_docDonnee = lien_docDonnee
      console.log(`PUT /api/veille/${params.id} - Mise à jour du lien document donné:`, lien_docDonnee)
    }

    if (lien_docRendu !== undefined) {
      updateData.lien_docRendu = lien_docRendu
      console.log(`PUT /api/veille/${params.id} - Mise à jour du lien document rendu:`, lien_docRendu)
    }

    if (id_apprenant !== undefined) {
      updateData.id_apprenant = id_apprenant ? Number(id_apprenant) : null
      console.log(`PUT /api/veille/${params.id} - Mise à jour de l'ID apprenant:`, updateData.id_apprenant)
    }

    if (id_formateur !== undefined && id_formateur !== null) {
      updateData.id_formateur = Number(id_formateur)
      console.log(`PUT /api/veille/${params.id} - Mise à jour de l'ID formateur:`, updateData.id_formateur)
    }

    if (referentiel !== undefined) {
      updateData.referentiel = referentiel
      console.log(`PUT /api/veille/${params.id} - Mise à jour du référentiel:`, referentiel)
    }

    // Gérer la date_fin avec l'heure si fournie
    if (date_fin !== undefined && date_fin !== null) {
      try {
        const dateFin = new Date(date_fin)
        console.log(`PUT /api/veille/${params.id} - Date fin reçue:`, date_fin)
        console.log(`PUT /api/veille/${params.id} - Date fin parsée:`, dateFin)

        // Vérifier si la date est valide
        if (isNaN(dateFin.getTime())) {
          throw new Error("Date invalide")
        }

        updateData.date_fin = dateFin
        console.log(`PUT /api/veille/${params.id} - Date fin mise à jour:`, updateData.date_fin)
      } catch (dateError: unknown) {
        console.error(`PUT /api/veille/${params.id} - Erreur lors du parsing de la date:`, dateError)
        const errorMessage = dateError instanceof Error ? dateError.message : "Erreur de format de date"
        return NextResponse.json({ message: `Format de date invalide: ${date_fin} - ${errorMessage}` }, { status: 400 })
      }
    }

    // Vérifier qu'au moins un champ est fourni pour la mise à jour
    if (Object.keys(updateData).length === 0) {
      console.log(`PUT /api/veille/${params.id} - Aucun champ à mettre à jour`)
      return NextResponse.json({ message: "Aucun champ à mettre à jour fourni" }, { status: 400 })
    }

    console.log(`PUT /api/veille/${params.id} - Données finales à mettre à jour:`, updateData)

    const veille = await prisma.veille.update({
      where: { id_veille: id },
      data: updateData,
    })

    console.log(`PUT /api/veille/${params.id} - Veille mise à jour avec succès:`, veille)
    return NextResponse.json({ message: "veille modifiée avec succès", veille }, { status: 200 })
  } catch (error: unknown) {
    console.error(`PUT /api/veille/${params.id} - Erreur du serveur:`, error)

    // Gestion spécifique des erreurs Prisma
    if (error && typeof error === "object" && "code" in error) {
      const prismaError = error as PrismaError
      if (prismaError.code === "P2025") {
        return NextResponse.json({ error: "Veille non trouvée" }, { status: 404 })
      }
    }

    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue du serveur"
    return NextResponse.json({ error: `Erreur du serveur: ${errorMessage}` }, { status: 500 })
  }
}

// Supprimer la veille
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  console.log(`DELETE /api/veille/${params.id} - Début de la requête`)

  const isAuthorized = await verifyJWT(request)
  if (!isAuthorized) {
    console.log(`DELETE /api/veille/${params.id} - Accès refusé`)
    return NextResponse.json({ error: "Accès refusé !" }, { status: 401 })
  }

  try {
    const id = Number.parseInt(params.id, 10)
    console.log(`DELETE /api/veille/${params.id} - Suppression de la veille avec ID:`, id)

    const veille = await prisma.veille.delete({
      where: { id_veille: id },
    })

    console.log(`DELETE /api/veille/${params.id} - Veille supprimée:`, veille)
    return NextResponse.json({ message: "veille supprimée avec succès", veille }, { status: 200 })
  } catch (error: unknown) {
    console.log(`DELETE /api/veille/${params.id} - Erreur du serveur`, error)

    // Gestion spécifique des erreurs Prisma
    if (error && typeof error === "object" && "code" in error) {
      const prismaError = error as PrismaError
      if (prismaError.code === "P2025") {
        return NextResponse.json({ error: "Veille non trouvée" }, { status: 404 })
      }
    }

    const errorMessage = error instanceof Error ? error.message : "Erreur inconnue du serveur"
    return NextResponse.json({ error: `Erreur du serveur: ${errorMessage}` }, { status: 500 })
  }
}

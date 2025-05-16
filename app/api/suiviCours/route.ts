import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { verifyJWT } from "lib/auth";


/// Lecture (GET)
///   (GET) http://localhost:3000/api/suiviCours

const prisma = new PrismaClient

export async function GET(request: Request) {
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
        if (!isAuthorized) {
            return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
        }
    try {
        const suiviCours = await prisma.suiviCours.findMany()
        return NextResponse.json(suiviCours, { status: 200 })

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch suiviCours " }, { status: 500 })

    }
}



// Création (POST)
// (POST) http://localhost:3000/api/suiviCours


export async function POST(request: Request) {
    try {
        const data = await request.json()

        // On vérifie si les champs obligatoires (et les clés étrangères attendues) ont été fournis.
        if (!data.dateDebut || data.pourcentage == null || !data.utilisateurId || !data.coursId) {
            return NextResponse.json(
                { error: 'Champs requis manquants ou invalides (dateDebut, pourcentage, dateFin, utilisateurId, coursId)' },
                { status: 400 }
            );
        }

        // Utiliser Prisma pour insérer un nouvel suiviCours dans la base de données
        const newSuiviCours = await prisma.suiviCours.create({
            data: {
                dateDebut: new Date(data.dateDebut), 
                pourcentage: Number(data.pourcentage), 
                dateFin: new Date(data.dateFin),
                id_apprenant: data.id_apprenant, // Clé étrangère vers l'apprenant
                id_cours: data.id_cours,          // Clé étrangère vers le cours
            },
        })
        return NextResponse.json(newSuiviCours, { status: 201 })
    }
    catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Erreur lors de la création' },
            { status: 500 }
        );
    }
}
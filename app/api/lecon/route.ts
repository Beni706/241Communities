import { PrismaClient } from "@/generated/prisma";
import { verifyJWT } from "lib/auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient(); // Instance de PrismaClient pour interagir avec la base de données


// Récupérer tous les leçons
export async function GET(request: Request) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        const lecon = await prisma.lecon.findMany()
        return NextResponse.json(lecon, { status: 200 })
    } catch (error) {
        console.error('Error fetching courses:', error) // Erreur lors de la récupération des cours
        return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })                
    }
}

// Ajouter une leçon
export async function POST(request: Request) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }
    
    try {
        const { titre, contenuTextuel, contenuVideo, numeroOrdre, id_chapitre } = await request.json() // Récupérer les données du formulaire

        // Vérification des données reçues
        if (!titre  || !numeroOrdre || !id_chapitre) {
            return NextResponse.json({error: 'Missing required fields' }, { status: 400 }) // Champs obligatoires manquants
        }

        const newLecon = await prisma.lecon.create({
            data: {
                titre,
                contenuTextuel,
                contenuVideo,
                numeroOrdre: parseInt(numeroOrdre, 10),
                id_chapitre: parseInt(id_chapitre, 10)
            }
        });
        return NextResponse.json({ message: 'Leçon ajouter avec succès', newLecon }, { status: 201 })

    } catch (error) {
        console.error('Error creating course:', error) // Erreur lors de la création du cours
        return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
    }
}
import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { verifyJWT } from "lib/auth";

const prisma = new PrismaClient() // Instance de PrismaClient pour interagir avec la base de données

export async function GET(request: Request) {
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        const chapitre = await prisma.chapitre.findMany({
            include: {
                lecon: true, // Inclure les cours associés au chapitre
            }
        }); 

        return NextResponse.json(chapitre, { status: 200 });
    } catch (error) {
        console.error('Error fetching courses:', error); // Erreur lors de la récupération des cours
        return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 });        
    }
}

// Ajouter un chapitre
export async function POST(request: Request) {
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }
    
    try {
        const { titre, numeroOrdre, id_cours } = await request.json() // Récupérer les données du formulaire

        // Vérification des données reçues
        if (!titre || !numeroOrdre || !id_cours) {
            return NextResponse.json({error: 'Missing required fields' }, { status: 400 }) // Champs obligatoires manquants
        }

        const newChapitre = await prisma.chapitre.create({
            data: {
                titre,
                numeroOrdre: parseInt(numeroOrdre, 10),
                id_cours: parseInt(id_cours, 10)
            }
        })
        return NextResponse.json({ message: 'Chapitre ajouter avec succès', newChapitre }, { status: 201 })

    } catch (error) {
        console.error('Error creating course:', error) // Erreur lors de la création du cours
        return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
        
    }
}

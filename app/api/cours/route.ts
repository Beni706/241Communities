import { PrismaClient } from '@/generated/prisma';
import { verifyJWT } from 'lib/auth';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient(); // Instance de PrismaClient pour interagir avec la base de données

// Récupérer tous les cours
export async function GET(request: Request) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        const cours = await prisma.cours.findMany({
            include: {
                chapitre: true, // Inclure les chapitres associés au cours
            },
        }); 
        return NextResponse.json(cours, { status: 200 });
    } catch (error) {
        console.error('Error fetching courses:', error) // Erreur lors de la récupération des cours
        return NextResponse.json({ error: 'Failed to fetch courses' }, { status: 500 })        
    }
}

// Ajouter un cours
export async function POST(request: Request) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        const { categorie, titre, description, photoCours, dateCreation, id_formateur } = await request.json()

        // Vérification des données reçues
        if (!categorie || !titre || !description || !dateCreation || !id_formateur) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 }) // Champs obligatoires manquants
        }
        
        const newCours = await prisma.cours.create({
            data: {
                categorie,
                titre,
                description,
                photoCours,
                dateCreation: new Date(dateCreation), // Conversion de la date au format Date
                id_formateur: parseInt(id_formateur, 10), // ID de l'utilisateur qui a créé le cours
            },
        })
        return NextResponse.json({ message: 'Cour ajouter avec succès', newCours}, { status: 201 })
    } catch (error) {
        console.error('Error creating course:', error) // Erreur lors de la création du cours
        return NextResponse.json({ error: 'Failed to create course' }, { status: 500 })
        
    }
}

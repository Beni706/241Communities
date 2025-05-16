import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { verifyJWT } from 'lib/auth';

const prisma = new PrismaClient(); // Instance de PrismaClient pour interagir avec la base de données

// Récupérer un cours par son ID
export async function GET( request: Request, { params }: { params: { id: string } }) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        // Accès explicite à params.id
        const id = parseInt(params.id, 10); // Conversion de l'ID en entier

        // Vérification de l'ID
        if (!id || isNaN(id)) {
            return NextResponse.json({ error: 'Cette ID n\'est pas valide' }, { status: 400 });
        }

        const cours = await prisma.cours.findUnique({
            where: {
                id_cours: id, // Utilisation de id_cours pour la recherche
            },
            include: {
                chapitre: true, // Inclure les chapitres associés au cours
            },
        });

        if (!cours) {
            return NextResponse.json({ error: 'Course not found' }, { status: 404 });
        }

        return NextResponse.json(cours, { status: 200 });
    } catch (error) {
        console.error('Error fetching course:', error);
        return NextResponse.json({ error: 'Failed to fetch course' }, { status: 500 });
    }
}


// Mettre à jour un cours par son ID
export async function PUT(request:Request, { params }: { params: {id: string } }) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        const id = parseInt(params.id, 10); // Conversion de l'ID en entier
        const { categorie, titre, description, photoCours, dateCreation, id_formateur } = await request.json();

        // Vérification de l'ID
        if (!id || isNaN(id)) {
            return NextResponse.json({ error: 'Cette ID n\'est pas valide' }, { status: 400 });
        }

        const cours = await prisma.cours.update({
            where: {
                id_cours: id,
            },
            data: {
                categorie,
                titre,
                description,
                photoCours,
                dateCreation: new Date(dateCreation), // Conversion de la date au format Date
                id_formateur: parseInt(id_formateur, 10), // ID de l'utilisateur qui a créé le cours
            }
        });
        return NextResponse.json({ message: 'Course updated successfully', cours }, { status: 200 });

    } catch (error) {
        console.error('Error updating course:', error); // Erreur lors de la mise à jour du cours
        return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
        
    };
};

// Supprimer un cours par son ID
export async function DELETE(request: Request, { params }: { params: { id:string} }){

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }
    
    try {
        const id = parseInt(params.id,10); // Conversion de l'ID en entier
        const cours = await prisma.cours.delete({
            where: {
                id_cours:id,
            }
        });
        return NextResponse.json({ message: 'Course deleted successfully' }, { status: 200 });

    } catch (error) {
        console.error('Error deleting course:', error); // Erreur lors de la suppression du cours
        return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
        
    }
}
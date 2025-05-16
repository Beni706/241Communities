import { PrismaClient } from "@/generated/prisma";
import { verifyJWT } from "lib/auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient() // Instance de PrismaClient pour interagir avec la base de données


// Récupérer un chapitre par son ID
export async function GET(request: Request, { params }: { params: { id: string } }) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        const id = parseInt(params.id, 10); // Conversion de l'ID en entier

        // Vérification de l'ID
        if (!id || isNaN(id)) {
            return NextResponse.json({ error: 'Cette ID n\'est pas valide' }, { status: 400 });
        }

        const chapitre =await prisma.chapitre.findUnique({
            where: {
                id_chapitre: id,
            },
            include: {
                lecon: true, // Inclure les leçons associées au chapitre
            }
        })
        return NextResponse.json(chapitre, { status: 200 });
        
    } catch (error) {
        console.error('Error fetching course:', error);
        return NextResponse.json({ error: 'Failed to fetch course' }, { status: 500 });
        
    }
}


// Mettre à jour un chapitre par son ID
export async function PUT(request: Request, { params }: { params: { id:string } }){
      
    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        const id = parseInt(params.id, 10); // Conversion de l'ID en entier
        const { titre, numeroOrdre, id_cours } = await request.json(); // Récupérer les données du formulaire

        // Vérification de l'ID
        if (!id || isNaN(id)) {
            return NextResponse.json({ error: 'Cette ID n\'est pas valide' }, { status: 400 });
        };

        const chapitre =await prisma.chapitre.update({
            where: {
                id_chapitre: id,
            },
            data: {
                titre,
                numeroOrdre: parseInt(numeroOrdre, 10),
                id_cours: parseInt(id_cours, 10)
            }
        });
        return NextResponse.json({ message: 'Chapitre mis à jour avec succès', chapitre }, { status: 200 });
    } catch (error) {
        console.error('Error updating course:', error); // Erreur lors de la mise à jour du cours
        return NextResponse.json({ error: 'Failed to update course' }, { status: 500 });
        
    }
}

// Supprimer un chapitre par son ID
export async function DELETE(request: Request, { params }: { params: { id: string } }) {

        // Vérification de l'authentification
        const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
        if (!isAuthorized) {
            return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
        }
        
    try {
        const id = parseInt(params.id, 10); // Conversion de l'ID en entier
        const chapitre = await prisma.chapitre.delete({
            where: {
                id_chapitre: id,
            }
        });
        return NextResponse.json({ message: 'Chapitre supprimé avec succès' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting course:', error); // Erreur lors de la suppression du cours
        return NextResponse.json({ error: 'Failed to delete course' }, { status: 500 });
        
    }
}
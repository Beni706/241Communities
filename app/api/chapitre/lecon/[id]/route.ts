import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { verifyJWT } from "lib/auth"; // Importer la fonction verifyJWT


const prisma = new PrismaClient() // Instance de PrismaClient pour interagir avec la base de données


// Récupérer tous les chapitres associés a un cours
export async function GET(request: Request, { params }: { params: { id: string } }) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
       return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
    }

    try {
        const id = parseInt(params.id, 10); // Conversion de l'ID en entier

        // Récupérer les chapitres associés à un cours spécifique
        const lecon = await prisma.lecon.findMany({
            where: {
                id_chapitre: id, // Filtrer par l'ID du cours
            },
        });

        return NextResponse.json(lecon, { status: 200 }); // Retourner les chapitres au format JSON
    } catch (error) {
        console.error('Erreur lors de la récupération des chapitres du cours', error);
        return NextResponse.json({ error: 'Failed to fetch chapters' }, { status: 500 });        
    }
}
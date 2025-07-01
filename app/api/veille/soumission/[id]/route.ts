//@ Recupere toutes les soumissions d'une veille
//@ GET /api/veille/soumission/[id]/route.ts
// @ formateur-only

import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        // Convertir l'ID en nombre
        const id_veille = Number(params.id);

        if (isNaN(id_veille)) {
            return NextResponse.json(
                { error: 'ID de veille invalide' },
                { status: 400 }
            );
        }

        // Vérifier que la veille existe
        const veille = await prisma.veille.findUnique({
            where: { id_veille },
        });

        if (!veille) {
            return NextResponse.json(
                { error: 'Veille non trouvée' },
                { status: 404 }
            );
        }

        // Récupérer toutes les soumissions pour cette veille
        const soumissions = await prisma.soumission.findMany({
            where: { id_veille },
            include: {
                apprenant: {
                    select: {
                        id_apprenant: true,
                        nom: true,
                        prenom: true,
                        email: true,
                        referentiel: true,
                    },
                },
                veille: {
                    select: {
                        titre: true,
                        referentiel: true,
                        date_fin: true,
                    },
                },
            },
            orderBy: {
                date_soumission: 'desc',
            },
        });

        return NextResponse.json(soumissions, { status: 200 });

    } catch (error) {
        console.error('Erreur lors de la récupération des soumissions:', error);
        return NextResponse.json(
            { error: 'Erreur interne du serveur' },
            { status: 500 }
        );
    }
}

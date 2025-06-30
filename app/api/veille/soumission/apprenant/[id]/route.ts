// app/api/soumission/apprenant/[id]/route.ts
import { NextResponse } from 'next/server';
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

export async function GET(
    request: Request,
    { params }: { params: { id: string } }
) {
    try {
        // 1. Validation de l'ID
        const apprenantId = parseInt(params.id);
        if (isNaN(apprenantId) || apprenantId <= 0) {
            return NextResponse.json(
                { error: 'ID apprenant invalide' },
                { status: 400 }
            );
        }

        // 2. Vérification de l'existence de l'apprenant
        const apprenantExists = await prisma.apprenant.findUnique({
            where: { id_apprenant: apprenantId },
        });

        if (!apprenantExists) {
            return NextResponse.json(
                { error: 'Apprenant non trouvé' },
                { status: 404 }
            );
        }

        // 3. Récupération des soumissions avec les données de la veille
        const soumissions = await prisma.soumission.findMany({
            where: { id_apprenant: apprenantId },
            include: {
                veille: {
                    select: {
                        titre: true,
                        date_fin: true,
                        referentiel: true,
                    },
                },
            },
            orderBy: {
                date_soumission: 'desc',
            },
        });

        // 4. Formatage de la réponse
        const response = soumissions.map(s => ({
            id_soumission: s.id_soumission,
            date_soumission: s.date_soumission,
            lien_soumission: s.lien_soumission,
            veille: {
                titre: s.veille.titre,
                date_fin: s.veille.date_fin,
                referentiel: s.veille.referentiel,
            },
        }));

        return NextResponse.json(response);

    } catch (error) {
        console.error(`GET /soumission/apprenant/${params.id} - Error:`, error);
        return NextResponse.json(
            { error: 'Erreur interne du serveur' },
            { status: 500 }
        );
    }
}
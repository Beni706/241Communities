// route.ts
import { NextResponse } from 'next/server'
import { PrismaClient } from '@/generated/prisma'
import { writeFile } from 'fs/promises'
import path from 'path'

const prisma = new PrismaClient()

// app/api/veille/soumission/route.ts
export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;
    const id_veille = formData.get('id_veille');
    const id_apprenant = formData.get('id_apprenant');

    // Validation basique
    if (!file || !id_veille || !id_apprenant) {
      return NextResponse.json(
        { error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Conversion et validation des IDs
    const veilleId = parseInt(id_veille.toString());
    const apprenantId = parseInt(id_apprenant.toString());

    if (isNaN(veilleId) || isNaN(apprenantId)) {
      return NextResponse.json(
        { error: 'ID de veille ou apprenant invalide' },
        { status: 400 }
      );
    }

    // Vérification de l'existence des entités liées
    const [veilleExists, apprenantExists] = await Promise.all([
      prisma.veille.findUnique({ where: { id_veille: veilleId } }),
      prisma.apprenant.findUnique({ where: { id_apprenant: apprenantId } })
    ]);

    if (!veilleExists) {
      return NextResponse.json(
        { error: 'La veille spécifiée n\'existe pas' },
        { status: 404 }
      );
    }

    if (!apprenantExists) {
      return NextResponse.json(
        { error: 'L\'apprenant spécifié n\'existe pas' },
        { status: 404 }
      );
    }

    // Vérification que l'apprenant appartient au même référentiel que la veille
    if (apprenantExists.referentiel !== veilleExists.referentiel) {
      return NextResponse.json(
        { error: 'L\'apprenant n\'est pas dans le même référentiel que la veille' },
        { status: 400 }
      );
    }

    // Vérification de la date limite
    if (new Date() > new Date(veilleExists.date_fin)) {
      return NextResponse.json(
        { error: 'La date limite de soumission est dépassée' },
        { status: 400 }
      );
    }

    // ... reste du traitement du fichier et création de la soumission ...

    // Création ou mise à jour de la soumission
    const existingSubmission = await prisma.soumission.findFirst({
      where: {
        id_veille: veilleId,
        id_apprenant: apprenantId,
      },
    });

    if (existingSubmission) {
      // Mise à jour si soumission existe déjà
      await prisma.soumission.update({
        where: { id_soumission: existingSubmission.id_soumission },
        data: {
          lien_soumission: '/uploads/fichier.pdf', // remplacer par le vrai chemin
          date_soumission: new Date(),
        },
      });
    } else {
      // Création si nouvelle soumission
      await prisma.soumission.create({
        data: {
          id_veille: veilleId,
          id_apprenant: apprenantId,
          lien_soumission: '/uploads/fichier.pdf', // remplacer par le vrai chemin
          date_soumission: new Date(),
        },
      });
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Erreur:', error);
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    );
  }
}
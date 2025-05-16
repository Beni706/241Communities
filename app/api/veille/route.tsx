import { PrismaClient } from "@/generated/prisma";
import { verifyJWT } from "@/lib/auth";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Recuperer toutes les veilles
export async function GET(request: Request) {
  const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
  if (!isAuthorized) {
    return NextResponse.json({ message: `Accès refusé !` }, { status: 401 }); // Retourne une erreur 401 si non autorisé
  }

  try {
    const veilles = await prisma.veille.findMany();
    return NextResponse.json(veilles);
  } catch (error) {
    console.log(`Erreur du serveur`, error);
    return NextResponse.json({ message: `Erreur serveur` }, { status: 500 });
  };
};


// Creer une veille
export async function POST(request: Request) {
  const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
  if (!isAuthorized) {
    return NextResponse.json({ message: `Accès refusé !` }, { status: 401 }); // Retourne une erreur 401 si non autorisé
  }

  try {
    const { titre, lien_docDonnee, lien_docRendu, date_creation, date_fin, id_apprenant, id_formateur } = await request.json();

    if (!titre || !lien_docDonnee  || !date_creation || !date_fin || !id_formateur) {
      return NextResponse.json({ message: `Tous les champs sont obligatoires` }, { status: 400 });
    };

    const veille = await prisma.veille.create({
      data: {
        titre,
        lien_docDonnee,
        lien_docRendu,
        date_creation: new Date(),
        date_fin,
        id_apprenant: parseInt(id_apprenant),
        id_formateur: parseInt(id_formateur)
      },
    });

    return NextResponse.json(veille);

  } catch (error) {
    console.log(`Erreur du serveur`, error);
    return NextResponse.json({ message: `Erreur serveur` }, { status: 500 });
  };
};
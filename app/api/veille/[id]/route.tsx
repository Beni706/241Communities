import { PrismaClient } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { verifyJWT } from "@/lib/auth";

const prisma = new PrismaClient();

// Recuperer les veille par ID
export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  const isAuthorized = await verifyJWT(request);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Accès refusé !" }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);

    const veille = await prisma.veille.findUnique({
      where: { id_veille: id },
    });

    // Vérifie si la veille existe
    if (!veille) {
      return NextResponse.json(
        { message: "veille non trouvé" },
        { status: 404 }
      );
    }
    return NextResponse.json(veille, { status: 200 });
  } catch (error) {
    console.error("Error fetching veille:", error);
    return NextResponse.json(
      { error: "Failed to fetch veille" },
      { status: 500 }
    );
  }
}

// Modifier la veille
export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const isAuthorized = await verifyJWT(request);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Accès refusé !" }, { status: 401 });
  }

  try {
    const id = parseInt(params.id, 10);
    const { titre, lien_docDonnee, lien_docRendu, date_creation, date_fin, id_apprenant, id_formateur } =
      await request.json();

    const veille = await prisma.veille.update({
      where: { id_veille: id },
      data: {
        titre,
        lien_docDonnee,
        lien_docRendu,
        date_creation: new Date(date_creation),
        date_fin,
        id_apprenant,
        id_formateur
      },
    });
    return NextResponse.json({message: "veille modifier avec succès", veille}, { status: 200 });

  } catch (error) {
    console.log("Erreur du serveur", error);
    return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
  };
};


// Supprimer la veille
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const isAuthorized = await verifyJWT(request);
  if (!isAuthorized) {
    return NextResponse.json({ error: "Accès refusé !" }, { status: 401 });
  };

  try {
    const id = parseInt(params.id, 10);

    const veille = await prisma.veille.delete({
      where: { id_veille: id },
    });

    return NextResponse.json({message: "veille supprimer avec succès", veille}, { status: 200 });

  } catch (error) {
    console.log("Erreur du serveur", error);
    return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 });
  };
};

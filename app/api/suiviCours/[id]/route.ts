/// Routes Dynamiques

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";


/// Lecture (GET)
/// (GET) http://localhost:3000/api/suiviCours/[id]

const prisma = new PrismaClient();

export async function GET(request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);
        const suiviCours = await prisma.suiviCours.findUnique({ where: { id_suiviCours: id } });

        if (!suiviCours) {
            return NextResponse.json({ error: "Suivi de cours non trouvé" }, { status: 404 });
        }

        return NextResponse.json(suiviCours, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}

/// Suppression (DELETE)
/// (DELETE) http://localhost:3000/api/suiviCours/[id]

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);
        const existingSuiviCours = await prisma.suiviCours.findUnique({ where: { id_suiviCours: id } });
        if (!existingSuiviCours) {
            return NextResponse.json({ error: "Suivi de cours introuvable" }, { status: 404 });
        }
        const deleteSuiviCours = await prisma.suiviCours.delete({ where: { id_suiviCours: id } });
        return NextResponse.json(deleteSuiviCours, { status: 200 });
    } catch (error) {
        console.error("Erreur DELETE :", error);
        return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 });
    }
}

// Modification (PUT)
// (PUT) http://localhost:3000/api/utilisateurs/[id]

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const id = parseInt(params.id);
        const suiviCours = await prisma.suiviCours.findUnique({ where: { id_suiviCours: id } });
        if (!suiviCours) {
            return NextResponse.json({ error: "Suivi de cours introuvable" }, { status: 404 });
        }
        const body = await request.json();
        const updatedSuiviCours = await prisma.suiviCours.update({
            where: { id_suiviCours: id },
            data: body,
        });
        return NextResponse.json(updatedSuiviCours, { status: 200 });
    } catch (error) {
        console.error("Erreur PUT :", error);
        return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 });
    }
}
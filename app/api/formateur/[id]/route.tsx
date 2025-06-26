/// Routes Dynamiques

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { verifyJWT } from "@/lib/auth"

const prisma = new PrismaClient();

/// Lecture (GET)
///   (GET) http://localhost:3000/api/formateur/[id]
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {

        const isAuthorized = await verifyJWT(request);
        if(!isAuthorized) {
            return NextResponse.json({ message: `Accès refusé !` }, {status: 401});
        };

    try {
        /// Conversion en entier pour que l'ORM puisse faire la comparaison
        const id = parseInt(params.id);
        const formateur = await prisma.formateur.findUnique({ where: { id_formateur: id } });

        /// Si le formateur n'existe pas dans la base de donees
        if (!formateur) {
            return NextResponse.json({ error: "Formateur non trouvé" }, { status: 404 });

        };

        return NextResponse.json(formateur, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    }
}



/// Suppression (DELETE)
///   (DELETE) http://localhost:3000/api/formateur/[id]

export async function DELETE(request: Request, { params }: { params: { id: string } }) {

    const isAuthorized = await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: `Accès refusé !` }, {status: 401});
    };

    try {
        // Conversion en entier pour que l'ORM puisse faire la comparaison
        const id = parseInt(params.id);
        /// On verifie si l'utilisateur existe dans la base de donnees
        const existingFormateur = await prisma.formateur.findUnique({ where: { id_formateur: id } })
        if (!existingFormateur) {
            return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
        };
        /// Supprime l'objet
        const deleteFormateur = await prisma.formateur.delete({ where: { id_formateur: id } });
        return NextResponse.json({ message: "Administrateur supprimé avec succès", deleteFormateur}, { status: 200 });

    } catch (error) {
        console.error("Erreur DELETE :", error)
        return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 })

    };
};


// Modification (PUT)
// (PUT) http://localhost:3000/api/formateur/[id]

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: `Accès refusé !` }, {status: 401});
    };

    try {
        const id = parseInt(params.id)
        const { nom, prenom, email, password, referentiel} = await request.json();

        // Vérification si l'utilisateur existe
        const existingFormateur = await prisma.formateur.findUnique({ where: { id_formateur: id } });
        if (!existingFormateur) {
            return NextResponse.json({ error: "Formateur introuvable" }, { status: 404 });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe

        // Mettre à jour l'utilisateur
        const updatedFormateur = await prisma.formateur.update({
            where: { id_formateur: id },
            data: {
                nom,
                prenom,
                email,
                password: hashedPassword,
                referentiel
            },
        });

        return NextResponse.json({ message: "Formateur mis à jour avec succès", updatedFormateur}, { status: 200 });

    } catch (error) {
        console.error("Erreur du serveur :", error)
        return NextResponse.json({ error: "Erreur du serveur" }, { status: 500 })

    };
};
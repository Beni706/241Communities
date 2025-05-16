/// Routes Dynamiques

import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import bcrypt from "bcryptjs";
import { verifyJWT } from "@/lib/auth";


/// Lecture (GET)
///   (GET) http://localhost:3000/api/admin/[id]

const prisma = new PrismaClient()


export async function GET(request: Request, { params }: { params: { id: string } }) {

        const isAuthorized = await verifyJWT(request);
        if(!isAuthorized) {
            return NextResponse.json({ message: `Accès refusé !` }, {status: 401});
        };

    try {
        /// Conversion en entier pour que l'ORM puisse faire la comparaison
        const id = parseInt(params.id)
        const administrateur = await prisma.administrateur.findUnique({ where: { id_administrateur: id } })

        /// Si l'admin n'existe pas dans la base de donees
        if (!administrateur) {
            return NextResponse.json({ error: "Utilisateur non trouvé" }, { status: 404 });

        };

        return NextResponse.json(administrateur, { status: 200 });

    } catch (error) {
        return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
    };
};



/// Suppression (DELETE)
///   (DELETE) http://localhost:3000/api/admin/[id]

export async function DELETE(request: Request, { params }: { params: { id: string } }) {

    const isAuthorized = await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: `Accès refusé !` }, {status: 401});
    };

    try {
        // Conversion en entier pour que l'ORM puisse faire la comparaison
        const id = parseInt(params.id)
        /// On verifie si l'administrateur existe dans la base de donnees
        const existingAdministrateur = await prisma.administrateur.findUnique({ where: { id_administrateur: id } })
        if (!existingAdministrateur) {
            return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
        }
        /// Supprime l'objet
        const deleteAdministrateur = await prisma.administrateur.delete({ where: { id_administrateur: id } })
        return NextResponse.json({ message: "Administrateur supprimé avec succès", deleteAdministrateur}, { status: 200 })

    } catch (error) {
        console.error("Erreur DELETE :", error)
        return NextResponse.json({ error: "Erreur lors de la suppression" }, { status: 500 })

    }
}


// Modification (PUT)
// (PUT) http://localhost:3000/api/admin/[id]

export async function PUT(request: Request, { params }: { params: { id: string } }) {

    // Vérification de l'authentification
    const isAuthorized = await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: `Accès refusé !` }, {status: 401});
    };

    try {
        const id = parseInt(params.id)
        const { nom, prenom, email, password} = await request.json()

        // Vérification si l'utilisateur existe
        const existingAdministrateur = await prisma.administrateur.findUnique({ where: { id_administrateur: id } })
        if (!existingAdministrateur) {
            return NextResponse.json({ error: "Utilisateur introuvable" }, { status: 404 });
        }

        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe

        // Mettre à jour l'utilisateur
        const updatedAdministrateur = await prisma.administrateur.update({
            where: { id_administrateur: id },
            data: {
                nom,
                prenom,
                email,
                password: hashedPassword
            },
        });

        return NextResponse.json({ message: "Administrateur mis à jour avec succès", updatedAdministrateur}, { status: 200 });

    } catch (error) {
        console.error("Erreur PUT :", error)
        return NextResponse.json({ error: "Erreur lors de la mise à jour" }, { status: 500 })

    }
}
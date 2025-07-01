import { PrismaClient, Referentiel } from "@/generated/prisma"; // Ajout de Referentiel si besoin pour le typage
import { verifyJWT } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server"; // Import de NextRequest
import bcrypt from 'bcryptjs';
import fs from 'fs';
import path from 'path';

const prisma = new PrismaClient(); // Instance de PrismaClient pour interagir avec la base de données

// Recuperer un apprenant par son ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ message: "Accès refusé !" }, { status: 401 })
    }
    try {
        const id = parseInt(params.id)
        const apprenant = await prisma.apprenant.findUnique({ where: { id_apprenant: id },
        })
        // Vérifie si l'apprenant existe
        if (!apprenant) {
            return NextResponse.json({ message: "Apprenant non trouvé" }, { status: 404 });
        }
        return NextResponse.json(apprenant, { status: 200 });

    } catch (error) {
        console.error('Error fetching apprenant:', error)
        return NextResponse.json({ error: 'Failed to fetch apprenant' }, { status: 500 });
    }
}


// Modifier un apprenant
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    const isAuthorized = await verifyJWT(request);
    if (!isAuthorized) {
        return NextResponse.json({ message: "Accès refusé !" }, { status: 401 });
    }
    try {
        const id = parseInt(params.id, 10);
        if (isNaN(id)) {
            return NextResponse.json({ message: "ID invalide." }, { status: 400 });
        }

        const formData = await request.formData();

        const updateData: {
            nom?: string;
            prenom?: string;
            email?: string;
            password?: string;
            referentiel?: Referentiel;
            photoProfil?: string | null;
        } = {};

        const nom = formData.get("nom") as string | null;
        const prenom = formData.get("prenom") as string | null;
        const email = formData.get("email") as string | null;
        const referentiel = formData.get("referentiel") as Referentiel | null;
        const password = formData.get("password") as string | null; // Le mot de passe n'est pas envoyé par le formulaire de profil, mais on garde la logique au cas où
        const photoProfilFile = formData.get("photoProfil") as File | null;

        if (nom) updateData.nom = nom;
        if (prenom) updateData.prenom = prenom;
        if (email) updateData.email = email;
        if (referentiel) updateData.referentiel = referentiel;

        if (password) { // Si un nouveau mot de passe est fourni, le hasher
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        if (photoProfilFile && photoProfilFile.size > 0) {
            const fileName = `apprenant_${id}_${Date.now()}.${photoProfilFile.name.split('.').pop()}`;
            const uploadDir = path.join(process.cwd(), 'public', 'uploads', 'profils');

            if (!fs.existsSync(uploadDir)) {
                fs.mkdirSync(uploadDir, { recursive: true });
            }

            const filePath = path.join(uploadDir, fileName);
            const bytes = await photoProfilFile.arrayBuffer();
            const buffer = Buffer.from(bytes);

            fs.writeFileSync(filePath, buffer);

            updateData.photoProfil = `/uploads/profils/${fileName}`;
        }

        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({ message: "Aucune donnée à mettre à jour." }, { status: 400 });
        }

        const updatedApprenant = await prisma.apprenant.update({
            where: { id_apprenant: id },
            data: updateData,
        });

        const { password: _, ...apprenantWithoutPassword } = updatedApprenant;

        return NextResponse.json({ message: "Profil mis à jour avec succès.", apprenant: apprenantWithoutPassword }, { status: 200 });
    } catch (error) {
        console.error('Error updating apprenant:', error);
        if ((error as any).code === 'P2025') {
            return NextResponse.json({ message: "Apprenant non trouvé pour la mise à jour." }, { status: 404 });
        }
        if ((error as any).code === 'P2002' && (error as any).meta?.target?.includes('email')) {
            return NextResponse.json({ message: "Cet email est déjà utilisé." }, { status: 409 });
        }
        return NextResponse.json({ message: 'La mise à jour de l\'apprenant a échoué.' }, { status: 500 });
    }
}


// Supprimer un apprenant
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
    const isAuthorized = await verifyJWT(request);
    if (!isAuthorized) {
        return NextResponse.json({ message: "Accès refusé !" }, { status: 401 });
    };

    try {
        const id = parseInt(params.id, 10);

        await prisma.apprenant.delete({
            where: { id_apprenant: id },
        })
        return NextResponse.json({ message: "Apprenant supprimé avec succès." }, { status: 200 });

    } catch (error) {
        console.error('Error deleting apprenant:', error);
        return NextResponse.json({ error: 'La suppression de l\'apprenant a échoué.' }, { status: 500 });
    };
}

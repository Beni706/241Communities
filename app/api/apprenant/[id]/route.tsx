import { PrismaClient, Referentiel } from "@/generated/prisma"; // Ajout de Referentiel si besoin pour le typage
import { verifyJWT } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server"; // Import de NextRequest
import bcrypt from 'bcryptjs'; // Import de bcryptjs

const prisma = new PrismaClient(); // Instance de PrismaClient pour interagir avec la base de données

// Recuperer un apprenant par son ID
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
    
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if (!isAuthorized) {
        return NextResponse.json({ message: "Accès refusé !" }, {status: 401 } ); // Retourne une erreur 401 si non autorisé
    }

    try {
        const id = parseInt(params.id, 10);
        if (isNaN(id)) {
            return NextResponse.json({ message: "ID invalide" }, { status: 400 });
        }


        const apprenant = await prisma.apprenant.findUnique({
            where: { id_apprenant: id },

        });

        // Vérifie si l'apprenant existe
        if (!apprenant) {
            return NextResponse.json({ message: "Apprenant non trouvé" }, { status: 404 });
        }
        return NextResponse.json(apprenant, { status: 200 });
        
    } catch (error) {
        console.error('Error fetching apprenant:', error);
        return NextResponse.json({ error: 'Failed to fetch apprenant' }, { status: 500 });  
    };
};


// Modifier un apprenant
export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
    
    const isAuthorized =await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: "Accès refusé !" }, { status: 401 });
    };
    
    try {
        const id = parseInt(params.id, 10);

        const { nom, prenom, email, password, referentiel, photoProfil } = await request.json();

        const updateData: {
            nom?: string;
            prenom?: string;
            email?: string;
            password?: string;
            referentiel?: Referentiel;
            photoProfil?: string | null;
        } = {};
        
        // Si un nouveau mot de passe est fourni, le hasher
        if (password) {
            const hashedPassword = await bcrypt.hash(password, 10);
            updateData.password = hashedPassword;
        }

        if (Object.keys(updateData).length === 0) {
            return NextResponse.json({ message: "Aucune donnée à mettre à jour." }, { status: 400 });
        }

        const updatedApprenant = await prisma.apprenant.update({
            where: { id_apprenant: id },
            data: updateData,
        });
        
        return NextResponse.json({ message: "Apprenant modifié avec succès.", apprenant: updatedApprenant }, { status: 200 });
    } catch (error) {
        console.error('Error updating apprenant:', error);
        // Gérer le cas où l'enregistrement à mettre à jour n'est pas trouvé (Prisma P2025)
        if ((error as any).code === 'P2025') {
            return NextResponse.json({ message: "Apprenant non trouvé pour la mise à jour." }, { status: 404 });
        }
        return NextResponse.json({ error: 'La mise à jour de l\'apprenant a échoué.' }, { status: 500 });        
    };
};


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
};


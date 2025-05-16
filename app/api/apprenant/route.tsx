import { PrismaClient, Referentiel } from "@/generated/prisma";
import { NextResponse } from "next/server";
import { verifyJWT } from "@/lib/auth";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient(); // Instance de PrismaClient pour interagir avec la base de données

export async function GET(request: Request) {
    const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
    if(!isAuthorized) {
        return NextResponse.json({message: `Accès refusé !`}, {status: 401}); // Retourne une erreur 401 si non autorisé
    }

    try {
        // Récupère les paramètres de l'URL, par exemple : ?referentiel=apprenant
        const { searchParams } = new URL(request.url);

        // Récupère la valeur du paramètre "referentiel"
        const role = searchParams.get("referentiel");

        let apprenants

        if(role) {
            apprenants = await prisma.apprenant.findMany({
                where: { referentiel: Referentiel as any },
            });
        } else {
            // Sinon, récupère tous les apprenants
            apprenants = await prisma.apprenant.findMany();
        };
        // Retourne les utilisateurs trouvés avec un code 200
        return NextResponse.json( apprenants, { status: 200 } );

    }catch (error) {
        console.log(`Erreur lors de la recuperation des apprenant`)
        return NextResponse.json({ message: `Erreur lors de la recuperation des apprenant`}, {status: 500 });
    }
}


export async function POST(request:Request) {
    const isAuthorized = await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: `Accès refusé !` }, {status: 401});
    };

    try {
        const { nom, prenom, email, password, referentiel, photoProfil } = await request.json();

        if(!nom || !prenom || !email || !referentiel) {
            return NextResponse.json({ message: `Tous les champs sont obligatoires !` }, {status: 400} );
        };

        const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe

        const apprenant = await prisma.apprenant.create({
            data: {
                nom,
                prenom,
                email,
                password: hashedPassword,
                referentiel,
                photoProfil
            },
        });
        return NextResponse.json( { message: `Apprenant créé avec succè! `, apprenant }, { status: 201 } );

    } catch (error) {
        console.log(`Erreur lors de la création d'un apprenant`)
        return NextResponse.json({ message: `Erreur lors de la création d'un apprenant` }, {status: 500})
    };
};
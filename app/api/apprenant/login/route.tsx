import { PrismaClient } from "@/generated/prisma";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";


const prisma = new PrismaClient()

// login apprenant
export async function POST(request: NextRequest) {
    const JWT_SECRET = process.env.JWT_SECRET

    // Vérifier si JWT_SECRET est défini
    if (!JWT_SECRET) {
        console.error("La variable d'environnement JWT_SECRET n'est pas définie.");
        return NextResponse.json({ message: "Erreur de configuration serveur critique." }, { status: 500 });
    }
    try {
        const { email, password } = await request.json()
        if (!email || !password) {
            return NextResponse.json({ message: `Tous les champs sont obligatoires !` }, { status: 400 });
        }

        // Vérification de l'existence de l'apprenant
        const apprenant = await prisma.apprenant.findUnique({
            where: { email },
        });
        if (!apprenant) {
            return NextResponse.json({ message: `Identifiants incorrects !` }, { status: 401 });
        }
        // Vérification du mot de passe
        const isPasswordValid = await bcrypt.compare(password, apprenant.password);
        if (!isPasswordValid) {
            return NextResponse.json({ message: `Identifiants incorrects !` }, { status: 401 });
        }
        // Génération du token JWT
         const token = jwt.sign({ id: apprenant.id_apprenant }, JWT_SECRET, { expiresIn: '1d' });
        
        // Retourne le token et les informations de l'apprenant
        return NextResponse.json({ message: "Connexion réussie !" , token, id: apprenant.id_apprenant }, { status: 200 });

    } catch (error) {
        console.log(`Erreur lors de la connexion de l'apprenant`)
        return NextResponse.json({ message: `Erreur lors de la connexion de l'apprenant` }, {status: 500})
    }
}
import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { verifyJWT } from "@/lib/auth";
import bcrypt from "bcryptjs";

/// Lecture (GET)
///   (GET) http://localhost:3000/api/administrateur

const prisma = new PrismaClient();

// Cette fonction est appelée pour toute requête GET sur /api/admin
export async function GET(request: Request) {

  // Vérification de l'authentification
  const isAuthorized = await verifyJWT(request); // Vérifie l'authentification
  if (!isAuthorized) {
      return NextResponse.json({ error: "Accès non autorisé" }, { status: 401 }); // Retourne une erreur 401 si non autorisé
  }

  try {
    // Récupère tous les administrateurs de la base de données
    const utilisateurs = await prisma.administrateur.findMany();
    return NextResponse.json(utilisateurs, { status: 200 });

  } catch (error) {
    // Affiche l'erreur dans la console
    console.error(error)
    // Retourne une réponse d'erreur avec un message et un code 500
    return NextResponse.json({ error: "Failed to fetch admin" }, { status: 500 })
  }
}



// Création (POST)
// (POST) http://localhost:3000/api/utilisateurs



export async function POST(request: Request) {

    // Vérification de l'authentification 
    const isAuthorized = await verifyJWT(request);
    if(!isAuthorized) {
        return NextResponse.json({ message: `Accès refusé !` }, {status: 401});
    };
    
  try {
    const { nom, prenom, email, password} = await request.json()

    // On verfifie si les champs obligatoires ont ete remplis ou pas
    if (!nom || !prenom || !email || !password) {
      return NextResponse.json(
        { error: 'Champs requis manquants' },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10); // Hachage du mot de passe

    // Utiliser Prisma pour insérer un nouvel utilisateur dans la base de données
    const newutilisateurs = await prisma.administrateur.create({
      data: {
        nom,
        prenom,
        email,
        password: hashedPassword
      }
    });
    // Réponse avec l'objet créé
    return NextResponse.json({message: 'Utilisateur ajouté avec succès', newutilisateurs}, { status: 201 });

  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Erreur lors de la création' },
      { status: 500 }
    );
  }
}

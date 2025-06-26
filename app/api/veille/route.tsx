import { PrismaClient } from "@/generated/prisma"
import { verifyJWT } from "@/lib/auth"
import { NextResponse } from "next/server"

const prisma = new PrismaClient()


// GET /api/veille
// Récupérer toutes les veilles ou filtrer par référentiel
export async function GET(request: Request) {
  console.log("GET /api/veille - Début de la requête");

  // Vérifie l'authentification de l'utilisateur
  const isAuthorized = await verifyJWT(request);
  if (!isAuthorized) {
    console.log("GET /api/veille - Accès refusé");
    // Retourne une erreur 401 si non autorisé
    return NextResponse.json({ message: `Accès refusé !` }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    // Tente de récupérer le paramètre 'referentiel' de l'URL
    const referentiel = searchParams.get("referentiel");

    // Initialise un objet vide pour les conditions de filtre Prisma
    let whereClause = {};

    // Si un référentiel est fourni, ajoute-le à la clause where
    if (referentiel) {
      console.log(`GET /api/veille - Filtrage par référentiel: ${referentiel}`);
      whereClause = {
        referentiel: referentiel.toUpperCase(), // Convertit en majuscules pour correspondre à l'enum Prisma
      };
    } else {
      console.log("GET /api/veille - Récupération de toutes les veilles");
    }

    // Récupère les veilles de la base de données en appliquant le filtre si présent
    const veilles = await prisma.veille.findMany({
      where: whereClause,
    });

    console.log(`GET /api/veille - Veilles récupérées: ${veilles.length}`);
    // Retourne les veilles au format JSON
    return NextResponse.json(veilles);
  } catch (error) {
    console.error(`GET /api/veille - Erreur du serveur:`, error);
    // Gère les erreurs serveur et retourne une réponse 500
    return NextResponse.json({ message: `Erreur serveur` }, { status: 500 });
  }
}


// POST /api/veille
// Creer une veille
export async function POST(request: Request) {
  console.log("POST /api/veille - Début de la requête")

  const isAuthorized = await verifyJWT(request) // Vérifie l'authentification
  if (!isAuthorized) {
    console.log("POST /api/veille - Accès refusé")
    return NextResponse.json({ message: `Accès refusé !` }, { status: 401 }) // Retourne une erreur 401 si non autorisé
  }

  try {
    const body = await request.json()
    console.log("POST /api/veille - Données reçues:", body)

    const { titre, lien_docDonnee, lien_docRendu, date_fin, id_apprenant, id_formateur, referentiel } = body

    if (!titre || !lien_docDonnee || !date_fin || !id_formateur || !referentiel) {
      console.log("POST /api/veille - Champs manquants")
      return NextResponse.json({ message: `Tous les champs obligatoires sont requis` }, { status: 400 })
    }

    // Créer un objet Date à partir de la chaîne de date
    let dateFin
    try {
      // Accepter soit un objet Date ISO, soit une chaîne de date
      dateFin = new Date(date_fin)
      console.log("Date fin parsée:", dateFin)

      // Vérifier si la date est valide
      if (isNaN(dateFin.getTime())) {
        throw new Error("Date invalide")
      }
    } catch (error) {
      console.error("Erreur lors du parsing de la date:", error)
      return NextResponse.json({ message: `Format de date invalide` }, { status: 400 })
    }

    const veilleData = {
      titre,
      lien_docDonnee,
      lien_docRendu: lien_docRendu || null,
      date_creation: new Date(), // Toujours la date actuelle pour la création
      date_fin: dateFin,
      id_apprenant: id_apprenant ? Number(id_apprenant) : null,
      id_formateur: Number(id_formateur),
      referentiel: referentiel,
    }

    console.log("POST /api/veille - Données à enregistrer:", veilleData)

    const veille = await prisma.veille.create({
      data: veilleData,
    })

    console.log("POST /api/veille - Veille créée avec succès:", veille)
    return NextResponse.json({ message: "Veille créée avec succès", veille }, { status: 201 })
  } catch (error) {
    console.error(`POST /api/veille - Erreur du serveur:`, error)
    return NextResponse.json({ message: `Erreur serveur: ${error}` }, { status: 500 })
  }
}

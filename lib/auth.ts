import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Charger les variables d'environnement

const SECRET_KEY = process.env.JWT_SECRET 

// Fonction pour vérifier le JWT
export async function verifyJWT(request: Request): Promise<boolean> {
    // Il est crucial que la clé secrète soit définie.
    // Si elle n'est pas définie, la vérification du JWT ne peut pas fonctionner.
    if (!SECRET_KEY) {
        console.error("Erreur critique : NEXT_PUBLIC_JWT_SECRET n'est pas défini dans les variables d'environnement.");
        return false; // Impossible de vérifier sans clé secrète
    }

    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return false; // Pas de token ou format incorrect
    }

    const token = authHeader.split(" ")[1]; // Récupérer le token après "Bearer"
    try {
        jwt.verify(token, SECRET_KEY); // Maintenant, TypeScript sait que SECRET_KEY est une chaîne ici.
        return true; // Token valide
    } catch (error) {
        console.error("JWT verification failed:", error);
        return false
    }
}
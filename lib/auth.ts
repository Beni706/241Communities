import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config(); // Charger les variables d'environnement

const SECRET_KEY = process.env.JWT_SECRET || "default_secret_key"; // Utiliser la clé depuis .env

// Fonction pour vérifier le JWT
export async function verifyJWT(request: Request): Promise<boolean> {
    const authHeader = request.headers.get("Authorization");
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return false; // Pas de token ou format incorrect
    }

    const token = authHeader.split(" ")[1]; // Récupérer le token après "Bearer"
    try {
        jwt.verify(token, SECRET_KEY); // Vérifier le token avec la clé secrète
        return true; // Token valide
    } catch (error) {
        console.error("JWT verification failed:", error);
        return false; // Token invalide
    }
}
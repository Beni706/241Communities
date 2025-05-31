// Importation des utilitaires Next.js et Node.js
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import path from "path";

// Fonction qui gère la requête POST pour l'upload de fichier
export async function POST(request: Request) {
  // Récupère les données du formulaire envoyé (FormData)
  const formData = await request.formData();
  // Récupère le fichier envoyé sous le nom "file"
  const file = formData.get("file");
  // Vérifie qu'un fichier a bien été envoyé
  if (!file || typeof file === "string") {
    return NextResponse.json({ error: "Aucun fichier reçu" }, { status: 400 });
  }

  // Convertit le fichier en buffer pour pouvoir l'écrire sur le disque
  // @ts-ignore
  const buffer = Buffer.from(await file.arrayBuffer());
  // Définit le dossier de destination (public/uploads)
  const uploadDir = path.join(process.cwd(), "public", "uploads");
  // Définit le chemin complet du fichier à sauvegarder
  const filePath = path.join(uploadDir, file.name);

  try {
    // Écrit le fichier sur le disque dans le dossier uploads
    await writeFile(filePath, buffer);
    // Retourne l'URL d'accès au fichier uploadé
    return NextResponse.json({ url: `/uploads/${file.name}` });
  } catch (error) {
    // En cas d'erreur lors de l'écriture, retourne une erreur 500
    return NextResponse.json(
      { error: "Erreur lors de l'upload" },
      { status: 500 }
    );
  }
}

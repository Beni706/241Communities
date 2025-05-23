import fs from "fs"
import path from "path"
import { v4 as uuidv4 } from "uuid"

// Fonction pour s'assurer qu'un répertoire existe
export function ensureDirectoryExists(dirPath: string): void {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true })
  }
}

// Fonction pour générer un nom de fichier unique
export function generateUniqueFileName(originalName: string): string {
  const fileExtension = originalName.split(".").pop()
  return `${uuidv4()}.${fileExtension}`
}

// Fonction pour obtenir le chemin complet du répertoire d'uploads
export function getUploadsPath(subDir = ""): string {
  const publicDir = path.join(process.cwd(), "public")
  const uploadsDir = path.join(publicDir, "uploads", subDir)
  ensureDirectoryExists(uploadsDir)
  return uploadsDir
}

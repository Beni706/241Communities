/*
  Warnings:

  - Added the required column `referentiel` to the `veille` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_veille" (
    "id_veille" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "lien_docDonnee" TEXT NOT NULL,
    "lien_docRendu" TEXT,
    "date_creation" DATETIME NOT NULL,
    "date_fin" DATETIME NOT NULL,
    "referentiel" TEXT NOT NULL,
    "id_apprenant" INTEGER,
    "id_formateur" INTEGER NOT NULL,
    CONSTRAINT "veille_id_formateur_fkey" FOREIGN KEY ("id_formateur") REFERENCES "formateur" ("id_formateur") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "veille_id_apprenant_fkey" FOREIGN KEY ("id_apprenant") REFERENCES "apprenant" ("id_apprenant") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_veille" ("date_creation", "date_fin", "id_apprenant", "id_formateur", "id_veille", "lien_docDonnee", "lien_docRendu", "titre") SELECT "date_creation", "date_fin", "id_apprenant", "id_formateur", "id_veille", "lien_docDonnee", "lien_docRendu", "titre" FROM "veille";
DROP TABLE "veille";
ALTER TABLE "new_veille" RENAME TO "veille";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateTable
CREATE TABLE "formateur" (
    "id_formateur" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT 'Formateur',
    "referentiel" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "administrateur" (
    "id_administrateur" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "apprenant" (
    "id_apprenant" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '1234',
    "referentiel" TEXT NOT NULL,
    "photoProfil" TEXT
);

-- CreateTable
CREATE TABLE "suiviCours" (
    "id_suiviCours" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dateDebut" DATETIME NOT NULL,
    "dateFin" DATETIME,
    "pourcentage" DECIMAL NOT NULL,
    "id_apprenant" INTEGER NOT NULL,
    "id_cours" INTEGER NOT NULL,
    CONSTRAINT "suiviCours_id_apprenant_fkey" FOREIGN KEY ("id_apprenant") REFERENCES "apprenant" ("id_apprenant") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "suiviCours_id_cours_fkey" FOREIGN KEY ("id_cours") REFERENCES "cours" ("id_cours") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "cours" (
    "id_cours" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "categorie" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoCours" TEXT,
    "dateCreation" DATETIME NOT NULL,
    "id_formateur" INTEGER NOT NULL,
    CONSTRAINT "cours_id_formateur_fkey" FOREIGN KEY ("id_formateur") REFERENCES "formateur" ("id_formateur") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "chapitre" (
    "id_chapitre" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "numeroOrdre" INTEGER NOT NULL,
    "id_cours" INTEGER NOT NULL,
    CONSTRAINT "chapitre_id_cours_fkey" FOREIGN KEY ("id_cours") REFERENCES "cours" ("id_cours") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "lecon" (
    "id_lecon" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "contenuTextuel" TEXT,
    "contenuVideo" TEXT,
    "numeroOrdre" INTEGER NOT NULL,
    "id_chapitre" INTEGER NOT NULL,
    CONSTRAINT "lecon_id_chapitre_fkey" FOREIGN KEY ("id_chapitre") REFERENCES "chapitre" ("id_chapitre") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "veille" (
    "id_veille" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "titre" TEXT NOT NULL,
    "lien_docDonnee" TEXT NOT NULL,
    "lien_docRendu" TEXT,
    "date_creation" DATETIME NOT NULL,
    "date_fin" DATETIME NOT NULL,
    "id_apprenant" INTEGER,
    "id_formateur" INTEGER NOT NULL,
    CONSTRAINT "veille_id_formateur_fkey" FOREIGN KEY ("id_formateur") REFERENCES "formateur" ("id_formateur") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "veille_id_apprenant_fkey" FOREIGN KEY ("id_apprenant") REFERENCES "apprenant" ("id_apprenant") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "formateur_email_key" ON "formateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "administrateur_email_key" ON "administrateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "apprenant_email_key" ON "apprenant"("email");

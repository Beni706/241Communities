-- CreateEnum
CREATE TYPE "Referentiel" AS ENUM ('DEVELOPPEUR', 'DIGITAL_CREATOR', 'REFERENT_DIGITAL');

-- CreateTable
CREATE TABLE "formateur" (
    "id_formateur" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT 'Formateur',
    "referentiel" "Referentiel" NOT NULL,

    CONSTRAINT "formateur_pkey" PRIMARY KEY ("id_formateur")
);

-- CreateTable
CREATE TABLE "administrateur" (
    "id_administrateur" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "administrateur_pkey" PRIMARY KEY ("id_administrateur")
);

-- CreateTable
CREATE TABLE "apprenant" (
    "id_apprenant" SERIAL NOT NULL,
    "nom" TEXT NOT NULL,
    "prenom" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL DEFAULT '1234',
    "referentiel" "Referentiel" NOT NULL,
    "photoProfil" TEXT,

    CONSTRAINT "apprenant_pkey" PRIMARY KEY ("id_apprenant")
);

-- CreateTable
CREATE TABLE "suiviCours" (
    "id_suiviCours" SERIAL NOT NULL,
    "dateDebut" TIMESTAMP(3) NOT NULL,
    "dateFin" TIMESTAMP(3),
    "pourcentage" DECIMAL(65,30) NOT NULL,
    "id_apprenant" INTEGER NOT NULL,
    "id_cours" INTEGER NOT NULL,

    CONSTRAINT "suiviCours_pkey" PRIMARY KEY ("id_suiviCours")
);

-- CreateTable
CREATE TABLE "cours" (
    "id_cours" SERIAL NOT NULL,
    "categorie" TEXT NOT NULL,
    "titre" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "photoCours" TEXT,
    "dateCreation" TIMESTAMP(3) NOT NULL,
    "id_formateur" INTEGER NOT NULL,

    CONSTRAINT "cours_pkey" PRIMARY KEY ("id_cours")
);

-- CreateTable
CREATE TABLE "chapitre" (
    "id_chapitre" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "numeroOrdre" INTEGER NOT NULL,
    "id_cours" INTEGER NOT NULL,

    CONSTRAINT "chapitre_pkey" PRIMARY KEY ("id_chapitre")
);

-- CreateTable
CREATE TABLE "lecon" (
    "id_lecon" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "contenuTextuel" TEXT,
    "contenuVideo" TEXT,
    "numeroOrdre" INTEGER NOT NULL,
    "id_chapitre" INTEGER NOT NULL,

    CONSTRAINT "lecon_pkey" PRIMARY KEY ("id_lecon")
);

-- CreateTable
CREATE TABLE "veille" (
    "id_veille" SERIAL NOT NULL,
    "titre" TEXT NOT NULL,
    "lien_docDonnee" TEXT NOT NULL,
    "lien_docRendu" TEXT,
    "date_creation" TIMESTAMP(3) NOT NULL,
    "date_fin" TIMESTAMP(3) NOT NULL,
    "referentiel" "Referentiel" NOT NULL,
    "id_apprenant" INTEGER,
    "id_formateur" INTEGER NOT NULL,

    CONSTRAINT "veille_pkey" PRIMARY KEY ("id_veille")
);

-- CreateTable
CREATE TABLE "Soumission" (
    "id_soumission" SERIAL NOT NULL,
    "id_veille" INTEGER NOT NULL,
    "id_apprenant" INTEGER NOT NULL,
    "lien_soumission" TEXT NOT NULL,
    "date_soumission" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Soumission_pkey" PRIMARY KEY ("id_soumission")
);

-- CreateIndex
CREATE UNIQUE INDEX "formateur_email_key" ON "formateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "administrateur_email_key" ON "administrateur"("email");

-- CreateIndex
CREATE UNIQUE INDEX "apprenant_email_key" ON "apprenant"("email");

-- AddForeignKey
ALTER TABLE "suiviCours" ADD CONSTRAINT "suiviCours_id_apprenant_fkey" FOREIGN KEY ("id_apprenant") REFERENCES "apprenant"("id_apprenant") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "suiviCours" ADD CONSTRAINT "suiviCours_id_cours_fkey" FOREIGN KEY ("id_cours") REFERENCES "cours"("id_cours") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cours" ADD CONSTRAINT "cours_id_formateur_fkey" FOREIGN KEY ("id_formateur") REFERENCES "formateur"("id_formateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chapitre" ADD CONSTRAINT "chapitre_id_cours_fkey" FOREIGN KEY ("id_cours") REFERENCES "cours"("id_cours") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lecon" ADD CONSTRAINT "lecon_id_chapitre_fkey" FOREIGN KEY ("id_chapitre") REFERENCES "chapitre"("id_chapitre") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "veille" ADD CONSTRAINT "veille_id_formateur_fkey" FOREIGN KEY ("id_formateur") REFERENCES "formateur"("id_formateur") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "veille" ADD CONSTRAINT "veille_id_apprenant_fkey" FOREIGN KEY ("id_apprenant") REFERENCES "apprenant"("id_apprenant") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soumission" ADD CONSTRAINT "Soumission_id_veille_fkey" FOREIGN KEY ("id_veille") REFERENCES "veille"("id_veille") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Soumission" ADD CONSTRAINT "Soumission_id_apprenant_fkey" FOREIGN KEY ("id_apprenant") REFERENCES "apprenant"("id_apprenant") ON DELETE RESTRICT ON UPDATE CASCADE;

/**
 * @swagger
 * tags:
 *   name: Veille
 *   description: Gestion des veilles technologiques et des soumissions associées
 */

/**
 * @swagger
 * /api/veille:
 *   get:
 *     summary: Récupère toutes les veilles
 *     tags: [Veille]
 *     parameters:
 *       - in: query
 *         name: publishedOnly
 *         schema:
 *           type: boolean
 *         description: Filtrer uniquement les veilles publiées
 *     responses:
 *       200:
 *         description: Liste des veilles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Veille'
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée une nouvelle veille
 *     tags: [Veille]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VeilleInput'
 *     responses:
 *       201:
 *         description: Veille créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Veille'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/veille/{id}:
 *   get:
 *     summary: Récupère une veille spécifique
 *     tags: [Veille]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la veille
 *     responses:
 *       200:
 *         description: Détails de la veille
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/VeilleDetails'
 *       404:
 *         description: Veille non trouvée
 *       500:
 *         description: Erreur serveur
 *
 *   put:
 *     summary: Met à jour une veille
 *     tags: [Veille]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la veille
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/VeilleUpdate'
 *     responses:
 *       200:
 *         description: Veille mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Veille'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Veille non trouvée
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime une veille
 *     tags: [Veille]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la veille
 *     responses:
 *       200:
 *         description: Veille supprimée
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Veille non trouvée
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/veille/soumission/{veilleId}:
 *   get:
 *     summary: Récupère toutes les soumissions pour une veille
 *     tags: [Veille]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: veilleId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la veille
 *       - in: query
 *         name: status
 *         schema:
 *           type: string
 *           enum: [en_attente, validée, rejetée]
 *         description: Filtrer par statut
 *     responses:
 *       200:
 *         description: Liste des soumissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SoumissionDetails'
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Veille non trouvée
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Soumettre une réponse à une veille
 *     tags: [Veille]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: veilleId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la veille
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               fichier:
 *                 type: string
 *                 format: binary
 *                 description: Fichier PDF/ZIP de la soumission
 *               commentaires:
 *                 type: string
 *     responses:
 *       201:
 *         description: Soumission enregistrée
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Soumission'
 *       400:
 *         description: Fichier manquant ou invalide
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Veille non trouvée
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/soumission/apprenant/{apprenantId}:
 *   get:
 *     summary: Récupère les soumissions d'un apprenant
 *     tags: [Veille]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: apprenantId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'apprenant
 *     responses:
 *       200:
 *         description: Liste des soumissions
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/SoumissionDetails'
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Apprenant non trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/veille/soumission/{soumissionId}:
 *   put:
 *     summary: Modifie le statut d'une soumission
 *     tags: [Veille]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: soumissionId
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la soumission
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - statut
 *             properties:
 *               statut:
 *                 type: string
 *                 enum: [en_attente, validée, rejetée]
 *               feedback:
 *                 type: string
 *     responses:
 *       200:
 *         description: Statut mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Soumission'
 *       400:
 *         description: Statut invalide
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Soumission non trouvée
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Veille:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         categorie:
 *           type: string
 *         dateLimite:
 *           type: string
 *           format: date
 *         estPublie:
 *           type: boolean
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     VeilleDetails:
 *       allOf:
 *         - $ref: '#/components/schemas/Veille'
 *         - type: object
 *           properties:
 *             soumissions:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Soumission'
 *
 *     VeilleInput:
 *       type: object
 *       required:
 *         - titre
 *         - description
 *         - categorie
 *       properties:
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         categorie:
 *           type: string
 *         dateLimite:
 *           type: string
 *           format: date
 *         estPublie:
 *           type: boolean
 *
 *     VeilleUpdate:
 *       type: object
 *       properties:
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         categorie:
 *           type: string
 *         dateLimite:
 *           type: string
 *           format: date
 *         estPublie:
 *           type: boolean
 *
 *     Soumission:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         veilleId:
 *           type: string
 *         apprenantId:
 *           type: string
 *         dateSoumission:
 *           type: string
 *           format: date-time
 *         statut:
 *           type: string
 *           enum: [en_attente, validée, rejetée]
 *         fichierUrl:
 *           type: string
 *         commentaires:
 *           type: string
 *         feedback:
 *           type: string
 *
 *     SoumissionDetails:
 *       allOf:
 *         - $ref: '#/components/schemas/Soumission'
 *         - type: object
 *           properties:
 *             veille:
 *               $ref: '#/components/schemas/Veille'
 *             apprenant:
 *               $ref: '#/components/schemas/Apprenant'
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
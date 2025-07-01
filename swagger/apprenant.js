/**
 * @swagger
 * tags:
 *   name: Apprenant
 *   description: Gestion des apprenants
 */

/**
 * @swagger
 * /api/apprenant:
 *   get:
 *     summary: Récupère tous les apprenants
 *     tags: [Apprenant]
 *     responses:
 *       200:
 *         description: Liste des apprenants
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Apprenant'
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouvel apprenant
 *     tags: [Apprenant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ApprenantInput'
 *     responses:
 *       201:
 *         description: Apprenant créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Apprenant'
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/apprenant/login:
 *   post:
 *     summary: Connexion d'un apprenant
 *     tags: [Apprenant]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: apprenant@example.com
 *               password:
 *                 type: string
 *                 example: "MotDePasse123!"
 *     responses:
 *       200:
 *         description: Connexion réussie
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 *                   description: JWT d'authentification
 *                 apprenant:
 *                   $ref: '#/components/schemas/Apprenant'
 *       401:
 *         description: Identifiants invalides
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/apprenant/{id}:
 *   get:
 *     summary: Récupère un apprenant par son ID
 *     tags: [Apprenant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'apprenant
 *     responses:
 *       200:
 *         description: Détails de l'apprenant
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Apprenant'
 *       404:
 *         description: Apprenant non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   put:
 *     summary: Met à jour un apprenant
 *     tags: [Apprenant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'apprenant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ApprenantUpdate'
 *     responses:
 *       200:
 *         description: Apprenant mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Apprenant'
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Apprenant non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime un apprenant
 *     tags: [Apprenant]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de l'apprenant
 *     responses:
 *       200:
 *         description: Apprenant supprimé
 *       404:
 *         description: Apprenant non trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Apprenant:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-généré
 *         nom:
 *           type: string
 *         prenom:
 *           type: string
 *         email:
 *           type: string
 *         niveau:
 *           type: string
 *         progression:
 *           type: number
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     ApprenantInput:
 *       type: object
 *       required:
 *         - nom
 *         - email
 *         - password
 *       properties:
 *         nom:
 *           type: string
 *         prenom:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         niveau:
 *           type: string
 *           enum: [débutant, intermédiaire, avancé]
 *
 *     ApprenantUpdate:
 *       type: object
 *       properties:
 *         nom:
 *           type: string
 *         prenom:
 *           type: string
 *         email:
 *           type: string
 *         password:
 *           type: string
 *         niveau:
 *           type: string
 *           enum: [débutant, intermédiaire, avancé]
 *         progression:
 *           type: number
 *           minimum: 0
 *           maximum: 100
 */
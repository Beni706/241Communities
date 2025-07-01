/**
 * @swagger
 * tags:
 *   name: Formateur
 *   description: Gestion des formateurs
 */

/**
 * @swagger
 * /api/formateur:
 *   get:
 *     summary: Récupère tous les formateurs
 *     tags: [Formateur]
 *     responses:
 *       200:
 *         description: Liste des formateurs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Formateur'
 *       401:
 *         description: Non autorisé
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouveau formateur
 *     tags: [Formateur]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormateurInput'
 *     responses:
 *       201:
 *         description: Formateur créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formateur'
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/formateur/login:
 *   post:
 *     summary: Connexion d'un formateur
 *     tags: [Formateur]
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
 *                 format: email
 *                 example: formateur@example.com
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
 *                 formateur:
 *                   $ref: '#/components/schemas/Formateur'
 *       401:
 *         description: Identifiants invalides
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/formateur/{id}:
 *   get:
 *     summary: Récupère un formateur spécifique
 *     tags: [Formateur]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du formateur
 *     responses:
 *       200:
 *         description: Détails du formateur
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/FormateurDetails'
 *       404:
 *         description: Formateur non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   put:
 *     summary: Met à jour un formateur
 *     tags: [Formateur]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du formateur
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/FormateurUpdate'
 *     responses:
 *       200:
 *         description: Formateur mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Formateur'
 *       400:
 *         description: Données invalides
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Formateur non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime un formateur
 *     tags: [Formateur]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du formateur
 *     responses:
 *       200:
 *         description: Formateur supprimé
 *       401:
 *         description: Non autorisé
 *       404:
 *         description: Formateur non trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Formateur:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         nom:
 *           type: string
 *         prenom:
 *           type: string
 *         email:
 *           type: string
 *         specialite:
 *           type: string
 *         bio:
 *           type: string
 *         photoUrl:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     FormateurDetails:
 *       allOf:
 *         - $ref: '#/components/schemas/Formateur'
 *         - type: object
 *           properties:
 *             cours:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cours'
 *
 *     FormateurInput:
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
 *         specialite:
 *           type: string
 *         bio:
 *           type: string
 *         photoUrl:
 *           type: string
 *
 *     FormateurUpdate:
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
 *         specialite:
 *           type: string
 *         bio:
 *           type: string
 *         photoUrl:
 *           type: string
 *
 *     Cours:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */
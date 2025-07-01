/**
 * @swagger
 * tags:
 *   name: Cours
 *   description: Gestion des cours
 */

/**
 * @swagger
 * /api/cours:
 *   get:
 *     summary: Récupère tous les cours
 *     tags: [Cours]
 *     responses:
 *       200:
 *         description: Liste des cours
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/CoursDetails'
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouveau cours
 *     tags: [Cours]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CoursInput'
 *     responses:
 *       201:
 *         description: Cours créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cours'
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/cours/{id}:
 *   get:
 *     summary: Récupère un cours spécifique avec ses chapitres
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du cours
 *     responses:
 *       200:
 *         description: Détails du cours
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/CoursDetails'
 *       404:
 *         description: Cours non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   put:
 *     summary: Met à jour un cours
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du cours
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CoursUpdate'
 *     responses:
 *       200:
 *         description: Cours mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Cours'
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Cours non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime un cours
 *     tags: [Cours]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du cours
 *     responses:
 *       200:
 *         description: Cours supprimé
 *       404:
 *         description: Cours non trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Cours:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         formateurId:
 *           type: string
 *         imageUrl:
 *           type: string
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     CoursDetails:
 *       allOf:
 *         - $ref: '#/components/schemas/Cours'
 *         - type: object
 *           properties:
 *             chapitres:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Chapitre'
 *             formateur:
 *               $ref: '#/components/schemas/Formateur'
 *
 *     CoursInput:
 *       type: object
 *       required:
 *         - titre
 *         - formateurId
 *       properties:
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         formateurId:
 *           type: string
 *         imageUrl:
 *           type: string
 *
 *     CoursUpdate:
 *       type: object
 *       properties:
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         imageUrl:
 *           type: string
 */
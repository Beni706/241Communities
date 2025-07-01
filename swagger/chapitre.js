/**
 * @swagger
 * tags:
 *   name: Chapitre
 *   description: Gestion des chapitres de cours
 */

/**
 * @swagger
 * /api/chapitre:
 *   get:
 *     summary: Récupère tous les chapitres avec leurs leçons
 *     tags: [Chapitre]
 *     responses:
 *       200:
 *         description: Liste des chapitres
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/ChapitreDetails'
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée un nouveau chapitre
 *     tags: [Chapitre]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChapitreInput'
 *     responses:
 *       201:
 *         description: Chapitre créé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chapitre'
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/chapitre/{id}:
 *   get:
 *     summary: Récupère un chapitre spécifique avec ses leçons
 *     tags: [Chapitre]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du chapitre
 *     responses:
 *       200:
 *         description: Détails du chapitre
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/ChapitreDetails'
 *       404:
 *         description: Chapitre non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   put:
 *     summary: Met à jour un chapitre
 *     tags: [Chapitre]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du chapitre
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ChapitreUpdate'
 *     responses:
 *       200:
 *         description: Chapitre mis à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Chapitre'
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Chapitre non trouvé
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime un chapitre
 *     tags: [Chapitre]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID du chapitre
 *     responses:
 *       200:
 *         description: Chapitre supprimé
 *       404:
 *         description: Chapitre non trouvé
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Chapitre:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID auto-généré
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         coursId:
 *           type: string
 *         ordre:
 *           type: number
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *
 *     ChapitreDetails:
 *       allOf:
 *         - $ref: '#/components/schemas/Chapitre'
 *         - type: object
 *           properties:
 *             lecons:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Lecon'
 *
 *     ChapitreInput:
 *       type: object
 *       required:
 *         - titre
 *         - coursId
 *       properties:
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         coursId:
 *           type: string
 *         ordre:
 *           type: number
 *
 *     ChapitreUpdate:
 *       type: object
 *       properties:
 *         titre:
 *           type: string
 *         description:
 *           type: string
 *         ordre:
 *           type: number
 *
 *     Lecon:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *         titre:
 *           type: string
 *         contenu:
 *           type: string
 *         chapitreId:
 *           type: string
 *         duree:
 *           type: number
 *         ordre:
 *           type: number
 */
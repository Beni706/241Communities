/**
 * @swagger
 * tags:
 *   name: Leçon
 *   description: Gestion des leçons
 */

/**
 * @swagger
 * /api/lecon:
 *   get:
 *     summary: Récupère toutes les leçons
 *     tags: [Leçon]
 *     responses:
 *       200:
 *         description: Liste des leçons
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LeconDetails'
 *       500:
 *         description: Erreur serveur
 *
 *   post:
 *     summary: Crée une nouvelle leçon
 *     tags: [Leçon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LeconInput'
 *     responses:
 *       201:
 *         description: Leçon créée avec succès
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lecon'
 *       400:
 *         description: Données invalides
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * /api/lecon/{id}:
 *   get:
 *     summary: Récupère une leçon spécifique
 *     tags: [Leçon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la leçon
 *     responses:
 *       200:
 *         description: Détails de la leçon
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LeconDetails'
 *       404:
 *         description: Leçon non trouvée
 *       500:
 *         description: Erreur serveur
 *
 *   put:
 *     summary: Met à jour une leçon
 *     tags: [Leçon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la leçon
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LeconUpdate'
 *     responses:
 *       200:
 *         description: Leçon mise à jour
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Lecon'
 *       400:
 *         description: Données invalides
 *       404:
 *         description: Leçon non trouvée
 *       500:
 *         description: Erreur serveur
 *
 *   delete:
 *     summary: Supprime une leçon
 *     tags: [Leçon]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID de la leçon
 *     responses:
 *       200:
 *         description: Leçon supprimée
 *       404:
 *         description: Leçon non trouvée
 *       500:
 *         description: Erreur serveur
 */

/**
 * @swagger
 * components:
 *   schemas:
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
 *         videoUrl:
 *           type: string
 *
 *     LeconDetails:
 *       allOf:
 *         - $ref: '#/components/schemas/Lecon'
 *         - type: object
 *           properties:
 *             chapitre:
 *               $ref: '#/components/schemas/Chapitre'
 *
 *     LeconInput:
 *       type: object
 *       required:
 *         - titre
 *         - chapitreId
 *       properties:
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
 *         videoUrl:
 *           type: string
 *
 *     LeconUpdate:
 *       type: object
 *       properties:
 *         titre:
 *           type: string
 *         contenu:
 *           type: string
 *         duree:
 *           type: number
 *         ordre:
 *           type: number
 *         videoUrl:
 *           type: string
 */
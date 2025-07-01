/**
 * @swagger
 * tags:
 *   name: Upload
 *   description: Téléchargement de fichiers
 */

/**
 * @swagger
 * /api/upload:
 *   post:
 *     summary: Télécharge un fichier
 *     tags: [Upload]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *                 description: Fichier à uploader
 *     responses:
 *       200:
 *         description: Fichier téléchargé avec succès
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 url: { type: string, description: URL du fichier téléchargé }
 *       400: { description: Aucun fichier fourni }
 *       500: { description: Erreur de téléchargement }
 */
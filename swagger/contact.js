/**
 * @swagger
 * tags:
 *   name: Contact
 *   description: Gestion des contacts
 */

/**
 * @swagger
 * /api/contact:
 *   post:
 *     summary: Envoie un message de contact
 *     tags: [Contact]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema: { $ref: '#/components/schemas/ContactInput' }
 *     responses:
 *       200: { description: Message envoyé avec succès }
 *       400: { description: Données invalides }
 *       500: { description: Erreur serveur }
 */
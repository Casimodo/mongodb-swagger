import express from 'express';
import { getHomes, addHome, getImage } from '../controllers/homeController.js';
import { verifyApiKey } from '../middlewares/apiKeyMiddleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Homes
 *   description: API pour gérer les maisons
 */

/**
 * @swagger
 * /api/homes:
 *   get:
 *     summary: Obtenir une liste de maisons
 *     tags: [Homes]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: query
 *         name: homeId
 *         schema:
 *           type: string
 *         description: Filtrer par homeId
 *     responses:
 *       200:
 *         description: Liste des maisons
 */
router.get('/', verifyApiKey, getHomes);

/**
 * @swagger
 * /api/homes:
 *   post:
 *     summary: Ajouter une maison
 *     tags: [Homes]
 *     security:
 *       - ApiKeyAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nom
 *               - localisation
 *               - prix
 *             properties:
 *               nom:
 *                 type: string
 *               localisation:
 *                 type: string
 *               prix:
 *                 type: number
 *     responses:
 *       201:
 *         description: Maison ajoutée
 */
router.post('/', verifyApiKey, addHome);

/**
 * @swagger
 * /api/homes/image/{imageName}:
 *   get:
 *     summary: Récupérer une image de maison
 *     tags: [Homes]
 *     security:
 *       - ApiKeyAuth: []
 *     parameters:
 *       - in: path
 *         name: imageName
 *         required: true
 *         schema:
 *           type: string
 *         description: Nom du fichier image
 *     responses:
 *       200:
 *         description: Image trouvée
 *       404:
 *         description: Image non trouvée
 */
router.get('/image/:imageName', verifyApiKey, getImage);

export default router;

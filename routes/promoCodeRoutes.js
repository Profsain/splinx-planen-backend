const express = require('express');
const router = express.Router();
const promoCodeController = require('../controllers/promoCodeController');
const authenticationToken = require("../utils/validation"); // Middleware for authentication

/**
 * @swagger
 * components:
 *   schemas:
 *     PromoCode:
 *       type: object
 *       required:
 *         - promoCode
 *         - promoName
 *         - discountPercent
 *         - startDate
 *         - endDate
 *       properties:
 *         promoID:
 *           type: string
 *           description: Autogenerated unique 10-digit promo ID
 *         promoCode:
 *           type: string
 *           description: Unique promo code
 *         promoName:
 *           type: string
 *           description: Name of the promo
 *         discountPercent:
 *           type: number
 *           description: Discount percentage
 *         dateCreated:
 *           type: string
 *           format: date
 *           description: Date when the promo was created
 *         startDate:
 *           type: string
 *           format: date
 *           description: Start date of the promo
 *         endDate:
 *           type: string
 *           format: date
 *           description: End date of the promo
 *         status:
 *           type: string
 *           enum: [active, expired, paused]
 *           description: Status of the promo code
 */

/**
 * @swagger
 * /promos/create:
 *   post:
 *     summary: Create a new promo code
 *     tags: [PromoCodes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PromoCode'
 *     responses:
 *       201:
 *         description: Promo code created successfully
 *       500:
 *         description: Server error
 */
router.post('/create', authenticationToken, promoCodeController.createPromoCode);

/**
 * @swagger
 * /promos:
 *   get:
 *     summary: Fetch all promo codes
 *     tags: [PromoCodes]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of all promo codes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/PromoCode'
 *       500:
 *         description: Server error
 */
router.get('/', authenticationToken, promoCodeController.getAllPromoCodes);

/**
 * @swagger
 * /promos/{id}:
 *   get:
 *     summary: Fetch a single promo code by ID
 *     tags: [PromoCodes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the promo code
 *     responses:
 *       200:
 *         description: Promo code data
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/PromoCode'
 *       404:
 *         description: Promo code not found
 *       500:
 *         description: Server error
 */
router.get('/:id', authenticationToken, promoCodeController.getPromoCodeById);

/**
 * @swagger
 * /promos/{id}:
 *   put:
 *     summary: Update a promo code
 *     tags: [PromoCodes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the promo code to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PromoCode'
 *     responses:
 *       200:
 *         description: Promo code updated successfully
 *       404:
 *         description: Promo code not found
 *       500:
 *         description: Server error
 */
router.put('/:id', authenticationToken, promoCodeController.updatePromoCode);

/**
 * @swagger
 * /promos/{id}:
 *   delete:
 *     summary: Delete a promo code
 *     tags: [PromoCodes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the promo code to delete
 *     responses:
 *       200:
 *         description: Promo code deleted successfully
 *       404:
 *         description: Promo code not found
 *       500:
 *         description: Server error
 */
router.delete('/:id', authenticationToken, promoCodeController.deletePromoCode);

/**
 * @swagger
 * /promos/{id}/pause:
 *   post:
 *     summary: Pause a promo code
 *     tags: [PromoCodes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the promo code to pause
 *     responses:
 *       200:
 *         description: Promo code paused successfully
 *       404:
 *         description: Promo code not found
 *       500:
 *         description: Server error
 */
router.post('/:id/pause', authenticationToken, promoCodeController.pausePromoCode);

/**
 * @swagger
 * /promos/{id}/restart:
 *   post:
 *     summary: Restart a promo code
 *     tags: [PromoCodes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the promo code to restart
 *     responses:
 *       200:
 *         description: Promo code restarted successfully
 *       404:
 *         description: Promo code not found
 *       500:
 *         description: Server error
 */
router.post('/:id/restart', authenticationToken, promoCodeController.restartPromoCode);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  createCart,
  getAllCarts,
  getCartById,
  updateCart,
  deleteCart
} = require('../controllers/cartController');

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Create a new cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - examId
 *               - quantity
 *             properties:
 *               userId:
 *                 type: string
 *               examId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Cart created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createCart);

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Get all carts
 *     tags: [Cart]
 *     responses:
 *       200:
 *         description: Carts fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllCarts);

/**
 * @swagger
 * /cart/{id}:
 *   get:
 *     summary: Get cart by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart fetched successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getCartById);

/**
 * @swagger
 * /cart/{id}:
 *   put:
 *     summary: Update cart by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Cart ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: string
 *               examId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Cart updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Cart not found
 */
router.put('/:id', updateCart);

/**
 * @swagger
 * /cart/{id}:
 *   delete:
 *     summary: Delete cart by ID
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Cart ID
 *     responses:
 *       200:
 *         description: Cart deleted successfully
 *       404:
 *         description: Cart not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteCart);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  createCartContainsExams,
  getAllCartContainsExams,
  getCartContainsExamsById,
  updateCartContainsExams,
  deleteCartContainsExams
} = require('../controllers/cartContainsExamsController');

/**
 * @swagger
 * /cartContainsExams:
 *   post:
 *     summary: Add an exam to the cart
 *     tags: [CartContainsExams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cartId
 *               - examId
 *               - quantity
 *             properties:
 *               cartId:
 *                 type: string
 *               examId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       201:
 *         description: Exam added to cart successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createCartContainsExams);

/**
 * @swagger
 * /cartContainsExams:
 *   get:
 *     summary: Get all records of exams in carts
 *     tags: [CartContainsExams]
 *     responses:
 *       200:
 *         description: Records fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllCartContainsExams);

/**
 * @swagger
 * /cartContainsExams/{id}:
 *   get:
 *     summary: Get a record by ID
 *     tags: [CartContainsExams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Record ID
 *     responses:
 *       200:
 *         description: Record fetched successfully
 *       404:
 *         description: Record not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getCartContainsExamsById);

/**
 * @swagger
 * /cartContainsExams/{id}:
 *   put:
 *     summary: Update a record by ID
 *     tags: [CartContainsExams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Record ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               cartId:
 *                 type: string
 *               examId:
 *                 type: string
 *               quantity:
 *                 type: number
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Record not found
 */
router.put('/:id', updateCartContainsExams);

/**
 * @swagger
 * /cartContainsExams/{id}:
 *   delete:
 *     summary: Delete a record by ID
 *     tags: [CartContainsExams]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Record ID
 *     responses:
 *       200:
 *         description: Record deleted successfully
 *       404:
 *         description: Record not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteCartContainsExams);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  createTransaction,
  getAllTransactions,
  getTransactionById,
  updateTransaction,
  deleteTransaction
} = require('../controllers/transactionController');

/**
 * @swagger
 * /transaction:
 *   post:
 *     summary: Create a new transaction
 *     tags: [Transaction]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - amount
 *               - currency
 *             properties:
 *               userId:
 *                 type: string
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, completed, failed]
 *     responses:
 *       201:
 *         description: Transaction created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createTransaction);

/**
 * @swagger
 * /transaction:
 *   get:
 *     summary: Get all transactions
 *     tags: [Transaction]
 *     responses:
 *       200:
 *         description: Transactions fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllTransactions);

/**
 * @swagger
 * /transaction/{id}:
 *   get:
 *     summary: Get transaction by ID
 *     tags: [Transaction]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Transaction ID
 *     responses:
 *       200:
 *         description: Transaction fetched successfully
 *       404:
 *         description: Transaction not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getTransactionById);

/**
 * @swagger
 * /transaction/{id}:
 *   put:
 *     summary: Update transaction by ID
 *     tags: [Transaction]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Transaction ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               amount:
 *                 type: number
 *               currency:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, completed, failed]
 *     responses:
 *       200:
 *         description: Transaction updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Transaction not found
 */
router.put('/:id', updateTransaction);

/**
 * @swagger
 * /transaction/{id}:
 *   delete:
 *     summary: Delete transaction by ID
 *     tags: [Transaction]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Transaction ID
 *     responses:
 *       200:
 *         description: Transaction deleted successfully
 *       404:
 *         description: Transaction not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteTransaction);

module.exports = router;

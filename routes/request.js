const express = require('express');
const router = express.Router();
const {
  createRequest,
  getAllRequests,
  getRequestById,
  updateRequest,
  deleteRequest
} = require('../controllers/requestController');

/**
 * @swagger
 * /request:
 *   post:
 *     summary: Create a new request
 *     tags: [Request]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - userId
 *               - examId
 *             properties:
 *               userId:
 *                 type: string
 *               examId:
 *                 type: string
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *               assignedTo:
 *                 type: string
 *     responses:
 *       201:
 *         description: Request created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createRequest);

/**
 * @swagger
 * /request:
 *   get:
 *     summary: Get all requests
 *     tags: [Request]
 *     responses:
 *       200:
 *         description: Requests fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllRequests);

/**
 * @swagger
 * /request/{id}:
 *   get:
 *     summary: Get request by ID
 *     tags: [Request]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Request ID
 *     responses:
 *       200:
 *         description: Request fetched successfully
 *       404:
 *         description: Request not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getRequestById);

/**
 * @swagger
 * /request/{id}:
 *   put:
 *     summary: Update request by ID
 *     tags: [Request]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Request ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, in_progress, completed]
 *               assignedTo:
 *                 type: string
 *     responses:
 *       200:
 *         description: Request updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Request not found
 */
router.put('/:id', updateRequest);

/**
 * @swagger
 * /request/{id}:
 *   delete:
 *     summary: Delete request by ID
 *     tags: [Request]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Request ID
 *     responses:
 *       200:
 *         description: Request deleted successfully
 *       404:
 *         description: Request not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteRequest);

module.exports = router;

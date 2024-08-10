const express = require('express');
const router = express.Router();
const {
  createExam,
  getAllExams,
  getExamById,
  updateExam,
  deleteExam
} = require('../controllers/examController');

/**
 * @swagger
 * /exam:
 *   post:
 *     summary: Create a new exam
 *     tags: [Exam]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - numQuestions
 *               - fee
 *               - date
 *               - time
 *             properties:
 *               name:
 *                 type: string
 *               numQuestions:
 *                 type: number
 *               fee:
 *                 type: number
 *               discount:
 *                 type: number
 *               date:
 *                 type: string
 *                 format: date
 *               time:
 *                 type: string
 *     responses:
 *       201:
 *         description: Exam created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createExam);

/**
 * @swagger
 * /exam:
 *   get:
 *     summary: Get all exams
 *     tags: [Exam]
 *     responses:
 *       200:
 *         description: Exams fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllExams);

/**
 * @swagger
 * /exam/{id}:
 *   get:
 *     summary: Get exam by ID
 *     tags: [Exam]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Exam ID
 *     responses:
 *       200:
 *         description: Exam fetched successfully
 *       404:
 *         description: Exam not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getExamById);

/**
 * @swagger
 * /exam/{id}:
 *   put:
 *     summary: Update exam by ID
 *     tags: [Exam]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Exam ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               numQuestions:
 *                 type: number
 *               fee:
 *                 type: number
 *               discount:
 *                 type: number
 *               date:
 *                 type: string
 *                 format: date
 *               time:
 *                 type: string
 *     responses:
 *       200:
 *         description: Exam updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Exam not found
 */
router.put('/:id', updateExam);

/**
 * @swagger
 * /exam/{id}:
 *   delete:
 *     summary: Delete exam by ID
 *     tags: [Exam]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Exam ID
 *     responses:
 *       200:
 *         description: Exam deleted successfully
 *       404:
 *         description: Exam not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteExam);

module.exports = router;

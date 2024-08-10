const express = require('express');
const router = express.Router();
const {
  createQuestion,
  getAllQuestions,
  getQuestionById,
  updateQuestion,
  deleteQuestion
} = require('../controllers/questionController');

/**
 * @swagger
 * /question:
 *   post:
 *     summary: Create a new question
 *     tags: [Question]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - examId
 *               - type
 *               - questionText
 *               - correctAnswer
 *               - explanation
 *             properties:
 *               examId:
 *                 type: string
 *               type:
 *                 type: string
 *                 enum: [multiple choice, true/false]
 *               questionText:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               correctAnswer:
 *                 type: string
 *               explanation:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       201:
 *         description: Question created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createQuestion);

/**
 * @swagger
 * /question:
 *   get:
 *     summary: Get all questions
 *     tags: [Question]
 *     responses:
 *       200:
 *         description: Questions fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllQuestions);

/**
 * @swagger
 * /question/{id}:
 *   get:
 *     summary: Get question by ID
 *     tags: [Question]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Question ID
 *     responses:
 *       200:
 *         description: Question fetched successfully
 *       404:
 *         description: Question not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getQuestionById);

/**
 * @swagger
 * /question/{id}:
 *   put:
 *     summary: Update question by ID
 *     tags: [Question]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Question ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               type:
 *                 type: string
 *                 enum: [multiple choice, true/false]
 *               questionText:
 *                 type: string
 *               options:
 *                 type: array
 *                 items:
 *                   type: string
 *               correctAnswer:
 *                 type: string
 *               explanation:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *     responses:
 *       200:
 *         description: Question updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Question not found
 */
router.put('/:id', updateQuestion);

/**
 * @swagger
 * /question/{id}:
 *   delete:
 *     summary: Delete question by ID
 *     tags: [Question]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Question ID
 *     responses:
 *       200:
 *         description: Question deleted successfully
 *       404:
 *         description: Question not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteQuestion);

module.exports = router;

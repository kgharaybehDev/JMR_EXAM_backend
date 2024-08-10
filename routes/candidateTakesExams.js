const express = require('express');
const router = express.Router();
const {
  createCandidateTakesExams,
  getAllCandidateTakesExams,
  getCandidateTakesExamsById,
  updateCandidateTakesExams,
  deleteCandidateTakesExams
} = require('../controllers/candidateTakesExamsController');

/**
 * @swagger
 * /candidateTakesExams:
 *   post:
 *     summary: Create a new record of a candidate taking an exam
 *     tags: [CandidateTakesExams]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - candidateId
 *               - examId
 *               - startTime
 *               - endTime
 *               - score
 *             properties:
 *               candidateId:
 *                 type: string
 *               examId:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               score:
 *                 type: number
 *     responses:
 *       201:
 *         description: Record created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createCandidateTakesExams);

/**
 * @swagger
 * /candidateTakesExams:
 *   get:
 *     summary: Get all records of candidates taking exams
 *     tags: [CandidateTakesExams]
 *     responses:
 *       200:
 *         description: Records fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllCandidateTakesExams);

/**
 * @swagger
 * /candidateTakesExams/{id}:
 *   get:
 *     summary: Get a record by ID
 *     tags: [CandidateTakesExams]
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
router.get('/:id', getCandidateTakesExamsById);

/**
 * @swagger
 * /candidateTakesExams/{id}:
 *   put:
 *     summary: Update a record by ID
 *     tags: [CandidateTakesExams]
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
 *               candidateId:
 *                 type: string
 *               examId:
 *                 type: string
 *               startTime:
 *                 type: string
 *                 format: date-time
 *               endTime:
 *                 type: string
 *                 format: date-time
 *               score:
 *                 type: number
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Record not found
 */
router.put('/:id', updateCandidateTakesExams);

/**
 * @swagger
 * /candidateTakesExams/{id}:
 *   delete:
 *     summary: Delete a record by ID
 *     tags: [CandidateTakesExams]
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
router.delete('/:id', deleteCandidateTakesExams);

module.exports = router;

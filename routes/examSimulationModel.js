const express = require('express');
const router = express.Router();
const {
  createExamSimulationModel,
  getAllExamSimulationModels,
  getExamSimulationModelById,
  updateExamSimulationModel,
  deleteExamSimulationModel
} = require('../controllers/examSimulationModelController');

/**
 * @swagger
 * /examSimulationModel:
 *   post:
 *     summary: Create a new exam simulation model
 *     tags: [ExamSimulationModel]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - duration
 *               - price
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               duration:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       201:
 *         description: Exam simulation model created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createExamSimulationModel);

/**
 * @swagger
 * /examSimulationModel:
 *   get:
 *     summary: Get all exam simulation models
 *     tags: [ExamSimulationModel]
 *     responses:
 *       200:
 *         description: Exam simulation models fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllExamSimulationModels);

/**
 * @swagger
 * /examSimulationModel/{id}:
 *   get:
 *     summary: Get exam simulation model by ID
 *     tags: [ExamSimulationModel]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Exam simulation model ID
 *     responses:
 *       200:
 *         description: Exam simulation model fetched successfully
 *       404:
 *         description: Exam simulation model not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getExamSimulationModelById);

/**
 * @swagger
 * /examSimulationModel/{id}:
 *   put:
 *     summary: Update exam simulation model by ID
 *     tags: [ExamSimulationModel]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Exam simulation model ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               duration:
 *                 type: number
 *               price:
 *                 type: number
 *     responses:
 *       200:
 *         description: Exam simulation model updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Exam simulation model not found
 */
router.put('/:id', updateExamSimulationModel);

/**
 * @swagger
 * /examSimulationModel/{id}:
 *   delete:
 *     summary: Delete exam simulation model by ID
 *     tags: [ExamSimulationModel]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Exam simulation model ID
 *     responses:
 *       200:
 *         description: Exam simulation model deleted successfully
 *       404:
 *         description: Exam simulation model not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteExamSimulationModel);

module.exports = router;

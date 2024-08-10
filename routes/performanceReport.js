const express = require('express');
const router = express.Router();
const {
  createPerformanceReport,
  getAllPerformanceReports,
  getPerformanceReportById,
  updatePerformanceReport,
  deletePerformanceReport
} = require('../controllers/performanceReportController');

/**
 * @swagger
 * /performanceReport:
 *   post:
 *     summary: Create a new performance report
 *     tags: [PerformanceReport]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - candidateId
 *               - examId
 *               - score
 *               - timeTaken
 *               - details
 *             properties:
 *               candidateId:
 *                 type: string
 *               examId:
 *                 type: string
 *               score:
 *                 type: number
 *               timeTaken:
 *                 type: number
 *               details:
 *                 type: string
 *     responses:
 *       201:
 *         description: Performance report created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createPerformanceReport);

/**
 * @swagger
 * /performanceReport:
 *   get:
 *     summary: Get all performance reports
 *     tags: [PerformanceReport]
 *     responses:
 *       200:
 *         description: Performance reports fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllPerformanceReports);

/**
 * @swagger
 * /performanceReport/{id}:
 *   get:
 *     summary: Get performance report by ID
 *     tags: [PerformanceReport]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Performance report ID
 *     responses:
 *       200:
 *         description: Performance report fetched successfully
 *       404:
 *         description: Performance report not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getPerformanceReportById);

/**
 * @swagger
 * /performanceReport/{id}:
 *   put:
 *     summary: Update performance report by ID
 *     tags: [PerformanceReport]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Performance report ID
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
 *               score:
 *                 type: number
 *               timeTaken:
 *                 type: number
 *               details:
 *                 type: string
 *     responses:
 *       200:
 *         description: Performance report updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Performance report not found
 */
router.put('/:id', updatePerformanceReport);

/**
 * @swagger
 * /performanceReport/{id}:
 *   delete:
 *     summary: Delete performance report by ID
 *     tags: [PerformanceReport]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Performance report ID
 *     responses:
 *       200:
 *         description: Performance report deleted successfully
 *       404:
 *         description: Performance report not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deletePerformanceReport);

module.exports = router;

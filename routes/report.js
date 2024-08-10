const express = require('express');
const router = express.Router();
const {
  createReport,
  getAllReports,
  getReportById,
  updateReport,
  deleteReport
} = require('../controllers/reportController');

/**
 * @swagger
 * /report:
 *   post:
 *     summary: Create a new report
 *     tags: [Report]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - description
 *               - data
 *               - createdBy
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               data:
 *                 type: object
 *               createdBy:
 *                 type: string
 *     responses:
 *       201:
 *         description: Report created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createReport);

/**
 * @swagger
 * /report:
 *   get:
 *     summary: Get all reports
 *     tags: [Report]
 *     responses:
 *       200:
 *         description: Reports fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllReports);

/**
 * @swagger
 * /report/{id}:
 *   get:
 *     summary: Get report by ID
 *     tags: [Report]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Report ID
 *     responses:
 *       200:
 *         description: Report fetched successfully
 *       404:
 *         description: Report not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getReportById);

/**
 * @swagger
 * /report/{id}:
 *   put:
 *     summary: Update report by ID
 *     tags: [Report]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Report ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               description:
 *                 type: string
 *               data:
 *                 type: object
 *               createdBy:
 *                 type: string
 *     responses:
 *       200:
 *         description: Report updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Report not found
 */
router.put('/:id', updateReport);

/**
 * @swagger
 * /report/{id}:
 *   delete:
 *     summary: Delete report by ID
 *     tags: [Report]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Report ID
 *     responses:
 *       200:
 *         description: Report deleted successfully
 *       404:
 *         description: Report not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteReport);

module.exports = router;

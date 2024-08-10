const express = require('express');
const router = express.Router();
const { createCandidate, getAllCandidates, getCandidateById, updateCandidate, deleteCandidate } = require('../controllers/candidateController');

/**
 * @swagger
 * /candidate:
 *   post:
 *     summary: Create a new candidate
 *     tags: [Candidate]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - phone
 *               - passportPhoto
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               passportPhoto:
 *                 type: string
 *     responses:
 *       201:
 *         description: Candidate created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createCandidate);

/**
 * @swagger
 * /candidate:
 *   get:
 *     summary: Get all candidates
 *     tags: [Candidate]
 *     responses:
 *       200:
 *         description: Candidates fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllCandidates);

/**
 * @swagger
 * /candidate/{id}:
 *   get:
 *     summary: Get candidate by ID
 *     tags: [Candidate]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Candidate ID
 *     responses:
 *       200:
 *         description: Candidate fetched successfully
 *       404:
 *         description: Candidate not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getCandidateById);

/**
 * @swagger
 * /candidate/{id}:
 *   put:
 *     summary: Update candidate by ID
 *     tags: [Candidate]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Candidate ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *               phone:
 *                 type: string
 *               passportPhoto:
 *                 type: string
 *     responses:
 *       200:
 *         description: Candidate updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Candidate not found
 */
router.put('/:id', updateCandidate);

/**
 * @swagger
 * /candidate/{id}:
 *   delete:
 *     summary: Delete candidate by ID
 *     tags: [Candidate]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Candidate ID
 *     responses:
 *       200:
 *         description: Candidate deleted successfully
 *       404:
 *         description: Candidate not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteCandidate);

module.exports = router;

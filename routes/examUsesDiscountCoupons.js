const express = require('express');
const router = express.Router();
const {
  createExamUsesDiscountCoupons,
  getAllExamUsesDiscountCoupons,
  getExamUsesDiscountCouponsById,
  updateExamUsesDiscountCoupons,
  deleteExamUsesDiscountCoupons
} = require('../controllers/examUsesDiscountCouponsController');

/**
 * @swagger
 * /examUsesDiscountCoupons:
 *   post:
 *     summary: Create a new association between an exam and a discount coupon
 *     tags: [ExamUsesDiscountCoupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - examId
 *               - discountCouponId
 *             properties:
 *               examId:
 *                 type: string
 *               discountCouponId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Association created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createExamUsesDiscountCoupons);

/**
 * @swagger
 * /examUsesDiscountCoupons:
 *   get:
 *     summary: Get all associations between exams and discount coupons
 *     tags: [ExamUsesDiscountCoupons]
 *     responses:
 *       200:
 *         description: Associations fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllExamUsesDiscountCoupons);

/**
 * @swagger
 * /examUsesDiscountCoupons/{id}:
 *   get:
 *     summary: Get an association by ID
 *     tags: [ExamUsesDiscountCoupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Association ID
 *     responses:
 *       200:
 *         description: Association fetched successfully
 *       404:
 *         description: Association not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getExamUsesDiscountCouponsById);

/**
 * @swagger
 * /examUsesDiscountCoupons/{id}:
 *   put:
 *     summary: Update an association by ID
 *     tags: [ExamUsesDiscountCoupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Association ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               examId:
 *                 type: string
 *               discountCouponId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Association updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Association not found
 */
router.put('/:id', updateExamUsesDiscountCoupons);

/**
 * @swagger
 * /examUsesDiscountCoupons/{id}:
 *   delete:
 *     summary: Delete an association by ID
 *     tags: [ExamUsesDiscountCoupons]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Association ID
 *     responses:
 *       200:
 *         description: Association deleted successfully
 *       404:
 *         description: Association not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteExamUsesDiscountCoupons);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
  createDiscountCoupon,
  getAllDiscountCoupons,
  getDiscountCouponById,
  updateDiscountCoupon,
  deleteDiscountCoupon
} = require('../controllers/discountCouponController');

/**
 * @swagger
 * /discountCoupon:
 *   post:
 *     summary: Create a new discount coupon
 *     tags: [DiscountCoupon]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - code
 *               - discount
 *               - expiryDate
 *             properties:
 *               code:
 *                 type: string
 *               discount:
 *                 type: number
 *               expiryDate:
 *                 type: string
 *                 format: date
 *               termsConditions:
 *                 type: string
 *     responses:
 *       201:
 *         description: Discount coupon created successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createDiscountCoupon);

/**
 * @swagger
 * /discountCoupon:
 *   get:
 *     summary: Get all discount coupons
 *     tags: [DiscountCoupon]
 *     responses:
 *       200:
 *         description: Discount coupons fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllDiscountCoupons);

/**
 * @swagger
 * /discountCoupon/{id}:
 *   get:
 *     summary: Get discount coupon by ID
 *     tags: [DiscountCoupon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Discount coupon ID
 *     responses:
 *       200:
 *         description: Discount coupon fetched successfully
 *       404:
 *         description: Discount coupon not found
 *       500:
 *         description: Internal server error
 */
router.get('/:id', getDiscountCouponById);

/**
 * @swagger
 * /discountCoupon/{id}:
 *   put:
 *     summary: Update discount coupon by ID
 *     tags: [DiscountCoupon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Discount coupon ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               discount:
 *                 type: number
 *               expiryDate:
 *                 type: string
 *                 format: date
 *               termsConditions:
 *                 type: string
 *     responses:
 *       200:
 *         description: Discount coupon updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Discount coupon not found
 */
router.put('/:id', updateDiscountCoupon);

/**
 * @swagger
 * /discountCoupon/{id}:
 *   delete:
 *     summary: Delete discount coupon by ID
 *     tags: [DiscountCoupon]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: Discount coupon ID
 *     responses:
 *       200:
 *         description: Discount coupon deleted successfully
 *       404:
 *         description: Discount coupon not found
 *       500:
 *         description: Internal server error
 */
router.delete('/:id', deleteDiscountCoupon);

module.exports = router;

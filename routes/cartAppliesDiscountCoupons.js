const express = require('express');
const router = express.Router();
const {
  createCartAppliesDiscountCoupons,
  getAllCartAppliesDiscountCoupons,
  getCartAppliesDiscountCouponsById,
  updateCartAppliesDiscountCoupons,
  deleteCartAppliesDiscountCoupons
} = require('../controllers/cartAppliesDiscountCouponsController');

/**
 * @swagger
 * /cartAppliesDiscountCoupons:
 *   post:
 *     summary: Apply a discount coupon to the cart
 *     tags: [CartAppliesDiscountCoupons]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - cartId
 *               - discountCouponId
 *             properties:
 *               cartId:
 *                 type: string
 *               discountCouponId:
 *                 type: string
 *     responses:
 *       201:
 *         description: Discount coupon applied successfully
 *       400:
 *         description: Bad request
 */
router.post('/', createCartAppliesDiscountCoupons);

/**
 * @swagger
 * /cartAppliesDiscountCoupons:
 *   get:
 *     summary: Get all records of discount coupons applied to carts
 *     tags: [CartAppliesDiscountCoupons]
 *     responses:
 *       200:
 *         description: Records fetched successfully
 *       500:
 *         description: Internal server error
 */
router.get('/', getAllCartAppliesDiscountCoupons);

/**
 * @swagger
 * /cartAppliesDiscountCoupons/{id}:
 *   get:
 *     summary: Get a record by ID
 *     tags: [CartAppliesDiscountCoupons]
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
router.get('/:id', getCartAppliesDiscountCouponsById);

/**
 * @swagger
 * /cartAppliesDiscountCoupons/{id}:
 *   put:
 *     summary: Update a record by ID
 *     tags: [CartAppliesDiscountCoupons]
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
 *               cartId:
 *                 type: string
 *               discountCouponId:
 *                 type: string
 *     responses:
 *       200:
 *         description: Record updated successfully
 *       400:
 *         description: Bad request
 *       404:
 *         description: Record not found
 */
router.put('/:id', updateCartAppliesDiscountCoupons);

/**
 * @swagger
 * /cartAppliesDiscountCoupons/{id}:
 *   delete:
 *     summary: Delete a record by ID
 *     tags: [CartAppliesDiscountCoupons]
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
router.delete('/:id', deleteCartAppliesDiscountCoupons);

module.exports = router;

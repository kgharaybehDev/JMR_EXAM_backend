// routes/index.js
const express = require('express');
const router = express.Router();

// Import all routes
const authRoutes = require('./auth');
const candidateRoutes = require('./candidate');
const candidateTakesExamsRoutes = require('./candidateTakesExams');
const cartRoutes = require('./cart');
const cartAppliesDiscountCouponsRoutes = require('./cartAppliesDiscountCoupons');
const cartContainsExamsRoutes = require('./cartContainsExams');
const discountCouponRoutes = require('./discountCoupon');
const examRoutes = require('./exam');
const examSimulationModelRoutes = require('./examSimulationModel');
const examUsesDiscountCouponsRoutes = require('./examUsesDiscountCoupons');
const performanceReportRoutes = require('./performanceReport');
const permissionRoutes = require('./permission');
const questionRoutes = require('./question');
const reportRoutes = require('./report');
const requestRoutes = require('./request');
const roleRoutes = require('./role');
const rolePermissionRoutes = require('./rolePermission');
const roleUserRoutes = require('./roleUser');
const transactionRoutes = require('./transaction');
const uploadRoutes = require('./upload');
const userRoutes = require('./user');

// Use the routes
router.use('/auth', authRoutes);
router.use('/candidate', candidateRoutes);
router.use('/candidateTakesExams', candidateTakesExamsRoutes);
router.use('/cart', cartRoutes);
router.use('/cartAppliesDiscountCoupons', cartAppliesDiscountCouponsRoutes);
router.use('/cartContainsExams', cartContainsExamsRoutes);
router.use('/discountCoupon', discountCouponRoutes);
router.use('/exam', examRoutes);
router.use('/examSimulationModel', examSimulationModelRoutes);
router.use('/examUsesDiscountCoupons', examUsesDiscountCouponsRoutes);
router.use('/performanceReport', performanceReportRoutes);
router.use('/permission', permissionRoutes);
router.use('/question', questionRoutes);
router.use('/report', reportRoutes);
router.use('/request', requestRoutes);
router.use('/role', roleRoutes);
router.use('/rolePermission', rolePermissionRoutes);
router.use('/roleUser', roleUserRoutes);
router.use('/transaction', transactionRoutes);
router.use('/upload', uploadRoutes);
router.use('/user', userRoutes);

module.exports = router;

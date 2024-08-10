const mongoose = require('mongoose');

const ExamUsesDiscountCouponsSchema = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true
  },
  discountCouponId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'DiscountCoupon',
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  },
  updated_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('ExamUsesDiscountCoupons', ExamUsesDiscountCouponsSchema);

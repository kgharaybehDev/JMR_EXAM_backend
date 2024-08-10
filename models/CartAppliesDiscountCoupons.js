const mongoose = require('mongoose');

const CartAppliesDiscountCouponsSchema = new mongoose.Schema({
  cartId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Cart',
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

module.exports = mongoose.model('CartAppliesDiscountCoupons', CartAppliesDiscountCouponsSchema);

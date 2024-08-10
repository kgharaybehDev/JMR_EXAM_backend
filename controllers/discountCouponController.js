const DiscountCoupon = require('../models/DiscountCoupon');

exports.createDiscountCoupon = async (req, res) => {
  const { code, discount, expiryDate, termsConditions } = req.body;

  try {
    const discountCoupon = new DiscountCoupon({
      code,
      discount,
      expiryDate,
      termsConditions
    });

    await discountCoupon.save();
    res.status(201).json(discountCoupon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllDiscountCoupons = async (req, res) => {
  try {
    const discountCoupons = await DiscountCoupon.find();
    res.status(200).json(discountCoupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDiscountCouponById = async (req, res) => {
  try {
    const discountCoupon = await DiscountCoupon.findById(req.params.id);
    if (!discountCoupon) {
      return res.status(404).json({ message: 'Discount coupon not found' });
    }
    res.status(200).json(discountCoupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateDiscountCoupon = async (req, res) => {
  try {
    const discountCoupon = await DiscountCoupon.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!discountCoupon) {
      return res.status(404).json({ message: 'Discount coupon not found' });
    }
    res.status(200).json(discountCoupon);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDiscountCoupon = async (req, res) => {
  try {
    const discountCoupon = await DiscountCoupon.findByIdAndDelete(req.params.id);
    if (!discountCoupon) {
      return res.status(404).json({ message: 'Discount coupon not found' });
    }
    res.status(200).json({ message: 'Discount coupon deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

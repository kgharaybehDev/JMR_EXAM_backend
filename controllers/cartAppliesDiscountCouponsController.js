const CartAppliesDiscountCoupons = require('../models/CartAppliesDiscountCoupons');
const Cart = require('../models/Cart');
const DiscountCoupon = require('../models/DiscountCoupon');

exports.createCartAppliesDiscountCoupons = async (req, res) => {
  const { cartId, discountCouponId } = req.body;

  try {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const discountCoupon = await DiscountCoupon.findById(discountCouponId);
    if (!discountCoupon) {
      return res.status(404).json({ message: 'Discount coupon not found' });
    }

    const cartAppliesDiscountCoupons = new CartAppliesDiscountCoupons({
      cartId,
      discountCouponId
    });

    await cartAppliesDiscountCoupons.save();
    res.status(201).json(cartAppliesDiscountCoupons);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCartAppliesDiscountCoupons = async (req, res) => {
  try {
    const cartAppliesDiscountCouponsList = await CartAppliesDiscountCoupons.find();
    res.status(200).json(cartAppliesDiscountCouponsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCartAppliesDiscountCouponsById = async (req, res) => {
  try {
    const cartAppliesDiscountCoupons = await CartAppliesDiscountCoupons.findById(req.params.id);
    if (!cartAppliesDiscountCoupons) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(cartAppliesDiscountCoupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCartAppliesDiscountCoupons = async (req, res) => {
  try {
    const cartAppliesDiscountCoupons = await CartAppliesDiscountCoupons.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!cartAppliesDiscountCoupons) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(cartAppliesDiscountCoupons);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCartAppliesDiscountCoupons = async (req, res) => {
  try {
    const cartAppliesDiscountCoupons = await CartAppliesDiscountCoupons.findByIdAndDelete(req.params.id);
    if (!cartAppliesDiscountCoupons) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

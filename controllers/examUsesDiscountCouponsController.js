const ExamUsesDiscountCoupons = require('../models/ExamUsesDiscountCoupons');
const Exam = require('../models/Exam');
const DiscountCoupon = require('../models/DiscountCoupon');

exports.createExamUsesDiscountCoupons = async (req, res) => {
  const { examId, discountCouponId } = req.body;

  try {
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    const discountCoupon = await DiscountCoupon.findById(discountCouponId);
    if (!discountCoupon) {
      return res.status(404).json({ message: 'Discount coupon not found' });
    }

    const examUsesDiscountCoupons = new ExamUsesDiscountCoupons({
      examId,
      discountCouponId
    });

    await examUsesDiscountCoupons.save();
    res.status(201).json(examUsesDiscountCoupons);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllExamUsesDiscountCoupons = async (req, res) => {
  try {
    const examUsesDiscountCouponsList = await ExamUsesDiscountCoupons.find();
    res.status(200).json(examUsesDiscountCouponsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getExamUsesDiscountCouponsById = async (req, res) => {
  try {
    const examUsesDiscountCoupons = await ExamUsesDiscountCoupons.findById(req.params.id);
    if (!examUsesDiscountCoupons) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(examUsesDiscountCoupons);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateExamUsesDiscountCoupons = async (req, res) => {
  try {
    const examUsesDiscountCoupons = await ExamUsesDiscountCoupons.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!examUsesDiscountCoupons) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(examUsesDiscountCoupons);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteExamUsesDiscountCoupons = async (req, res) => {
  try {
    const examUsesDiscountCoupons = await ExamUsesDiscountCoupons.findByIdAndDelete(req.params.id);
    if (!examUsesDiscountCoupons) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

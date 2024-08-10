const CartContainsExams = require('../models/CartContainsExams');
const Cart = require('../models/Cart');
const Exam = require('../models/Exam');

exports.createCartContainsExams = async (req, res) => {
  const { cartId, examId, quantity } = req.body;

  try {
    const cart = await Cart.findById(cartId);
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }

    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    const cartContainsExams = new CartContainsExams({
      cartId,
      examId,
      quantity
    });

    await cartContainsExams.save();
    res.status(201).json(cartContainsExams);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCartContainsExams = async (req, res) => {
  try {
    const cartContainsExamsList = await CartContainsExams.find();
    res.status(200).json(cartContainsExamsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCartContainsExamsById = async (req, res) => {
  try {
    const cartContainsExams = await CartContainsExams.findById(req.params.id);
    if (!cartContainsExams) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(cartContainsExams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCartContainsExams = async (req, res) => {
  try {
    const cartContainsExams = await CartContainsExams.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!cartContainsExams) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(cartContainsExams);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCartContainsExams = async (req, res) => {
  try {
    const cartContainsExams = await CartContainsExams.findByIdAndDelete(req.params.id);
    if (!cartContainsExams) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

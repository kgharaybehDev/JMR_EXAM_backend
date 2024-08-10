const mongoose = require('mongoose');

const ExamSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  numQuestions: {
    type: Number,
    required: true
  },
  fee: {
    type: Number,
    required: true
  },
  discount: {
    type: Number,
    default: 0
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
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

module.exports = mongoose.model('Exam', ExamSchema);

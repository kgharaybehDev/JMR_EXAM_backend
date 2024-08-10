const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Exam',
    required: true
  },
  type: {
    type: String,
    enum: ['multiple choice', 'true/false'],
    required: true
  },
  questionText: {
    type: String,
    required: true
  },
  options: {
    type: Array,
    required: function() {
      return this.type === 'multiple choice';
    }
  },
  correctAnswer: {
    type: String,
    required: true
  },
  explanation: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    default: []
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

module.exports = mongoose.model('Question', QuestionSchema);

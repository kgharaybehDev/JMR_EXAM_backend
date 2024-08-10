const CandidateTakesExams = require('../models/CandidateTakesExams');
const Exam = require('../models/Exam');

exports.createCandidateTakesExams = async (req, res) => {
  const { candidateId, examId, startTime, endTime, score } = req.body;

  try {
    const exam = await Exam.findById(examId);
    if (!exam) {
      return res.status(404).json({ message: 'Exam not found' });
    }

    const candidateTakesExams = new CandidateTakesExams({
      candidateId,
      examId,
      startTime,
      endTime,
      score
    });

    await candidateTakesExams.save();
    res.status(201).json(candidateTakesExams);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllCandidateTakesExams = async (req, res) => {
  try {
    const candidateTakesExamsList = await CandidateTakesExams.find();
    res.status(200).json(candidateTakesExamsList);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCandidateTakesExamsById = async (req, res) => {
  try {
    const candidateTakesExams = await CandidateTakesExams.findById(req.params.id);
    if (!candidateTakesExams) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(candidateTakesExams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateCandidateTakesExams = async (req, res) => {
  try {
    const candidateTakesExams = await CandidateTakesExams.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!candidateTakesExams) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json(candidateTakesExams);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteCandidateTakesExams = async (req, res) => {
  try {
    const candidateTakesExams = await CandidateTakesExams.findByIdAndDelete(req.params.id);
    if (!candidateTakesExams) {
      return res.status(404).json({ message: 'Record not found' });
    }
    res.status(200).json({ message: 'Record deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

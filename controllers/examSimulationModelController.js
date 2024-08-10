const ExamSimulationModel = require('../models/ExamSimulationModel');

exports.createExamSimulationModel = async (req, res) => {
  const { name, description, duration, price } = req.body;

  try {
    const examSimulationModel = new ExamSimulationModel({
      name,
      description,
      duration,
      price
    });

    await examSimulationModel.save();
    res.status(201).json(examSimulationModel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllExamSimulationModels = async (req, res) => {
  try {
    const examSimulationModels = await ExamSimulationModel.find();
    res.status(200).json(examSimulationModels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getExamSimulationModelById = async (req, res) => {
  try {
    const examSimulationModel = await ExamSimulationModel.findById(req.params.id);
    if (!examSimulationModel) {
      return res.status(404).json({ message: 'Exam simulation model not found' });
    }
    res.status(200).json(examSimulationModel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateExamSimulationModel = async (req, res) => {
  try {
    const examSimulationModel = await ExamSimulationModel.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!examSimulationModel) {
      return res.status(404).json({ message: 'Exam simulation model not found' });
    }
    res.status(200).json(examSimulationModel);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteExamSimulationModel = async (req, res) => {
  try {
    const examSimulationModel = await ExamSimulationModel.findByIdAndDelete(req.params.id);
    if (!examSimulationModel) {
      return res.status(404).json({ message: 'Exam simulation model not found' });
    }
    res.status(200).json({ message: 'Exam simulation model deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

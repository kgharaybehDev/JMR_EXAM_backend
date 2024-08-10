const PerformanceReport = require('../models/PerformanceReport');

exports.createPerformanceReport = async (req, res) => {
  const { candidateId, examId, score, timeTaken, details } = req.body;

  try {
    const performanceReport = new PerformanceReport({
      candidateId,
      examId,
      score,
      timeTaken,
      details
    });

    await performanceReport.save();
    res.status(201).json(performanceReport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getAllPerformanceReports = async (req, res) => {
  try {
    const performanceReports = await PerformanceReport.find();
    res.status(200).json(performanceReports);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPerformanceReportById = async (req, res) => {
  try {
    const performanceReport = await PerformanceReport.findById(req.params.id);
    if (!performanceReport) {
      return res.status(404).json({ message: 'Performance report not found' });
    }
    res.status(200).json(performanceReport);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updatePerformanceReport = async (req, res) => {
  try {
    const performanceReport = await PerformanceReport.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    });
    if (!performanceReport) {
      return res.status(404).json({ message: 'Performance report not found' });
    }
    res.status(200).json(performanceReport);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePerformanceReport = async (req, res) => {
  try {
    const performanceReport = await PerformanceReport.findByIdAndDelete(req.params.id);
    if (!performanceReport) {
      return res.status(404).json({ message: 'Performance report not found' });
    }
    res.status(200).json({ message: 'Performance report deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

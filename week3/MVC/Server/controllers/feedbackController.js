const FeedbackModel = require('../models/feedbackModel');

function getAllFeedbacks(req, res) {
  const data = FeedbackModel.getAll();
  res.status(200).json(data);
}

function getFeedbackById(req, res, next) {
  try {
    const id = Number(req.params.id);
    const item = FeedbackModel.findById(id);

    if (!item) {
      return res.status(404).json({ error: 'Feedback not found' });
    }

    res.status(200).json(item);
  } catch (err) {
    next(err);
  }
}

function createFeedback(req, res, next) {
  try {
    const { sender, message, rating, platform } = req.body;

    // validación mínima (luego esto podría ser middleware o librería)
    if (!sender || !message) {
      return res.status(400).json({ error: 'sender and message are required' });
    }

    const created = FeedbackModel.addOne({ sender, message, rating, platform });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
}

function deleteFeedback(req, res, next) {
  try {
    const id = Number(req.params.id);
    const deleted = FeedbackModel.removeById(id);

    if (!deleted) {
      return res.status(404).json({ error: 'Feedback not found' });
    }

    res.status(200).json(deleted);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  deleteFeedback,
};

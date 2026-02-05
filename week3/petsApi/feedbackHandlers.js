const Feedback = require('./feedbackLib');

const getAllFeedbacks = (req, res) => {
  const all = Feedback.getAll();
  res.status(200).json(all);
};

const createFeedback = (req, res) => {
  res.json({ message: 'Hello from createFeedback' });
};

const getFeedbackById = (req, res) => {
  res.json({ message: 'Hello from getFeedbackById' });
};

const updateFeedback = (req, res) => {
  res.json({ message: 'Hello from updateFeedback' });
};

const deleteFeedback = (req, res) => {
  res.json({ message: 'Hello from deleteFeedback' });
};

module.exports = {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  updateFeedback,
  deleteFeedback,
};

//feedbackHandlers.js
const getAllFeedbacks = (req, res) => {
  res.json({
    message: 'Hola desde feedbakHandlers',
  });
};

//createFeedback
const createFeedback = (req, res) => {
  res.json({
    message: 'Hola desde createFeedback',
  });
};

//getFeedbackById
const getFeedbackById = (req, res) => {
  res.json({
    message: 'Hola desde FeedbackById',
  });
};

//updateFeedback
const updateFeedback = (req, res) => {
  console.log('PARAMS: ', req.params);
  console.log('BODY: ', req.body);
  res.json({
    message: 'Hola desde updateFeedback',
  });
};

//deleteFeedback
const deleteFeedback = (req, res) => {
  res.json({
    message: 'Hola desde deleteFeedback',
  });
};

module.exports = {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
};

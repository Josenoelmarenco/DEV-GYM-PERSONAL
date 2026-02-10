const express = require('express');
const router = express.Router();

const {
  getAllFeedbacks,
  getFeedbackById,
  createFeedback,
  deleteFeedback,
} = require('../controllers/feedbackController');
const validateFeedback = require('../middleware/validateFeedback');

router.get('/', getAllFeedbacks);
router.get('/:id', getFeedbackById);
router.delete('/:id', deleteFeedback);
router.post('/', validateFeedback, createFeedback);

module.exports = router;

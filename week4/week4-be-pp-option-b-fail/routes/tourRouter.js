const express = require('express');
const router = express.Router();

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourControllers.js');

router.get('/', getAllTours);

// GET /tours
// app.get('/tours', getAllTours);
router.get('/', getAllTours);

// POST /tours
// app.post('/tours', createTour);
router.post('/', createTour);

// GET /tours/:tourId
// app.get('/tours/:tourId', getTourById);
router.get('/:tourId', getTourById);

// PUT /tours/:tourId
// app.put('/tours/:tourId', updateTour);
router.put('/:tourId', updateTour);

// DELETE /tours/:tourId
// app.delete('/tours/:tourId', deleteTour);
router.delete('/:tourId', deleteTour);

module.exports = router;

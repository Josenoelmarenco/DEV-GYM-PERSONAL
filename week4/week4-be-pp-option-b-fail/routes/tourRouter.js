const express = require('express');
const router = express.Router();
const auth = require('.../middleware/auth');

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require('../controllers/tourControllers.js');

// GET /tours
// app.get('/tours', getAllTours);
router.get('/', getAllTours);
// GET /tours/:tourId
// app.get('/tours/:tourId', getTourById);
router.get('/:tourId', getTourById);

//Qué middlewares se ejecutan antes de ciertas rutas (ej: auth)
router.use(auth);

// POST /tours
// app.post('/tours', createTour);
router.post('/', createTour);

// PUT /tours/:tourId
// app.put('/tours/:tourId', updateTour);
router.put('/:tourId', updateTour);

// DELETE /tours/:tourId
// app.delete('/tours/:tourId', deleteTour);
router.delete('/:tourId', deleteTour);

module.exports = router;

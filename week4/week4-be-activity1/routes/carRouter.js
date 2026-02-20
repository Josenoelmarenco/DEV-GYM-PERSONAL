const express = require('express');
const router = express.Router();

const {
  getAllCars,
  createCar,
  getCarById,
  deleteCar,
} = require('../controllers/carControllers');

// GET /cars
router.get('/', getAllCars);

// POST /cars
router.post('/', createCar);

// GET /cars/:carId
router.get('/:carId', getCarById);

// DELETE /cars/:carId
router.delete('/:carId', deleteCar);

module.exports = router;

// controllers/carControllers.js
const mongoose = require('mongoose');
const Car = require('../models/carModel');

// GET /cars
const getAllCars = async (req, res) => {
  try {
    const cars = await Car.find({}).sort({ createdAt: -1 });
    return res.status(200).json(cars);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// POST /cars
const createCar = async (req, res) => {
  try {
    const { model, color, age } = req.body;

    // Validación mínima (además de la del schema)
    if (!model || !color || age === undefined) {
      return res
        .status(400)
        .json({ message: 'model, color and age are required' });
    }

    const newCar = await Car.create({ model, color, age });
    return res.status(201).json(newCar);
  } catch (err) {
    // Errores de validación de Mongoose suelen ser 400
    return res.status(400).json({ error: err.message });
  }
};

// GET /cars/:carId
const getCarById = async (req, res) => {
  try {
    const { carId } = req.params;

    // Evita crashes si el id no es ObjectId válido
    if (!mongoose.Types.ObjectId.isValid(carId)) {
      return res.status(400).json({ message: 'Invalid carId' });
    }

    const car = await Car.findById(carId);
    if (!car) {
      return res.status(404).json({ message: 'Car not found' });
    }

    return res.status(200).json(car);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// PUT /cars/:carId  (solo si tu router tiene PUT)
const updateCar = async (req, res) => {
  try {
    const { carId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(carId)) {
      return res.status(400).json({ message: 'Invalid carId' });
    }

    const updatedCar = await Car.findByIdAndUpdate(
      carId,
      { ...req.body },
      { new: true, runValidators: true },
    );

    if (!updatedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    return res.status(200).json(updatedCar);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// DELETE /cars/:carId
const deleteCar = async (req, res) => {
  try {
    const { carId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(carId)) {
      return res.status(400).json({ message: 'Invalid carId' });
    }

    const deletedCar = await Car.findByIdAndDelete(carId);
    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    return res.status(200).json({ message: 'Car deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllCars,
  createCar,
  getCarById,
  updateCar, // si no lo usas, puedes quitarlo del router o dejarlo aquí sin problema
  deleteCar,
};

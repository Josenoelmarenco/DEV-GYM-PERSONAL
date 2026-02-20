const express = require('express');
const userRouter = require('./routes/userRouter.js');

const app = express();

const tourRouter = require('./routes/tourRouter.js');

// Middleware to parse JSON
app.use(express.json());

// Montamos el router
app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);

// ROUTES

const port = 4000;
// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const {
  getAllTours,
  getTourById,
  createTour,
  updateTour,
  deleteTour,
} = require('./tourHandlers.js');

const express = require('express');
const userRouter = require('./routes/userRouter.js');
const morgan = require('morgan');

const app = express();

const tourRouter = require('./routes/tourRouter.js');

// Middleware to parse JSON globales
app.use(express.json());
app.use(morgan('tiny'));

// Montamos el router por recurso
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

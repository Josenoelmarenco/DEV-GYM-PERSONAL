require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');

const carRouter = require('./routes/carRouter');
const blogRouter = require('./routes/blogRouter');
const userRouter = require('./routes/userRouter');

const app = express();

// DB
connectDB();

// middleware
app.use(express.json());

// routes
app.get('/', (req, res) => res.send('API running'));
app.use('/api/cars', carRouter);
app.use('/api/blogs', blogRouter);
app.use('/api/users', userRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

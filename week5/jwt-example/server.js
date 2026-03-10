const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// const bcrypt = require("bcrypt");
const jwt = require('jsonwebtoken'); // Import jwt module
const saltRounds = 10;
const requireAuth = require('./requireAuth');
const User = require('./userModel');

const app = express();
app.use(express.json());

const SECRET = 'secretword';
const createToken = (_id) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: '3d' }); //esta sería la carga útil
};

// Connect to MongoDB database
mongoose
  .connect('mongodb://localhost:27017/jwt-ejemplo')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));

// Define the protected route
app.get('/api/protectedroute', requireAuth, async (req, res) => {
  // If the execution reaches here, it means the user is authenticated
  // You can access the authenticated user's information from req.user
  res
    .status(200)
    .json({ message: 'Protected route accessed successfully', user: req.user });
});

// Endpoint for user registration
app.post('/api/users', async (req, res) => {
  const { username, password } = req.body; //espera a que el cliente mande usuario y pass

  const hashedPassword = await bcrypt.hash(password, saltRounds); //Hasheamos esa pass que recibimos
  // Create a new user document and save it to the database
  const newUser = new User({ username, password, hashedPassword }); //mala práctica no deberíamos guardar también el pass
  await newUser.save();

  // Create JWT token
  const token = createToken(newUser._id);
  // Responder
  res.status(201).json({ message: 'User registered successfully', token });
});

// LOGIN: Endpoint to authenticate a user
app.post('/api/users/login', async (req, res) => {
  const { username, password } = req.body; //LEER CREDENCIALES

  // Find the user by username
  const user = await User.findOne({ username }); //BUSCAR USUARIOS

  if (!user) {
    return res.status(401).json({ message: 'Authentication failed' });
  }

  // Compare the provided password with the hashed password in the database
  const passwordMatch = await bcrypt.compare(password, user.hashedPassword); // COMPARAMOS PASSSWORD

  if (!passwordMatch) {
    return res.status(401).json({ message: 'Authentication failed' }); // SINO COINCIDE DEVUELVE ERROR 401
  }

  // Create JWT token
  const token = createToken(user._id); //SI EL LOGIN FUE EXITOSO REGRESA UN TOKEN NUEVO

  res.status(200).json({ message: 'Authentication successful', token });
});

// Endpoint to fetch all users
app.get('/api/users', async (req, res) => {
  //OBTENER TODOS LOS USUARIOS
  const allUsers = await User.find({});
  res.status(200).json(allUsers);
});

// Endpoint to delete a user by ID
app.delete('/api/users/:id', async (req, res) => {
  const { id } = req.params;

  const deletedUser = await User.findByIdAndDelete(id);
  res.status(200).json({ message: 'User deleted successfully' });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');

const logger = require('./middleware/logger');
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');

const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();

//express.json Solo actúa si el request trae body JSON (típicamente POST/PUT).
app.use(express.json()); // parsea JSON del body
app.use(logger); // middleware global

app.use('/api/feedback', feedbackRoutes); // monta el router

app.use(notFound); // si no encontró ruta
app.use(errorHandler); // manejo centralizado de errores

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

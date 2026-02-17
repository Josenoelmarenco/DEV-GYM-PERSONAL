//server.js
const notFound = require('./middleware/notFound');
const errorHandler = require('./middleware/errorHandler');
const express = require('express');
const app = express();

// const logger = require('./middleware/logger');
const morgan = require('morgan');
const router = require('./routes/postRoutes');

app.use(express.json()); //preparamos el req.body
// app.use(logger); //Observa todas las requests
// app.use(logger); //Registra cada solicitud, fecha, hora, y acción
app.use(morgan('dev'));

// rutas
app.get('/health', (req, res) => {
  res.json({ status: 'Funcionando! 😅' });
});
app.use('/api/posts', router);

//prueba controlada de error:
app.get('/error-test', (req, res) => {
  throw new Error('Boom!');
});

app.use(notFound);
app.use(errorHandler);

const port = 3000;
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port} 🚀`);
});

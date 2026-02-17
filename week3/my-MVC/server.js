//server.js
const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const router = require('./routes/postRoutes');

app.use(express.json()); //preparamos el req.body
// app.use(logger); //Observa todas las requests
app.use(logger); //Registra cada solicitud, fecha, hora, y acción

app.use('/api/posts', router);

// rutas
app.get('/health', (req, res) => {
  res.json({ status: 'Funcionando! 😅' });
});

const port = 3000;
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port} 🚀`);
});

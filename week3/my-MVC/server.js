//server.js
const express = require('express');
const app = express();
const router = require('./routes/postRoutes');
const logger = require('./middleware/logger');

app.use(express.json()); //preparamos el req.body
// app.use(logger); //Observa todas las requests
app.use(logger); //Registra cada solicitud, fecha, hora, y acción

// rutas
app.get('/health', (req, res) => {
  res.json({ status: 'Funcionando! 😅' });
});

app.use('/api/posts', router);

const port = 3000;
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port} 🚀`);
});

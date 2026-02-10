//server.js
const express = require('express');
const app = express();
const router = require('./routes/postRoutes');
const logger = require('./middleware/logger');

app.use(express.json()); //para que pueda leer
app.use(logger);

// rutas
app.get('/health', (req, res) => {
  res.json({ status: 'Funcionando! 😅' });
});

app.use('/api/posts', router);

const port = 3000;
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port} 🚀`);
});

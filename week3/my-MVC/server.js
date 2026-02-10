//server.js
const express = require('express');
const app = express();
const router = require('./routes/postRoutes');

app.use(express.json()); //para que pueda leer

// rutas
app.get('/health', (req, res) => {
  res.json({ status: 'Funcionando! 😅' });
});

app.use('/api/posts', router);

const port = 3000;
app.listen(port, () => {
  console.log(`El servidor está corriendo en el puerto ${port} 🚀`);
});

//app.js
const express = require('express'); //trae el framework
const {
  getAllFeedbacks,
  createFeedback,
  getFeedbackById,
  updateFeedback,
  deleteFeedback,
} = require('./feedbackHandlers');

const app = express(); //crea la app

//middleware Looger imprime cada request que entra
app.use((req, res, next) => {
  console.log('IN:', req.method, req.url);
  next();
});

//Creamos el middleware para JSON:
app.use(express.json());

//Creamos las rutas:
app.get('/feedback', getAllFeedbacks);

app.post('/feedback', createFeedback); //llevan body

app.get('/feedback/:id', getFeedbackById);

app.put('/feedback/:id', updateFeedback); //llevan body

app.delete('/feedback/:id', deleteFeedback);

// Error típico cuando el JSON del body está mal formado
app.use((err, req, res, next) => {
  console.error('ERROR:', err);

  if (err.type === 'entity.parse.failed') {
    return res.status(400).json({ error: 'Invalid JSON body' });
  }

  return res.status(500).json({ error: String(err.message || err) });
});

//Server listen
app.listen(4000, () => {
  console.log('El servidor está corriendo en el puerto 4000');
});

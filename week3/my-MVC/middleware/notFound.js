const notFound = (req, res) => {
  return res.status(404).json({ error: 'unknown endpoint' });
};

module.exports = notFound;

//!No necesitamos next() porque aquí termina el ciclo: si llegaste a este punto, no hubo ruta que respondiera.

//middleware/validateInput.js
//Funciona tanto para POST  y PUT
const validateInput = (req, res, next) => {
  const { title, content } = req.body || {};

  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ error: 'title and content are required' });
  }
  return next();
};

module.exports = validateInput;

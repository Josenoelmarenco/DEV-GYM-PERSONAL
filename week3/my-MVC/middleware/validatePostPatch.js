// middleware/validatePostPatch.js
const validatePostPatch = (req, res, next) => {
  const { title, content } = req.body || {};

  if (!title?.trim() && !content?.trim()) {
    return res.status(400).json({ error: 'title or content are required' });
  }

  return next();
};

module.exports = validatePostPatch;

//controllers/postController.js
const PostModel = require('../models/postModel.js');

const getPosts = (req, res) => {
  res.status(200).json(PostModel.getAll());
};

//Verificamos el req para crear un post
const createPost = (req, res) => {
  const { title, content } = req.body;
  if (!title?.trim() || !content?.trim()) {
    return res
      .status(400)
      .json({ error: 'El titulo y el contenido requerido ' });
  }
  const created = PostModel.addOne({ title, content });
  res.status(201).json(created);
};

//Verificamos si el usuario quiere encontrar un post
const getPostById = (req, res) => {
  const { id } = req.params;
  const post = PostModel.findById(id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  res.status(200).json(post);
};

// DELETE /api/posts/:id  (professor style: boolean result)
const deletePostById = (req, res) => {
  const { id } = req.params;

  const deleted = PostModel.deleteById(id); // true or false
  if (!deleted) {
    return res.status(404).json({ error: 'Post not found' });
  }

  return res.status(200).send(true); // or .end() ambos no envían cuerpo
};

// Updte post, método PUT
const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  // 1) validar input (PUT requiere ambos)
  if (!title?.trim() || !content?.trim()) {
    return res.status(400).json({ error: 'title and content are required' });
  }

  // 2) llamar al model para actualizar
  const updated = PostModel.putPostById(id, { title, content });
  // 3) si no existe el id
  if (!updated) {
    return res.status(404).json({ error: 'Post not found' });
  }
  return res.status(200).json(updated);
};

//fn update by patch method by id
const patchPostById = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

  if (!title?.trim() && !content?.trim()) {
    return res.status(400).json({ error: 'title or content are required' });
  }
  const updated = PostModel.patchPostById(id, { title, content }); //porque id viene en la url y title y el data en el body.

  if (!updated) {
    return res.status(404).json({ error: 'Post not found' });
  }

  return res.status(200).json(updated);
};

module.exports = {
  getPosts,
  createPost,
  getPostById,
  deletePostById,
  updatePost,
  patchPostById,
};

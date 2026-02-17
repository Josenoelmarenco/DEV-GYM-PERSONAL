//controllers/postController.js
const PostModel = require('../models/postModel.js');

const getPosts = (req, res) => {
  res.status(200).json(PostModel.getAll());
};

//Verificamos el req para crear un post
const createPost = (req, res) => {
  const { title, content } = req.body;
  const created = PostModel.addOne({ title, content });
  return res.status(201).json(created);
};

//Verificamos si el usuario quiere encontrar un post
const getPostById = (req, res) => {
  const { id } = req.params;
  const post = PostModel.findById(id);

  if (!post) {
    return res.status(404).json({ error: 'Post not found' });
  }
  return res.status(200).json(post);
};

// DELETE /api/posts/:id
const deletePostById = (req, res) => {
  const { id } = req.params;

  const deleted = PostModel.deleteById(id); // true or false
  if (!deleted) {
    return res.status(404).json({ error: 'Post not found' });
  }

  return res.status(204).end(); // or .end() ambos no envían cuerpo
};

// Updte post, método PUT
const updatePost = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  const updated = PostModel.putPostById(id, { title, content });
  if (!updated) {
    return res.status(404).json({ error: 'Post not found' });
  }
  return res.status(200).json(updated);
};

//fn update by patch method by id
const patchPostById = (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;

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

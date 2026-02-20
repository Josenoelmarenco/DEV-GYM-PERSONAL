const mongoose = require('mongoose');
const Blog = require('../models/blogModel');

// GET /api/blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({}).sort({ createdAt: -1 });
    return res.status(200).json(blogs);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// POST /api/blogs
const createBlog = async (req, res) => {
  try {
    // opcional: destructurar para entender qué estás creando
    const { title, body, author } = req.body;

    // si quieres validación extra (además del schema):
    if (!title || !body || !author) {
      return res
        .status(400)
        .json({ message: 'title, body, author are required' });
    }

    const newBlog = await Blog.create({ title, body, author });
    return res.status(201).json(newBlog);
  } catch (err) {
    // Mongoose validation errors normalmente deben ser 400
    return res.status(400).json({ error: err.message });
  }
};

// GET /api/blogs/:blogId
const getBlogById = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ message: 'Invalid blogId' });
    }

    const blog = await Blog.findById(blogId);

    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    return res.status(200).json(blog);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// PUT /api/blogs/:blogId (opcional si tu lab lo pide)
const updateBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ message: 'Invalid blogId' });
    }

    const updatedBlog = await Blog.findByIdAndUpdate(
      blogId,
      { ...req.body },
      { new: true, runValidators: true },
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    return res.status(200).json(updatedBlog);
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// DELETE /api/blogs/:blogId
const deleteBlog = async (req, res) => {
  try {
    const { blogId } = req.params;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ message: 'Invalid blogId' });
    }

    const deletedBlog = await Blog.findByIdAndDelete(blogId);

    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }

    return res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllBlogs,
  createBlog,
  getBlogById,
  updateBlog,
  deleteBlog,
};

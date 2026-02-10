//postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');

const router = express.Router();

router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.get('/:id', postController.getPostById);
router.delete('/:id', postController.deletePostById);
router.put('/:id', postController.updatePost);
router.patch('/:id', postController.patchPostById);

module.exports = router;

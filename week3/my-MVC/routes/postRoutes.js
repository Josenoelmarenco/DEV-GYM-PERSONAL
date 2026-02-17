//postRoutes.js
const express = require('express');
const postController = require('../controllers/postController');
const validatePostRequired = require('../middleware/validatePostRequired');
const validatePostPatch = require('../middleware/validatePostPatch');

const router = express.Router();

router.post('/', validatePostRequired, postController.createPost);
router.put('/:id', validatePostRequired, postController.updatePost);
router.patch('/:id', validatePostPatch, postController.patchPostById);
router.get('/', postController.getPosts);
router.get('/:id', postController.getPostById);
router.delete('/:id', postController.deletePostById);

module.exports = router;

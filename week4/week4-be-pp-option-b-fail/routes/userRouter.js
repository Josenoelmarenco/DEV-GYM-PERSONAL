const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
} = require('../controllers/userControllers.js');

router.get('/', getAllUsers);
router.get('/:userId', getUserById);

router.use(auth);

router.post('/', createUser);
router.put('/:userId', updateUser);
router.delete('/:userId', deleteUser);

module.exports = router;

const express = require('express');
const userController = require('../controllers/userController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/:id', authenticateToken, userController.getUserProfile);
router.put('/:id', authenticateToken, userController.updateUserProfile);

module.exports = router;

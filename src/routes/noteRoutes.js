const express = require('express');
const noteController = require('../controllers/noteController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, noteController.createNote);
router.get('/:id', authenticateToken, noteController.getNoteDetails);
router.put('/:id', authenticateToken, noteController.updateNote);
router.delete('/:id', authenticateToken, noteController.deleteNote);

module.exports = router;

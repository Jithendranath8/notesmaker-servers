const express = require('express');
const folderController = require('../controllers/folderController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, folderController.createFolder);
router.get('/:id', authenticateToken, folderController.getFolderDetails);
router.delete('/:id', authenticateToken, folderController.deleteFolder);

module.exports = router;

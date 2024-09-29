const express = require('express');
const workspaceController = require('../controllers/workspaceController');
const authenticateToken = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/', authenticateToken, workspaceController.createWorkspace);
router.get('/:id', authenticateToken, workspaceController.getWorkspaceDetails);
router.delete('/:id', authenticateToken, workspaceController.deleteWorkspace);

module.exports = router;

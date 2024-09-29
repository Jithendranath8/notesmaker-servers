const workspaceService = require('../services/workspaceService');

exports.createWorkspace = async (req, res) => {
  try {
    const workspace = await workspaceService.createWorkspace(req.body);
    res.status(201).json(workspace);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getWorkspaceDetails = async (req, res) => {
  try {
    const workspace = await workspaceService.getWorkspace(req.params.id);
    res.json(workspace);
  } catch (error) {
    res.status(404).json({ error: 'Workspace not found' });
  }
};

exports.deleteWorkspace = async (req, res) => {
  try {
    await workspaceService.deleteWorkspace(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Workspace not found' });
  }
};

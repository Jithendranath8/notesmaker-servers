const folderService = require('../services/folderService');

exports.createFolder = async (req, res) => {
  try {
    const folder = await folderService.createFolder(req.body);
    res.status(201).json(folder);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getFolderDetails = async (req, res) => {
  try {
    const folder = await folderService.getFolderDetails(req.params.id);
    res.json(folder);
  } catch (error) {
    res.status(404).json({ error: 'Folder not found' });
  }
};

exports.deleteFolder = async (req, res) => {
  try {
    await folderService.deleteFolder(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Folder not found' });
  }
};

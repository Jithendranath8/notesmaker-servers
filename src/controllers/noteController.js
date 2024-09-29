const noteService = require('../services/noteService');

exports.createNote = async (req, res) => {
  try {
    const note = await noteService.createNote(req.body);
    res.status(201).json(note);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getNoteDetails = async (req, res) => {
  try {
    const note = await noteService.getNoteDetails(req.params.id);
    res.json(note);
  } catch (error) {
    res.status(404).json({ error: 'Note not found' });
  }
};

exports.updateNote = async (req, res) => {
  try {
    const updatedNote = await noteService.updateNote(req.params.id, req.body);
    res.json(updatedNote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteNote = async (req, res) => {
  try {
    await noteService.deleteNote(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: 'Note not found' });
  }
};

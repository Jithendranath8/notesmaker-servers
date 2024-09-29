const prisma = require('../models/prismaClient');

const createNote = async (noteData) => {
    const { workspace_id, title, content } = noteData;
  

    const workspace = await prisma.workspace.findUnique({
      where: { workspace_id: workspace_id },
    });
  

    if (!workspace) {
      throw new Error(`Workspace with id ${workspace_id} not found.`); 
    }
  
    return await prisma.note.create({
      data: {
        workspace_id: workspace_id,
        title: title,
        content: content,
      },
    });
  };
const getNoteDetails = async (noteId) => {
  return await prisma.note.findUnique({
    where: { note_id: Number(noteId) }
  });
};

const updateNote = async (noteId, data) => {
  return await prisma.note.update({
    where: { note_id: Number(noteId) },
    data
  });
};

const deleteNote = async (noteId) => {
  return await prisma.note.delete({
    where: { note_id: Number(noteId) }
  });
};

module.exports = { createNote, getNoteDetails, updateNote, deleteNote };

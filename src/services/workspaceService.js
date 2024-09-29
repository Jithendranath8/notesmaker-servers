const prisma = require('../models/prismaClient');

const createWorkspace = async (workspaceData) => {
    const { title, user_id } = workspaceData;  // Ensure you pass user_id
  
    return await prisma.workspace.create({
      data: {
        title: title,
        user: {
          connect: { user_id: user_id },  // Link the workspace to an existing user by user_id
        },
      },
    });
  };
  

const getWorkspace = async (workspaceId) => {
  return await prisma.workspace.findUnique({
    where: { workspace_id: Number(workspaceId) },
  });
};

const deleteWorkspace = async (workspaceId) => {
  return await prisma.workspace.delete({
    where: { workspace_id: Number(workspaceId) }
  });
};

module.exports = { createWorkspace, getWorkspace, deleteWorkspace };

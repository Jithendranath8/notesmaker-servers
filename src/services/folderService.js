const prisma = require("../models/prismaClient");

const createFolder = async (folderData) => {
  return await prisma.folder.create({
    data: folderData,
  });
};

const getFolderDetails = async (folderId) => {
  return await prisma.folder.findUnique({
    where: { folder_id: Number(folderId) },
  });
};

const deleteFolder = async (folderId) => {
  return await prisma.folder.delete({
    where: { folder_id: Number(folderId) },
  });
};

module.exports = { createFolder, getFolderDetails, deleteFolder };

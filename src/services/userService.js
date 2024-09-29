const prisma = require('../models/prismaClient');

const getUserProfile = async (userId) => {
  return await prisma.user.findUnique({ where: { user_id: Number(userId) } });
};

const updateUserProfile = async (userId, data) => {
  return await prisma.user.update({
    where: { user_id: Number(userId) },
    data
  });
};

module.exports = { getUserProfile, updateUserProfile };

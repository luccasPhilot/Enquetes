const userRepository = require('../repositories/User');

const createUser = async (user, userTipo) => {
  if (userTipo !== 'admin') {
    throw new Error('Apenas administradores podem criar usuários.');
  }
  const existingUser = await userRepository.findByUsername(user.username);
  if (existingUser) {
    throw new Error('Usuário já existe.');
  }

  if (!['admin', 'user'].includes(user.tipo)) {
    throw new Error('O tipo deve ser "admin" ou "user".');
  }
  await userRepository.saveUser(user);
  return user;
};


const getUser = async (username) => {
  return await userRepository.findByUsername(username);
};

const updateUser = async (username, updatedData, userId, userTipo) => {
  const user = await userRepository.findByUsername(username);
  if (!user) {
    throw new Error('Usuário não encontrado.');
  }
  if (updatedData.tipo && userTipo !== 'admin') {
    throw new Error('Apenas administradores podem alterar o tipo do usuário.');
  }
  if (userTipo !== 'admin' && username !== userId) {
    throw new Error('Permissão negada, você não tem permissão para alterar outro usuário');
  }
  return await userRepository.updateUser(username, updatedData);
};

const deleteUser = async (username, userId, userTipo) => {
  if (userTipo !== 'admin') {
    throw new Error('Apenas administradores podem excluir usuários.');
  }
  const user = await userRepository.findByUsername(username);
  if (!user) {
    throw new Error('Usuário não encontrado.');
  }
  if(user.tipo === 'admin'){
    throw new Error('Você não possui permissão para excluir um usuário administrador');
  }
  userRepository.deleteUser(username)
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

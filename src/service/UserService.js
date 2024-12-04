const userRepository = require('../repositories/User');

const createUser = async (user, userId, userTipo) => {
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
  if (userTipo !== 'admin' && userId !== username) {
    throw new Error('Permissão negada.');
  }
  if (updatedData.tipo && userTipo !== 'admin') {
    throw new Error('Apenas administradores podem alterar o tipo do usuário.');
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
  const users = userRepository.readFile();
  const filteredUsers = users.filter((u) => u.username !== username);
  userRepository.writeFile(filteredUsers);
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

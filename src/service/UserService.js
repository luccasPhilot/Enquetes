const userRepository = require('../repositories/User');

const createUser = async (user, userId, userTipo) => {
  if (userTipo !== 'admin') {
    throw new Error('Apenas administradores podem criar usuários.');
  }
  const existingUser = await userRepository.findByUsername(user.username);
  if (existingUser) {
    throw new Error('Usuário já existe.');
  }

  // Verificação de campos obrigatórios
  const requiredFields = ['username', 'password', 'tipo', 'email', 'cidade'];
  const missingFields = requiredFields.filter(field => !user[field]);
  if (missingFields.length > 0) {
    throw new Error(`Os seguintes campos são obrigatórios: ${missingFields.join(', ')}`);
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
  userRepository.deleteUser(username)
};

module.exports = {
  createUser,
  getUser,
  updateUser,
  deleteUser,
};

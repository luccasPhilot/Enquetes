const userRepository = require('../repositories/User');

const authenticate = async (username, password) => {
  // Busca o usuário no banco pelo username
  const user = await userRepository.findByUsername(username);
  if (!user) {
    throw new Error('Usuário não encontrado.');
  }

  // Verifica se a senha está correta
  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Credenciais inválidas.');
  }

  // Gera o token JWT
  const token = jwtUtils.generateToken({ id: user.id, role: user.role });

  return token;
};

module.exports = {
    authenticate,
}

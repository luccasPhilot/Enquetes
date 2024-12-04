const fs = require('fs');
const path = require('path');

// Caminho para o arquivo JSON onde os dados serão armazenados
const filePath = path.join(__dirname, '..', '..', 'DataSource', 'User.json');

// Função para ler o arquivo JSON
const readFile = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

// Função para escrever no arquivo JSON
const writeFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const findByUsername = async (username) => {
  const users = readFile();
  return users.find((user) => user.username === username) || null;
};

const saveUser = async (user) => {
  const users = readFile();
  users.push(user);
  writeFile(users);
};

const updateUser = async (username, updatedData) => {
  const users = readFile();
  const index = users.findIndex((user) => user.username === username);
  if (index !== -1) {
    users[index] = { ...users[index], ...updatedData };
    writeFile(users);
    return users[index];
  }
  return null;
};

const deleteUser = async (username) => {
  const user = await findByUsername(username);
  if (!user) {
    throw new Error('Usuário não encontrado.');
  }
  const users = readFile();
  const filteredUsers = users.filter((u) => u.username !== username);
  writeFile(filteredUsers);
  
};

const listAllUsers = async () => {
  return readFile();
};

module.exports = {
  findByUsername,
  saveUser,
  updateUser,
  deleteUser,
  listAllUsers
}

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '..', 'DataSource', 'opcoesEnquete.json');

// Função para ler o arquivo JSON
const readFile = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

// Função para escrever no arquivo JSON
const writeFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const findOpcaoEnqueteById = async (id) => {
  const Opcoes = readFile();
  return Opcoes.find((opcao) => opcao.id === Number(id)) || null;
};

const saveOpcaoEnquete = async (enquete) => {
  const enquetes = readFile();
  enquetes.push(enquete);
  writeFile(enquetes);
};

const updateOpcaoEnquete = async (id, updatedData) => {
  const OpcoesEnquetes = readFile();
  const index = OpcoesEnquetes.findIndex((opcaoEnquete) => opcaoEnquete.id === Number(id));
  if (index !== -1) {
    OpcoesEnquetes[index] = { ...OpcoesEnquetes[index], ...updatedData };
    writeFile(OpcoesEnquetes);
    return OpcoesEnquetes[index];
  }
  return null;
};

const deleteOpcaoEnquete = async (id) => {
  const opcaoEnquete = await findOpcaoEnqueteById(id);
  if (!opcaoEnquete) {
    throw new Error('Enquete não encontrada.');
  }
  const opcoesEnquetes = readFile();
  const filteredOpcoesEnquetes = opcoesEnquetes.filter((o) => o.id !== Number(id));
  writeFile(filteredOpcoesEnquetes);
};

const listAllOpcaoEnquetes = async () => {
  return readFile();
};

module.exports = {
  findOpcaoEnqueteById,
  saveOpcaoEnquete,
  updateOpcaoEnquete,
  deleteOpcaoEnquete,
  listAllOpcaoEnquetes
}

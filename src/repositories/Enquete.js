const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '..', 'DataSource', 'enquete.json');

// Função para ler o arquivo JSON
const readFile = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

// Função para escrever no arquivo JSON
const writeFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const findEnqueteById = async (id) => {
  const Enquetes = readFile();
  return Enquetes.find((Enquete) => Enquete.id === Number(id)) || null;
};

const saveEnquete = async (enquete) => {
  const enquetes = readFile();
  enquetes.push(enquete);
  writeFile(enquetes);
};

const updateEnquete = async (id, updatedData) => {
  const enquetes = readFile();
  const index = enquetes.findIndex((enquete) => enquete.id === id);
  if (index !== -1) {
    enquetes[index] = { ...enquetes[index], ...updatedData };
    writeFile(enquetes);
    return enquetes[index];
  }
  return null;
};

const deleteEnquete = async (id) => {
  const enquete = await findEnqueteById(id);
  if (!enquete) {
    throw new Error('Enquete não encontrada.');
  }
  const enquetes = readFile();
  const filteredEnquetes = enquetes.filter((e) => e.id !== id);
  writeFile(filteredEnquetes);
  
};

const listAllEnquetes = async () => {
  return readFile();
};

module.exports = {
    findEnqueteById,
    saveEnquete,
    updateEnquete,
    deleteEnquete,
    listAllEnquetes
}

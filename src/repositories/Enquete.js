const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', '..', 'DataSource', 'equete.json');

// Função para ler o arquivo JSON
const readFile = () => {
  const data = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(data);
};

// Função para escrever no arquivo JSON
const writeFile = (data) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

const findEnqueteById = async (Id) => {
  const Enquetes = readFile();
  return Enquetes.find((Enquete) => Enquete.id === Id) || null;
};

module.exports = {
    findEnqueteById
}

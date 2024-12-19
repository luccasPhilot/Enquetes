const enqueteRepository = require('../repositories/Enquete');
const OpcoesEnqueteService = require('../service/OpcoesEnqueteService');

const getEnquete = async (id) => {
    return enqueteRepository.findEnqueteById(id);
}

const createEnquete = async (enquete) => {
    const enquetes = await enqueteRepository.listAllEnquetes()
    const lastEnquete = enquetes.length > 0 ? enquetes[enquetes.length - 1] : null;
    const Id = lastEnquete ? lastEnquete.id + 1 : 1;
    const enqueteId = { id: Id, ...enquete };

    await enqueteRepository.saveEnquete(enqueteId);
    return enqueteId;
};

const updateEnquete = async (id, updatedData) => {
    const enquete = await enqueteRepository.findEnqueteById(id);
    if (!enquete) {
        throw new Error('Enquete não encontrada.');
    }
    if (updatedData.id) {
        throw new Error('Não é permitido alterar o Id da Enquete.');
    }
    return await enqueteRepository.updateEnquete(id, updatedData);
};

const deleteEnquete = async (id) => {
    const enquete = await enqueteRepository.findEnqueteById(id);
    if (!enquete) {
        throw new Error('Enquete não encontrada.');
    }
    enqueteRepository.deleteEnquete(id)
};

const getPaginacaoEnquetes = async (limite, pagina) => {
    const validLimits = [5, 10, 30];
    const parsedLimit = parseInt(limite, 10);
    const parsedPage = parseInt(pagina, 10);

    if (!validLimits.includes(parsedLimit)) {
        throw new Error(`Limite deve ser um dos seguintes valores: ${validLimits.join(", ")}`);
    }

    if (isNaN(parsedPage) || parsedPage < 1) {
        throw new Error("Página deve ser um número maior ou igual a 1.");
    }

    const startIndex = (parsedPage - 1) * parsedLimit;
    const endIndex = startIndex + parsedLimit;

    const allEnquetes = await enqueteRepository.listAllEnquetes();

    return allEnquetes.slice(startIndex, endIndex);
}

const getEnqueteCompleta = async (id) => {
    const enquete = await enqueteRepository.findEnqueteById(id);
    if (!enquete) {
        throw new Error('Enquete não encontrada.');
    }
    const OpcoesEnquete = await OpcoesEnqueteService.listOpcoesEnquetesId(id)
    return {
        ...enquete,
        opcoes: OpcoesEnquete
    };
};

module.exports = {
    getEnquete,
    createEnquete,
    deleteEnquete,
    updateEnquete,
    getPaginacaoEnquetes,
    getEnqueteCompleta
}

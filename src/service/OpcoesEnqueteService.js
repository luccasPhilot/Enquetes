const opcoesEnqueteRepository = require('../repositories/OpcoesEnquete');
const EnquetesRespository = require('../repositories/Enquete');

const getOpcaoEnquete = async (id) => {
    return opcoesEnqueteRepository.findOpcaoEnqueteById(id);
}

const createOpcaoEnquete = async (opcaoEnquete) => {
    const enquete = await EnquetesRespository.findEnqueteById(opcaoEnquete.EnqueteId)
    if (!enquete) {
        throw new Error('Enquete não encontrada!');
    }
    const opcaoEnquetes = await opcoesEnqueteRepository.listAllOpcaoEnquetes()
    const lastOpcaoEnquete = opcaoEnquetes.length > 0 ? opcaoEnquetes[opcaoEnquetes.length - 1] : null;
    const Id = lastOpcaoEnquete ? lastOpcaoEnquete.id + 1 : 1;
    const opcaoEnqueteId = { id: Id, ...opcaoEnquete };

    await opcoesEnqueteRepository.saveOpcaoEnquete(opcaoEnqueteId);
    return opcaoEnqueteId;
};

const updateOpcaoEnquete = async (id, updatedData) => {
    const opcaoEnquetes = await opcoesEnqueteRepository.findOpcaoEnqueteById(id)
    if (updatedData.EnqueteId) {
        const enquete = await EnquetesRespository.findEnqueteById(updatedData.EnqueteId)
        if (!enquete) {
            throw new Error('Enquete não encontrada!');
        }
    }
    if (!opcaoEnquetes) {
        throw new Error('Opção Enquete não encontrada.');
    }
    return await opcoesEnqueteRepository.updateOpcaoEnquete(id, updatedData);
};

const deleteOpcaoEnquete = async (id) => {
    const opcaoEnquete = await opcoesEnqueteRepository.findOpcaoEnqueteById(id);
    if (!opcaoEnquete) {
        throw new Error('Opcao Enquete não encontrada.');
    }
    opcoesEnqueteRepository.deleteOpcaoEnquete(id)
};

const getPaginacaoOpcoesEnquetes = async (limite, pagina) => {
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

    const allOpcoesEnquetes = await opcoesEnqueteRepository.listAllOpcaoEnquetes();

    return allOpcoesEnquetes.slice(startIndex, endIndex);
}

const listOpcoesEnquetesId = async (id) => {
    const allOpcoesEnquetes = await opcoesEnqueteRepository.listAllOpcaoEnquetes();
    const filteredOpcoesEnquetes = allOpcoesEnquetes.filter(opcao => opcao.EnqueteId === Number(id));
    return filteredOpcoesEnquetes;
};

module.exports = {
    getOpcaoEnquete,
    createOpcaoEnquete,
    updateOpcaoEnquete,
    deleteOpcaoEnquete,
    getPaginacaoOpcoesEnquetes,
    listOpcoesEnquetesId
}

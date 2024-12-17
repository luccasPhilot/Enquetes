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

module.exports = {
    getOpcaoEnquete,
    createOpcaoEnquete,
    updateOpcaoEnquete,
    deleteOpcaoEnquete
}

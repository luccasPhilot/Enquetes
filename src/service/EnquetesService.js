const enqueteRepository = require('../repositories/Enquete');

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

module.exports = {
    getEnquete,
    createEnquete,
    deleteEnquete,
    updateEnquete
}

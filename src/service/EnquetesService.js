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
}


module.exports = {
    getEnquete,
    createEnquete
}

const enqueteRepository = require('../repositories/Enquete');

const getEnquete = async (id) =>{
    return enqueteRepository.findEnqueteById(id);
}



module.exports = {
    getEnquete,
}

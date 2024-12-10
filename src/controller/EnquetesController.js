const enqueteService = require('../service/EnquetesService');

const getEnquete = async (req, res) => {
    try {
        const { id } = req.params;
        const enquete = await enqueteService.getEnquete(id);
        if (!enquete) {
            return res.status(404).json({ message: 'Enquete não encontrada.' })
        }
        res.status(200).json(enquete)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getEnquete
}



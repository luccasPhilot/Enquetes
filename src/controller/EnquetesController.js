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

const createEnquete = async (req, res) => {
    try {
        const enquete = req.body;
        const createEnquete = await enqueteService.createEnquete(enquete);
        res.status(200).json(createEnquete);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateEnquete = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedEnquete = await enqueteService.updateEnquete(id, updatedData);
        if (!updatedEnquete) {
            return res.status(404).json({ message: 'Enquete não encontrada.' });
        }
        res.status(200).json(updatedEnquete);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteEnquete = async (req, res) => {
    try {
        const { id } = req.params;
        await enqueteService.deleteEnquete(id);
        res.status(200).send({ mesage: `Enquete '${id}' foi deletada com sucesso.` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listEnquetesPaginacao = async (req, res) => {
    try {
        const { limite, pagina } = req.query;

        const result = await enqueteService.getPaginacaoEnquetes(limite, pagina);

        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const listarEnqueteCompleta = async (req, res) => {
    try {
        const { id } = req.params;
        const enqueteCompleta = await enqueteService.getEnqueteCompleta(id);
        if (!enqueteCompleta) {
            return res.status(404).json({ message: 'Enquete não encontrada.' })
        }
        res.status(200).json(enqueteCompleta)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = {
    getEnquete,
    createEnquete,
    updateEnquete,
    deleteEnquete,
    listEnquetesPaginacao,
    listarEnqueteCompleta
}



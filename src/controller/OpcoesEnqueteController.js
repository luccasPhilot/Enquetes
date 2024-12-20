const OpcoesEnqueteService = require('../service/OpcoesEnqueteService');

const getOpcaoEnquete = async (req, res) => {
    try {
        const { id } = req.params;
        const opcaoEnquete = await OpcoesEnqueteService.getOpcaoEnquete(id);
        if (!opcaoEnquete) {
            return res.status(404).json({ message: 'Opção Enquete não encontrada.' })
        }
        res.status(200).json(opcaoEnquete)

    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}

const createOpcaoEnquete = async (req, res) => {
    try {
        const opcaoEnquete = req.body;
        const createOpcaoEnquete = await OpcoesEnqueteService.createOpcaoEnquete(opcaoEnquete);
        res.status(201).json(createOpcaoEnquete);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

const updateOpcaoEnquete = async (req, res) => {
    try {
        const { id } = req.params;
        const updatedData = req.body;
        const updatedEnquete = await OpcoesEnqueteService.updateOpcaoEnquete(id, updatedData);
        if (!updatedEnquete) {
            return res.status(404).json({ message: 'Enquete não encontrada.' });
        }
        res.status(200).json(updatedEnquete);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteOpcaoEnquete = async (req, res) => {
    try {
        const { id } = req.params;
        await OpcoesEnqueteService.deleteOpcaoEnquete(id)
        res.status(200).send({ mesage: `Opcao Enquete '${id}' foi deletada com sucesso.` });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const listOpcoesEnquetesPaginacao = async (req, res) => {
    try {
        const { limite, pagina } = req.query;

        const result = await OpcoesEnqueteService.getPaginacaoOpcoesEnquetes(limite, pagina);

        res.status(200).json(result);
    } catch (error) {
        res.status(404).json({ error: error.message });
    }
}

module.exports = {
    getOpcaoEnquete,
    createOpcaoEnquete,
    updateOpcaoEnquete,
    deleteOpcaoEnquete,
    listOpcoesEnquetesPaginacao
}



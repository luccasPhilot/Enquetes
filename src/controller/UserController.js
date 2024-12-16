const userService = require('../service/UserService');

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await userService.createUser(user, req.userTipo);
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userService.getUser(username, req.userId, req.userTipo);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        if (user === 1) {
            return res.status(404).json({ message: 'Permissão negada, você não tem permissão para visualizar outro usuário' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const { username } = req.params;
        const updatedData = req.body;
        const updatedUser = await userService.updateUser(username, updatedData, req.userId, req.userTipo);
        if (!updatedUser) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
        }
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const { username } = req.params;
        await userService.deleteUser(username, req.userId, req.userTipo);
        res.status(200).send({mesage: `Usuário '${username}' foi deletado com sucesso.`});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createUser,
    getUser,
    updateUser,
    deleteUser,
};

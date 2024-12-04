const userService = require('../service/UserService');

const createUser = async (req, res) => {
    try {
        const user = req.body;
        const createdUser = await userService.createUser(user, req.userId, req.userTipo);
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUser = async (req, res) => {
    try {
        const { username } = req.params;
        const user = await userService.getUser(username);
        if (!user) {
            return res.status(404).json({ message: 'Usuário não encontrado.' });
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
        res.status(204).send();
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

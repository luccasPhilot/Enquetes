/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Gerenciamento de usuários
 */

/**
 * @swagger
 * /User/{username}:
 *   get:
 *     summary: Retorna um usuário pelo username
 *     tags: [Users]
 *     parameters:
 *       - name: username
 *         in: path
 *         required: true
 *         description: Username do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados do usuário
 *       404:
 *         description: Usuário não encontrado
 */

/**
/**
 * @swagger
 * /User:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: [] # Este nome deve coincidir com o definido no swagger.js
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *               tipo:
 *                 type: string
 *               email:
 *                 type: string
 *               cidade:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       401:
 *         description: Token inválido ou não fornecido
 *       400:
 *         description: Erro ao criar usuário
 */

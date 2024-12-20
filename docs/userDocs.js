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
 *     security:
 *       - bearerAuth: []
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
 *       500:
 *         description: Token inválido ou não fornecido
 */

/**
 * @swagger
 * /User/{username}:
 *   put:
 *     summary: Atualiza os dados de um usuário específico.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: username
 *         in: path
 *         required: true
 *         description: Username do usuário a ser atualizado.
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         description: Dados do usuário que serão atualizados.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             username:
 *               type: string
 *               description: Novo nome de usuário.
 *             password:
 *               type: string
 *               description: Nova senha do usuário.
 *             email:
 *               type: string
 *               description: Novo e-mail do usuário.
 *             cidade:
 *               type: string
 *               description: Nova cidade do usuário.
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 password:
 *                   type: string
 *                 tipo:
 *                   type: string
 *                 email:
 *                   type: string
 *                 cidade:
 *                   type: string
 * 
 *       400:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Token inválido ou não fornecido
 */

/**
/**
 * @swagger
 * /User:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
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
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                 password:
 *                   type: string
 *                 tipo:
 *                   type: string
 *                 email:
 *                   type: string
 *                 cidade:
 *                   type: string
 *       400:
 *         description: Erro ao criar usuário
 *       500:
 *         description: Token inválido ou não fornecido
 */

/**
 * @swagger
 * /User/{username}:
 *   delete:
 *     summary: Exclui um usuário pelo username.
 *     tags: [Users]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: username
 *         in: path
 *         required: true
 *         description: Username do usuário a ser excluído.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário deletado com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Usuário '{username}' foi deletado com sucesso.
 *       400:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       404:
 *         description: Usuário não encontrado.
 *       500:
 *         description: Token inválido ou não fornecido
 */
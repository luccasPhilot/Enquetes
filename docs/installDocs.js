/**
 * @swagger
 * tags:
 *   name: Install
 *   description: Configuração inicial do sistema
 *
 * /install:
 *   get:
 *     summary: Cria um usuário administrador padrão
 *     tags: [Install]
 *     responses:
 *       201:
 *         description: Usuário administrador criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 username:
 *                   type: string
 *                   example: administrador
 *                 password:
 *                   type: string
 *                   example: 1234
 *                 tipo:
 *                   type: string
 *                   example: admin
 *                 email:
 *                   type: string
 *                   example: teste@teste.com
 *                 cidade:
 *                   type: string
 *                   example: teste
 *       400:
 *         description: Erro na criação do usuário
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro: Usuário já existe."
 */
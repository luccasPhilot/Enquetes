/**
 * @swagger
 * tags:
 *   name: Enquetes
 *   description: Gerenciamento de Enquetes
 */

/**
 * @swagger
 * /Enquetes/{id}:
 *   get:
 *     summary: Retorna uma enquete pelo id
 *     tags: [Enquetes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Id da enquete
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Dados da enquete
 *       400:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       404:
 *         description: Enquete não encontrada
 */

/**
 * @swagger
 * /Enquetes/{id}:
 *   put:
 *     summary: Atualiza os dados de uma enquete específica pelo id.
 *     tags: [Enquetes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: Id da enquete a ser atualizada.
 *         schema:
 *           type: string
 *       - in: body
 *         name: body
 *         description: Dados da enquete que serão atualizados.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             titulo:
 *               type: string
 *               description: Título da Enquete.
 *             descricao:
 *               type: string
 *               description: Corpo da Enquete.
 *     responses:
 *       200:
 *         description: Enquete atualizada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 titulo:
 *                   type: string
 *                 descricao:
 *                   type: string
 * 
 *       400:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       404:
 *         description: Enquete não encontrada.
 *       500:
 *         description: Token inválido ou não fornecido
 */

/**
 * @swagger
 * /Enquetes:
 *   post:
 *     summary: Cria uma nova enquete
 *     tags: [Enquetes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               titulo:
 *                 type: string
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Enquete criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                 titulo:
 *                   type: string
 *                 descricao:
 *                   type: string
 *       400:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       500:
 *         description: Token inválido ou não fornecido
 */

/**
 * @swagger
 * /Enquetes/{id}:
 *   delete:
 *     summary: Exclui uma enquete pelo id.
 *     tags: [Enquetes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: id da enquete a ser excluída.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Enquete deletada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Enquete '{id}' foi deletada com sucesso.
 *       400:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       500:
 *         description: Token inválido ou não fornecido
 */

/**
 * @swagger
 * /Enquetes/:
 *   get:
 *     summary: Retorna todas as enquetes com paginação.
 *     tags: [Enquetes]
 *     parameters:
 *       - name: limite
 *         in: query
 *         required: false
 *         description: Número máximo de enquetes por página.
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: pagina
 *         in: query
 *         required: false
 *         description: Número da página a ser retornada.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Dados das enquetes.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   titulo:
 *                     type: string
 *                     example: "string"
 *                   descricao:
 *                     type: string
 *                     example: "string"
 *       400:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 */

/**
 * @swagger
 * /EnqueteCompleta/{id}:
 *   get:
 *     summary: Retorna os detalhes completos de uma enquete, incluindo suas opções.
 *     tags: [Enquetes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da enquete a ser retornada.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Detalhes completos da enquete.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID da enquete.
 *                   example: 1
 *                 titulo:
 *                   type: string
 *                   description: Título da enquete.
 *                   example: "Qual é sua cor favorita?"
 *                 descricao:
 *                   type: string
 *                   description: Descrição da enquete.
 *                   example: "Escolha uma das opções abaixo."
 *                 opcoes:
 *                   type: array
 *                   description: Lista de opções da enquete.
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         description: ID da opção.
 *                         example: 101
 *                       EnqueteId:
 *                         type: integer
 *                         description: ID da opção.
 *                         example: 1
 *                       descricao:
 *                         type: string
 *                         description: Descrição da opção.
 *                         example: "Azul"
 *       404:
 *         description: Enquete não encontrada.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Enquete não encontrada."
 *       400:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Erro ao processar a solicitação."
 */

/**
 * @swagger
 * tags:
 *   name: OpcoesEnquetes
 *   description: Gerenciamento de Opcoes das Enquetes
 */

/**
 * @swagger
 * /OpcoesEnquete/{id}:
 *   get:
 *     summary: Retorna uma opção de enquete pelo ID.
 *     tags: [OpcoesEnquetes]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da opção de enquete.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Detalhes da opção de enquete.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   example: 1
 *                 EnqueteId:
 *                   type: integer
 *                   example: 2
 *                 opcao:
 *                   type: string
 *                   example: "Opção A"
 *       404:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       400:
 *         description: Erro na solicitação.
 */

/**
 * @swagger
 * /OpcoesEnquete:
 *   post:
 *     summary: Cria uma nova opção para uma enquete.
 *     tags: [OpcoesEnquetes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               EnqueteId:
 *                 type: integer
 *                 example: 2
 *               opcao:
 *                 type: string
 *                 example: "Nova Opção"
 *     responses:
 *       201:
 *         description: Opção de enquete criada com sucesso.
 *       404:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 */

/**
 * @swagger
 * /OpcoesEnquete/{id}:
 *   put:
 *     summary: Atualiza uma opção de enquete existente.
 *     tags: [OpcoesEnquetes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da opção de enquete.
 *         schema:
 *           type: integer
 *           example: 1
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               EnqueteId:
 *                 type: integer
 *                 example: 2
 *               opcao:
 *                 type: string
 *                 example: "Opção Atualizada"
 *     responses:
 *       200:
 *         description: Opção de enquete atualizada com sucesso.
 *       404:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       400:
 *         description: Erro na atualização da opção de enquete.
 */

/**
 * @swagger
 * /OpcoesEnquete/{id}:
 *   delete:
 *     summary: Remove uma opção de enquete pelo ID.
 *     tags: [OpcoesEnquetes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da opção de enquete.
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Opcao Enquete deletada com sucesso.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Opcao Enquete '{id}' foi deletada com sucesso.
 *       404:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 *       400:
 *         description: Erro ao tentar remover a opção de enquete.
 */

/**
 * @swagger
 * /OpcoesEnquete:
 *   get:
 *     summary: Lista opções de enquetes com paginação.
 *     tags: [OpcoesEnquetes]
 *     parameters:
 *       - name: limite
 *         in: query
 *         required: false
 *         description: Número máximo de registros por página (5, 10 ou 30).
 *         schema:
 *           type: integer
 *           example: 10
 *       - name: pagina
 *         in: query
 *         required: false
 *         description: Número da página (inicia em 1).
 *         schema:
 *           type: integer
 *           example: 1
 *     responses:
 *       200:
 *         description: Lista paginada de opções de enquetes.
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
 *                   EnqueteId:
 *                     type: integer
 *                     example: 2
 *                   opcao:
 *                     type: string
 *                     example: "Opção A"
 *       404:
 *         description: Dados inválidos ou erro no processamento da solicitação.
 */

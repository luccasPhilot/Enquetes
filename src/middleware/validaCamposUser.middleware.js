const validarCamposUsuario = (camposObrigatorios) => (req, res, next) => {
    const user = req.body;
  
    // Verificar se todos os campos obrigatórios estão presentes
    const camposFaltantes = camposObrigatorios.filter(field => !user[field]);
    if (camposFaltantes.length > 0) {
      return res.status(400).json({
        error: `Os seguintes campos são obrigatórios: ${camposFaltantes.join(', ')}`
      });
    }
  
    // Verificar se há campos adicionais não permitidos
    const camposAdicionais = Object.keys(user).filter(field => !camposObrigatorios.includes(field));
    if (camposAdicionais.length > 0) {
      return res.status(400).json({
        error: `Os seguintes campos não são permitidos: ${camposAdicionais.join(', ')}`
      });
    }
  
    next();
  };

  module.exports = {
    validarCamposUsuario,
};
  
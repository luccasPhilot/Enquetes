// Middleware para validar o email
function validateEmail(req, res, next) {
    const { email } = req.body;

    // Expressão regular para validar o formato do email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        return res.status(400).json({ error: "O campo 'email' deve ser um endereço de email válido." });
    }
    next();
}

module.exports = {
    validateEmail
} 
    

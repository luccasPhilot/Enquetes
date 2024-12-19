const express = require("express")
require('dotenv').config();
const app = express()

const authService = require('./src/routes/Auth.routes')
const UserService = require('./src/routes/User.routes')
const EnqueteService = require('./src/routes/Enquetes.routes')
const OpcoesEnqueteService = require('./src/routes/OpcoesEnquete.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/Auth", authService)
app.use("/User", UserService)
app.use("/Enquetes", EnqueteService)
app.use("/OpcoesEnquete", OpcoesEnqueteService)


const userService = require('./src/service/UserService');
app.get("/install", async (req, res) => {
    user = { "username": "administrador", "password": "1234", "tipo": "admin", "email": "teste@teste.com", "cidade": "teste" }
    try {
        const createdUser = await userService.createUser(user, "admin");
        res.status(201).json(createdUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
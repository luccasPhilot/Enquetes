const express = require("express")
require('dotenv').config();
const app = express()

const authService = require('./src/routes/Auth.routes')

app.use(express())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/Auth", authService)

app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
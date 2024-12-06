const express = require("express")
require('dotenv').config();
const app = express()

const authService = require('./src/routes/Auth.routes')
const UserService = require('./src/routes/User.routes')
const EnqueteService = require('./src/routes/Enquetes.routes')

app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/Auth", authService)
app.use("/User", UserService)
app.use("/Enquetes", EnqueteService)


app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando em http://localhost:${process.env.PORT}`);
});
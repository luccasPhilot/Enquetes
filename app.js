const express = require("express")
const app = express()
const PORT = 8080

const authService = require('./src/routes/Auth.routes')

app.use(express())
app.use(express.json())
app.use(express.urlencoded({ extended: false }));

app.use("/Auth", authService)

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
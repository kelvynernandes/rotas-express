import express from "express";

const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Olá, mundo!");
});

//método listen tem que ficar por último, depois das requisições http criadas
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});


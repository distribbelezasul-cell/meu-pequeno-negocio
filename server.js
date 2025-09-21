// Importa o express
const express = require("express");
const app = express();

// Define a porta
const PORT = process.env.PORT || 3000;

// Rota principal
app.get("/", (req, res) => {
  res.send("Bem-vindo ao Meu Pequeno Negócio!");
});

// Inicia o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

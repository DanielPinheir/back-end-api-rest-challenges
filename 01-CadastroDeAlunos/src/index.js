const express = require("express");
const routes = require("./Route/rotas");

const { validarSenha } = require("./intermediarios");

const app = express();

app.use(validarSenha);
app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Servidor inicializado na porta 3000.");
});

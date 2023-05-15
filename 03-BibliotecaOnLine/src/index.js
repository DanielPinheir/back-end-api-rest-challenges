const express = require("express");
const router = require("./Routes/rotas");

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("Servidor inicializado na porta 3000.");
});

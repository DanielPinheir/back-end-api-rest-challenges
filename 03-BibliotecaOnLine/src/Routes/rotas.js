const express = require("express");
const {
  consultarLivros,
  consultaLivroPeloId,
  adicionarUmLivro,
  substituirLivro,
  atualizarLivro,
} = require("../Controller/livros");

const route = express.Router();

route.get("/livros", consultarLivros);
route.get("/livros/:id", consultaLivroPeloId);
route.post("/livros", adicionarUmLivro);
route.put("/livros/:id", substituirLivro);
route.patch("/livros/:id", atualizarLivro);

module.exports = route;

const express = require("express");
const {
  consultarLivros,
  consultaLivroPeloId,
  adicionarUmLivro,
  substituirLivro,
  atualizarLivro,
  deletarLivro,
} = require("../Controller/livros");

const route = express.Router();

route.get("/livros", consultarLivros);
route.get("/livros/:id", consultaLivroPeloId);
route.post("/livros", adicionarUmLivro);
route.put("/livros/:id", substituirLivro);
route.patch("/livros/:id", atualizarLivro);
route.delete("/livros/:id", deletarLivro);

module.exports = route;

const express = require("express");

const {
  consultarListaDeConvidados,
  adicionarConvidadoNaLista,
  removerConvidadoDaLista,
} = require("../Controller/convidados");

const router = express.Router();

router.get("/convidados", consultarListaDeConvidados);
router.post("/convidados", adicionarConvidadoNaLista);
router.delete("/convidados/:nome", removerConvidadoDaLista);

module.exports = router;

const express = require("express");

const {
  listarAlunos,
  pegarAluno,
  cadastrarAluno,
  deletarAluno,
  atualizarAluno,
  atualizarAlunoCurso,
} = require("../Controllers/alunos");

const router = express.Router();

router.get("/alunos", listarAlunos);
router.get("/alunos/:id", pegarAluno);
router.post("/alunos", cadastrarAluno);
router.put("/alunos/:id", atualizarAluno);
router.patch("/alunos/:id/curso", atualizarAlunoCurso);
router.delete("/alunos/:id", deletarAluno);

module.exports = router;

const expres = require("express");
const {
  listarInstrutores,
  obterInstrutor,
  cadastrarInstrutor,
  atualizarInstrutor,
  atualizarStatusInstrutor,
  deletarInstrutor,
} = require("../Controllers/instrutores");

const {
  cadastrarAula,
  listarAulas,
  pegarAula,
  listarAulasInstrutor,
} = require("../Controllers/aulas");

const router = expres.Router();

router.get("/instrutores", listarInstrutores);
router.get("/instrutores/:id", obterInstrutor);
router.post("/instrutores", cadastrarInstrutor);
router.put("/instrutores/:id", atualizarInstrutor);
router.patch("/instrutores/:id/status", atualizarStatusInstrutor);
router.delete("/instrutores/:id", deletarInstrutor);

router.post("/instrutores/:idInstrutor/aulas", cadastrarAula);
router.get("/aulas", listarAulas);
router.get("/aulas/:id", pegarAula);
router.get("/instrutores/:idInstrutor/aulas", listarAulasInstrutor);

module.exports = router;

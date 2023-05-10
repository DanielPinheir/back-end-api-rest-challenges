let { instrutores, identificadorAula, aulas } = require("../Data/bancoDeDados");

//POST
const cadastrarAula = (req, res) => {
  const { idInstrutor } = req.params;
  const { titulo, descricao } = req.body;

  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(idInstrutor)
  );
  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor inexistente." });
  }

  if (!titulo) {
    return res.status(400).json({ mensagem: "O título é obrigatório." });
  }

  if (!descricao) {
    return res.status(400).json({ mensagem: "A descrição é obrigatória." });
  }

  const aula = {
    id: identificadorAula++,
    instrutor_id: Number(idInstrutor),
    titulo,
    descricao,
  };

  aulas.push(aula);

  return res.status(201).json(aula);
};

//GET
const listarAulas = (req, res) => {
  return res.status(200).json(aulas);
};

const pegarAula = (req, res) => {
  const { id } = req.params;

  const aula = aulas.find((aula) => aula.id === Number(id));

  if (!aula) {
    return res.status(404).json({ mensagem: "Aula inexistente." });
  }

  return res.status(200).json(aula);
};

const listarAulasInstrutor = (req, res) => {
  const { idInstrutor } = req.params;
  const instrutor = instrutores.find(
    (instrutor) => instrutor.id === Number(idInstrutor)
  );

  if (!instrutor) {
    return res.status(404).json({ mensagem: "Instrutor inexistente." });
  }

  const aulasInstrutor = aulas.filter(
    (aula) => aula.instrutor_id === Number(idInstrutor)
  );

  return !aulasInstrutor
    ? res
        .status(404)
        .json({ mensagem: "Instrutor não possui aulas cadastradas." })
    : res.status(200).json(aulasInstrutor);
};

module.exports = {
  cadastrarAula,
  listarAulas,
  pegarAula,
  listarAulasInstrutor,
};

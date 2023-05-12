let alunos = require("../Data/alunos_bd");
let cursos = require("../Data/cursos");

//GET
const listarAlunos = (req, res) => {
  return res.status(200).json(alunos);
};

const pegarAluno = (req, res) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "O ID deve ser um número válido." });
  }

  const aluno = alunos.find((aluno) => Number(aluno.id) === Number(id));

  if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado." });
  }
  return res.status(200).json(aluno);
};

//POST
const cadastrarAluno = (req, res) => {
  const { nome, sobrenome, idade, curso } = req.body;

  if (!nome || nome === "") {
    return res.status(400).json({ mensagem: "O nome é obrigatório." });
  }
  if (!sobrenome || sobrenome === "") {
    return res.status(400).json({ mensagem: "O sobrenome é obrigatório." });
  }
  if (!curso || curso === "") {
    return res.status(400).json({ mensagem: "O curso é obrigatório." });
  }
  if (!cursos.includes(curso)) {
    return res.status(400).json({ mensagem: "O curso não existe." });
  }
  if (!idade) {
    return res.status(400).json({ mensagem: "A idade é obrigatória." });
  }
  if (idade < 18) {
    return res.status(400).json({ mensagem: "A idade deve ser maior que 18." });
  }

  const aluno = {
    id: alunos.length + 1,
    nome,
    sobrenome,
    idade,
    curso,
  };

  alunos.push(aluno);

  return res.status(201).send();
};

//PUT
const atualizarAluno = (req, res) => {
  const { id } = req.params;
  const { nome, sobrenome, idade, curso } = req.body;

  if (!nome || nome === "") {
    return res.status(400).json({ mensagem: "O nome é obrigatório." });
  }
  if (!sobrenome || sobrenome === "") {
    return res.status(400).json({ mensagem: "O sobrenome é obrigatório." });
  }
  if (!curso || curso === "") {
    return res.status(400).json({ mensagem: "O curso é obrigatório." });
  }
  if (!cursos.includes(curso)) {
    return res.status(400).json({ mensagem: "O curso não existe." });
  }
  if (!idade) {
    return res.status(400).json({ mensagem: "A idade é obrigatória." });
  }
  if (idade < 18) {
    return res.status(400).json({ mensagem: "A idade deve ser maior que 18." });
  }

  const aluno = alunos.find((aluno) => Number(aluno.id) === Number(id));

  if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado." });
  }

  aluno.nome = nome;
  aluno.sobrenome = sobrenome;
  aluno.idade = Number(idade);
  aluno.curso = curso;

  return res.status(204).send();
};

//PATCH
const atualizarAlunoCurso = (req, res) => {
  const { id } = req.params;
  const { curso } = req.body;

  if (!curso || curso === "") {
    return res.status(400).json({ mensagem: "O curso é obrigatório." });
  }
  if (!cursos.includes(curso)) {
    return res.status(400).json({ mensagem: "O curso não existe." });
  }

  const aluno = alunos.find((aluno) => Number(aluno.id) === Number(id));

  if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado." });
  }

  aluno.curso = curso;

  return res.status(204).send();
};

//DELETE
const deletarAluno = (req, res) => {
  const { id } = req.params;
  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "O ID deve ser um número válido." });
  }

  const aluno = alunos.find((aluno) => aluno.id === Number(id));
  if (!aluno) {
    return res.status(404).json({ mensagem: "Aluno não encontrado." });
  } else {
    alunos = alunos.filter((aluno) => aluno.id !== Number(id));
    return res.status(200).json(aluno);
  }
};

module.exports = {
  listarAlunos,
  pegarAluno,
  cadastrarAluno,
  deletarAluno,
  atualizarAluno,
  atualizarAlunoCurso,
};

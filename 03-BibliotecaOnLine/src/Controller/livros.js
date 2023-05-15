let livros = require("../Data/livros_bd");

//GET
const consultarLivros = (req, res) => {
  return res.status(200).json(livros);
};

const consultaLivroPeloId = (req, res) => {
  const { id } = req.params;
  const livro = livros.find((livro) => Number(livro.id) === Number(id));

  if (isNaN(id)) {
    return res.status(404).json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido.",
    });
  }
  if (!livro) {
    return res.status(404).json({
      mensagem: "O valor do parâmetro ID da URL não é um número válido.",
    });
  } else {
    return res.status(200).json(livro);
  }
};

//POST

const adicionarUmLivro = (req, res) => {
  const { titulo, autor, ano, numPaginas } = req.body;

  if (!titulo) {
    return res.status(404).json({ mensagem: "Titulo do livro é obrigatório" });
  }
  if (!autor) {
    return res.status(404).json({ mensagem: "Autor do livro é obrigatório" });
  }

  const livro = {
    id: livros.length + 1,
    titulo,
    autor,
    ano,
    numPaginas,
  };

  livros.push(livro);

  return res.status(201).json(livro);
};

//PUT
const substituirLivro = (req, res) => {
  const id = Number(req.params.id);
  const livroAtualizado = req.body;

  if (!livroAtualizado.titulo) {
    return res.status(404).json({ mensagem: "Titulo do livro é obrigatório" });
  }
  if (!livroAtualizado.autor) {
    return res.status(404).json({ mensagem: "Autor do livro é obrigatório" });
  }

  const livroIndex = livros.findIndex((livro) => livro.id === id);

  if (livroIndex === -1) {
    return res.status(404).json({
      mensagem: "Não existe livro a ser substituído para o ID informado.",
    });
  } else {
    livros[livroIndex] = { ...livros[livroIndex], ...livroAtualizado };
    res.status(200).json({ mensagem: "Livro substituído." });
  }
};

//PATCH
const atualizarLivro = (req, res) => {
  const id = Number(req.params.id);
  const propriedadeAtualizada = req.body;

  const livroSelecionado = livros.find((livro) => Number(livro.id) === id);

  if (!livroSelecionado) {
    return res.status(404).json({
      mensagem: "Não existe livro a ser alterado para o ID informado.",
    });
  }

  for (let propriedade in propriedadeAtualizada) {
    if (propriedade !== "id") {
      livroSelecionado[propriedade] = propriedadeAtualizada[propriedade];
    }
  }

  return res.json({ mensagem: "Livro alterado." });
};

module.exports = {
  consultarLivros,
  consultaLivroPeloId,
  adicionarUmLivro,
  substituirLivro,
  atualizarLivro,
};

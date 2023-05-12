let convidados = require("../Data/convidados");

//GET
const consultarListaDeConvidados = (req, res) => {
  const { nome } = req.query;
  if (!nome) {
    return res.status(200).json(convidados);
  }
  if (convidados.includes(nome)) {
    return res.status(200).json({ mensagem: "Convidado presente." });
  } else {
    return res
      .status(200)
      .json({ mensagem: "O convidado buscado não está presente na lista." });
  }
};

//POST
const adicionarConvidadoNaLista = (req, res) => {
  const { nome } = req.body;
  if (!nome) {
    return res.status(404).json({ mensagem: "Nome inexistente." });
  }
  if (convidados.includes(nome)) {
    return res.status(404).json({
      mensagem:
        "O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.",
    });
  } else {
    convidados.push(nome);
    return res.status(201).json({ mensagem: "Convidado adicionado." });
  }
};

//DELETE
const removerConvidadoDaLista = (req, res) => {
  const { nome } = req.params;
  const index = convidados.indexOf(nome);

  if (index === -1) {
    return res.status(404).json({
      mensagem:
        "O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.",
    });
  } else {
    convidados.splice(convidados.indexOf(nome), 1);
    return res.json({ mensagem: "Convidado removido." });
  }
};

module.exports = {
  consultarListaDeConvidados,
  adicionarConvidadoNaLista,
  removerConvidadoDaLista,
};

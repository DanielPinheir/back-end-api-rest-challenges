const validarSenha = (req, res, next) => {
  const { senha } = req.query;

  if (!senha) {
    return res.send("A senha não foi informada.");
  }
  if (senha !== "cubos123") {
    return res.status(401).json({ mensagem: "A senha está incorreta." });
  }
  next();
};

module.exports = {
  validarSenha,
};

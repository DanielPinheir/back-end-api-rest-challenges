const bancoDeDados = {
  identificadorInstrutor: 3,
  identificadorAula: 2,
  instrutores: [
    {
      id: 1,
      nome: "João",
      email: "joao@email.com",
      status: true,
    },
    {
      id: 2,
      nome: "Dani",
      email: "dani@email.com",
      status: true,
    },
  ],
  aulas: [
    {
      id: 1,
      instrutor_id: 1,
      titulo: "API Rest",
      descricao: "Construindo primeira API",
    },
  ],
};

module.exports = bancoDeDados;

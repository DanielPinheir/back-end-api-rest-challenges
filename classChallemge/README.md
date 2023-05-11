# Implementação da API da Cubos Academy

> Implemente os endpoints abaixo, com suas respectivas regras de negócio com relação a instrutores:

- GET /instrutores

  - Deve listar todos os instrutores

- GET /instrutores/:id

  - Deve pegar apenas um instrutor

- POST /instrutores

  - Deve cadstrar um instrutor

- PUT /instrutores/:id

  - Deve atualizar todos os dados de um instrutor

- PATCH /instrutores/:id/status

  - Deve atualizar o status de um instrutor

- DELETE /instrutores/:id
  - Deve delatar um instrutor

> Implemente os endpoints abaixo, com suas respectivas regras de negócio com relação a aulas:

- POST /instrutores/:idInstrutor/aulas

  - Deve cadastrar uma aula para um instrutor específico. As informações da aula precisam ter, no mínimo, os campos TITULO e DESCRIÇÃO.

- GET /aulas

  - Deve listar todas as aulas da coleção.

- GET /aulas/:id

  - Deve detalhar as informações de uma aula.

- GET /instrutores/:idInstrutor/aulas
  - Deve listar todas as aulas de um instrutor

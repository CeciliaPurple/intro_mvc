const alunos = [
    {
      nome: "chico melato",
      notas: {
        backend_1: [7, 8.5, 9, 6.5],
        frontend_2: [2, 2, 2, 2],
        bancodados: [2, 2, 3, 3],
        ferramentas: [3, 3, 3, 3],
      },
    },
    {
      nome: "talita lima",
      notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [4, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
    {
      nome: "fulano da silva",
      notas: {
        backend_1: [4, 4, 4, 4],
        frontend_2: [4, 4, 5, 5],
        bancodados: [5, 5, 6, 6],
        ferramentas: [7, 7, 8, 9],
      },
    },
  ];

const alunoService = new AlunoService()

alunos.forEach(aluno => {
   alunoService.add(new AlunoModel(aluno))
})

  const AlunoView = new AlunoView(document.querySelector('[data-table-alunos'))
  const AlunoController = new alunoController(alunoService, alunoView)
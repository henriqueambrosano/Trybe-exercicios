// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  // Implemente seu código aqui
  const myIds = [];
  professionalBoard.forEach((obj) => {
    myIds.push(obj['id']);
  });
  if (myIds.indexOf(id) === -1) throw new Error('ID não identificada');
  for (let employee of professionalBoard) {
    if (employee['id'] === id) {
      if (employee[detail] === undefined) throw new Error('Informação indisponível');
      return employee[detail];
    }
  }
};

console.log(searchEmployee('4678-2', 'firstName'));

describe('Testa a função searchEmployee', () => {
  it('Verifica se a função existe', () => {
    expect(searchEmployee).toBeDefined();
  });

  it('Verifica se ao inserir um ID inexistente, retorna um erro com a mensagem "ID não identificada"', () => {
    expect(() => {
      searchEmployee('155885', 'firstName');
    }).toThrowError(new Error('ID não identificada'));
  });

  it('Verifica se ao buscar por uma informação nao existente, retorna um erro com a mensagem "Informação indisponível"', () => {
    expect(() => {
      searchEmployee('4678-2', 'inforQualquer');
    }).toThrowError(new Error('Informação indisponível'));
  });

  it('Verifica se a função retorna a informação correta', () => {
    expect(searchEmployee('4678-2', 'firstName')).toEqual('Paul');
  });
});

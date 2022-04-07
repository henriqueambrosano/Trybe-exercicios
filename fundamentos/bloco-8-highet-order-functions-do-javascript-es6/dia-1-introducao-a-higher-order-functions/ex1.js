const nameEmail = (nome) => ({
  nomeCompleto: nome,
  email: `${nome.split(' ').join('_')}@trybe.com`,
});

const newEmployees = (myFunc) => {
  const employees = {
    id1: myFunc('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: myFunc('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: myFunc('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  };
  return employees;
};

const checkResult = (bet, result) =>
  bet === result ? 'Parabéns voce ganhou' : 'Tente novamente';

const generateNum = (bet, myFunc) => {
  const randomNum = Math.floor(Math.random() * 6);
  console.log(myFunc(bet, randomNum));
};

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const checkAnswers = (result, student) => {
  let score = 0;
  for (let i = 0; i < student.length; i += 1) {
    if (student[i] === 'N.A') {
      score += 0;
    } else if (student[i] === result[i]) {
      score += 1;
    } else {
      score -= 0.5;
    }
  }
  return score;
};

const printResult = (result, studentAnswer, myFunc) => {
  console.log(myFunc(result, studentAnswer));
};

printResult(RIGHT_ANSWERS, STUDENT_ANSWERS, checkAnswers);

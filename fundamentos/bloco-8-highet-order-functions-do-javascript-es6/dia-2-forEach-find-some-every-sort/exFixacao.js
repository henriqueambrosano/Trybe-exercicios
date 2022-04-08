const emailListInData = [
  'roberta@email.com',
  'paulo@email.com',
  'anaroberta@email.com',
  'fabiano@email.com',
];

const showEmailList = (email, index, arr) => {
  console.log(`O email ${email} esta cadastrado em nosso banco de dados!`);
  emailListInData[index] = 'SUCK MY DICK';
  console.log(arr);
};

// Adicione seu código aqui

const numbers = [19, 21, 30, 3, 45, 22, 15];

const findDivisibleBy3And5 = (num) => num % 3 === 0 && num % 5 === 0;

console.log(numbers.find(findDivisibleBy3And5));

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (name) => name.length === 5;

console.log(names.find(findNameWithFiveLetters));

const musicas = [
  { id: '31031685', title: 'Partita in C moll BWV 997' },
  { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
  { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
];

const findMusic = (music) => music.id === '31031685';

console.log(musicas.find(findMusic));

const names1 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => arr.some((item) => item === name);

console.log(hasName(names1, 'Ana'));

const people = [
  { name: 'Mateus', age: 18 },
  { name: 'José', age: 16 },
  { name: 'Ana', age: 23 },
  { name: 'Cláudia', age: 20 },
  { name: 'Bruna', age: 19 },
];

const verifyAges = (arr, minimumAge) =>
  arr.every((item) => item.age >= minimumAge);

console.log(verifyAges(people, 18));


// Adicione se código aqui

console.log(people.sort((a,b) => a.age - b.age));

const names = [
  'Aanemarie',
  'Adervandes',
  'Akifusa',
  'Abegildo',
  'Adicellia',
  'Aladonata',
  'Abeladerco',
  'Adieidy',
  'Alarucha',
];

function containsA(arr) {
  // escreva seu código aqui
  const newArr = arr.map((el) => el.toLowerCase());
  const result = newArr.reduce((acc, word) => {
    acc += word.match(/a/g).length;
    return acc;
  }, 0);
  return result;
}

console.log(containsA(names));

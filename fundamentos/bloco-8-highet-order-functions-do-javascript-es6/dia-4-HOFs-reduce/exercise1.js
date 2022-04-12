const arrays = [['1', '2', '3'], [true], [4, 5, 6]];

function flatten(a, b) {
  // escreva seu código aqui
  b.forEach((el) => a.push(el));
  return a;
}

console.log(arrays.reduce(flatten));

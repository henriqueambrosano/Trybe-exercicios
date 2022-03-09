// crie um algoritmo que retorne o fatorial de 10.
let fatorialDe10 = 10;
for (let i = 1; i < 10; i += 1) {
  fatorialDe10 *= i;
}
console.log("O fatorial de 10 é:", fatorialDe10);

//  Desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab".

let word = "banana";
let invertedWord = "";
for (let i = word.length - 1; i >= 0; i -= 1) {
  invertedWord += word[i];
}
console.log("A palavra", word, "invertida é:", invertedWord);

//Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.
let array = ["java", "javascript", "python", "html", "css"];
let biggestWord = array[0];
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > biggestWord.length) {
    biggestWord = array[i];
  }
}
console.log("A maior palavra do array é:", biggestWord);
let smallestWord = array[0];
for (let i = 0; i < array.length; i += 1) {
  if (array[i].length < smallestWord.length) {
    smallestWord = array[i];
  }
}
console.log("A menor palavra do array é:", smallestWord);

// escreva um algoritmo que retorne o maior número primo entre 0 e 50.
let num = 50;
let biggestPrime = 0;
let flag = true;
for (let x = num; x >= 0; x--) {
  for (let i = x - 1; i > 1; i--) {
    flag = true;
    if (x % i == 0) {
      flag = false;
      break;
    }
  }
  if (flag == true) {
    biggestPrime = x;
    break;
  }
}
console.log("O maior número primo entre 0 e", num, "é:", biggestPrime);

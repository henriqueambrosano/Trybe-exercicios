// 1 - (Difícil) Faça um programa que receba uma string em algarismos romanos e retorne o número que a string representa.
// let romanNumbers = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
// }

// function convertToDecimal(string){
//     let sum = 0;
//     let toArray = string.toUpperCase().split('')
//     for(let i = 0; i< toArray.length; i+=1){
//         if(toArray[i] == 'I' && toArray[i+1] == 'V'){
//             sum+=4
//         }else if(toArray[i] == 'I' && toArray[i+1] == 'X'){
//             sum+=9
//         }else if(toArray[i] == 'X' && toArray[i+1] == 'L'){
//             sum+=40
//         }else if(toArray[i] == 'X' && toArray[i+1] == 'C'){
//             sum+=90
//         }else if(toArray[i] == 'C' && toArray[i+1] == 'D'){
//             sum+=400
//         }else if(toArray[i] == 'C' && toArray[i+1] == 'M'){
//             sum+=900
//         }else{
//             sum+=romanNumbers[toArray[i]]
//         }
//     }
//     console.log(sum)
// }

// convertToDecimal('cv')

// 2 - Crie uma função chamada arrayOfNumbers que receberá a variável vector como parâmetro. Através de um loop for , percorra essa variável, busque os números pares e os adicione a um novo array que deverá ser retornado ao final pela pela função.

// let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

// function evenNumbers(arr){
//     let newArr =[]
//     for(let i = 0; i< arr.length; i++){
//         for(let x = 0; x< arr[i].length; x++){
//             if(arr[i][x] % 2 == 0){
//                 newArr.push(arr[i][x])
//             }
//         }
//     }
//     console.log(newArr)
// }

// evenNumbers(vector)

// 3 - A partir do array de frutas basket , retorne um objeto que contenha o nome da fruta como chave e a quantidade de vezes que ela aparece no array como valor. Por exemplo, o array ['Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva'], deverá retornar { Melancia: 3, Abacate: 1, Uva: 1 } quando passado como argumento para a função.

// Em seguida, imprima esse resultado na tela com uma mensagem no seguinte formato: Sua cesta possui: x Melancias, x Abacates...

// const basket = [
//   "Melancia",
//   "Abacate",
//   "Melancia",
//   "Melancia",
//   "Uva",
//   "Laranja",
//   "Jaca",
//   "Pera",
//   "Melancia",
//   "Uva",
//   "Laranja",
//   "Melancia",
//   "Banana",
//   "Uva",
//   "Pera",
//   "Abacate",
//   "Laranja",
//   "Abacate",
//   "Banana",
//   "Melancia",
//   "Laranja",
//   "Laranja",
//   "Jaca",
//   "Uva",
//   "Banana",
//   "Uva",
//   "Laranja",
//   "Pera",
//   "Melancia",
//   "Uva",
//   "Jaca",
//   "Banana",
//   "Pera",
//   "Abacate",
//   "Melancia",
//   "Melancia",
//   "Laranja",
//   "Pera",
//   "Banana",
//   "Jaca",
//   "Laranja",
//   "Melancia",
//   "Abacate",
//   "Abacate",
//   "Pera",
//   "Melancia",
//   "Banana",
//   "Banana",
//   "Abacate",
//   "Uva",
//   "Laranja",
//   "Banana",
//   "Abacate",
//   "Uva",
//   "Uva",
//   "Abacate",
//   "Abacate",
//   "Melancia",
//   "Uva",
//   "Jaca",
//   "Uva",
//   "Banana",
//   "Abacate",
//   "Banana",
//   "Uva",
//   "Banana",
//   "Laranja",
//   "Laranja",
//   "Jaca",
//   "Jaca",
//   "Abacate",
//   "Jaca",
//   "Laranja",
//   "Melancia",
//   "Pera",
//   "Jaca",
//   "Melancia",
//   "Uva",
//   "Abacate",
//   "Jaca",
//   "Jaca",
//   "Abacate",
//   "Uva",
//   "Laranja",
//   "Pera",
//   "Melancia",
//   "Jaca",
//   "Pera",
//   "Laranja",
//   "Jaca",
//   "Pera",
//   "Melancia",
//   "Jaca",
//   "Banana",
//   "Laranja",
//   "Jaca",
//   "Banana",
//   "Pera",
//   "Abacate",
//   "Uva",
// ];

// let frutas = {};

// function fruitCount(array) {
//   let word = "";
//   let count = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     for (let z = 0; z < array.length; z += 1) {
//       if (array[i] == array[z]) {
//         count++;
//       }
//     }
//     frutas[array[i].toLowerCase()] = count;
//     count = 0;
//   }

//   console.log(`Sua cesta possui: ${frutas.melancia} Melancias, ${frutas.abacate} Abacates, ${frutas.uva} Uvas, ${frutas.laranja} Laranjas, ${frutas.jaca} Jacas, ${frutas.pera} Peras e ${frutas.banana} Bananas`);
// }

// fruitCount(basket);


//Usando o objeto abaixo, faça os exercicios a seguir
let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

  // 4 - Acesse as chaves nome , sobrenome , andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: "O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101".

//   console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} ${moradores.blocoDois[1].sobrenome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}`)

// 5 - Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

for(bloco in moradores){
    for(let i =0; i< moradores[bloco].length; i++){
        console.log(moradores[bloco][i].nome, moradores[bloco][i].sobrenome)
    }
}
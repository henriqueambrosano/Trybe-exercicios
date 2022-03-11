//DESCOMENTE APENAS O CÓDIGO QUE FOR TESTAR AFIM DE EVITAR BUGS, POIS ALGUNS DELES COMPARTILHAM AS MESMAS VARIÁVEIS

// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.

// function verificaPalindromo(string) {
//   if (string == string.split("").reverse().join("")) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// verificaPalindromo("arara");

//2- Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

// let myArr = [2, 5, 6, 200, 8, 11, 55, 98, 106, 0];
// function indexOfTheBiggestNumber(array) {
//   let biggestNumber = array[0];
//   for (let i = 1; i < array.length; i+=1) {
//     if (array[i] > biggestNumber) {
//       biggestNumber = array[i];
//     }
//   }
//   console.log(array.indexOf(biggestNumber));
// }
// indexOfTheBiggestNumber(myArr);


// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// function indexOfTheSmallestNumber(array) {
//     let smallestNumber = array[0];
//     for (let i = 1; i < array.length; i+=1) {
//       if (array[i] < smallestNumber) {
//         smallestNumber = array[i];
//       }
//     }
//     console.log(array.indexOf(smallestNumber));
//   }
//   indexOfTheSmallestNumber(myArr);

  // 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

//   function biggestName(array){
//       let biggestName = array[0]
//       for(let i = 1; i< array.length; i+=1){
//           if(array[i].length > biggestName.length){
//               biggestName = array[i]
//           }
//       }
//       console.log(biggestName)
//   }

//   let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
//   biggestName(nomes)

  // 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// function repeatMore(array){
//     let number=0;
//     let count =0;
//     let prevCount = 0;
//     for(let i = 0; i< array.length; i+=1){
//         for(let z = 0; z < array.length; z+=1){
//             if(array[i] == array[z]){
//                 count++
//             }            
//         }
//         if(count > prevCount){
//             prevCount = count;
//             count = 0;
//             number = array[i]
//         }else{
//             count = 0
//         }
//     }
//     console.log(number)
// }
// let teste = [2, 3, 2, 5, 8, 2, 3,3,3,7,7,7,7,7];
// repeatMore(teste)

//6 - Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

// function numberSum(num){
//     let sum = 0;
//     for(let i = 1; i <=num; i+=1){
//         sum+=i
//     }
//     console.log(sum)
// }

// numberSum(5)

// 7 - Crie uma função que receba stringA e stringB . Verifique se a stringB é o final da stringA. Considere que a stringB sempre será menor que a stringA .

// function checkEnd(stringA, stringB){
//     if(stringA.slice(stringA.length - stringB.length) ==  stringB){
//         console.log(true)
//     }else{
//         console.log(false)
//     }
// }
// checkEnd('trybe', 'be')



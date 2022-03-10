// Deixe sempre a variável n descomentada pois ela é a mesma para todos os blocos de código, fora isso, descomente o bloco de código que quiser testar e rode-o com os demais comentados para evitar conflito.

// 1. Faça um programa que, dado um valor n qualquer, seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n

let n = 15;
// let myStars = ''
// for(let i = 0; i<n; i++){
//     myStars = ''
//     for(let x = 0; x<n; x++){
//         myStars+='*'
//     }
//     console.log(myStars)
// }

// 2. faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base
// let count = 1
// let triangle = ''
// for(let i = 0; i<n; i++){
//     triangle = ''
//     for(let x = 0; x<count; x++){
//         triangle+='*'
//     }
//     count++
//     console.log(triangle)
// }

// 3.Agora inverta o lado do triângulo.
// let spaceCount = n;
// let starCount = 1;
// let invertedTriangle;

// for(let i = 0; i<n; i++){
//     invertedTriangle = ''
//     for(let x = 0; x<spaceCount-starCount; x++){
//         invertedTriangle+=' '
//     }
//     for(let z = 0; z < starCount; z++){
//         invertedTriangle+='*'
//     }
//     starCount++
//     console.log(invertedTriangle)
// }

// 4.faça uma pirâmide com n asteriscos de base

// let piramid = "";
// let piramidSpace = (n - 1) / 2;
// let piramidStar = 1;

// for(let i = 0; i<n; i+=2){
//     piramid = ''
//     for(let x = 0; x<piramidSpace; x++){
//         piramid+=' '
//     }
//     for(let z = 0; z < piramidStar; z++){
//         piramid+='*'
//     }
//     piramidStar+=2
//     piramidSpace--
//     console.log(piramid)
// }
// Faça uma pirâmide com n asteriscos de base que seja vazia no meio. Assuma que o valor de n será sempre ímpar
// for (let i = 0; i < n; i += 2) {
//   piramid = "";
//   for (let x = 0; x < piramidSpace; x++) {
//     piramid += " ";
//   }
//     if (piramidStar > 1 && piramidStar < n) {
//       piramid += "*";
//       let spaces = piramidStar - 2;
//       for (let w = 0; w < spaces; w++) {
//         piramid += " ";
//       }
//       piramid += "*";
//     } else if(piramidStar<=1){
//       piramid += "*";
//     }else{
//         for(let y = 0; y <n; y++){
//             piramid+='*'
//         }
//     }
//   piramidStar += 2;
//   piramidSpace--;
//   console.log(piramid);
// }

// Faça um programa que diz se um número definido numa variável é primo ou não.
// let isPrime = 18;
// let flag = true;
// for(let i = 2; i < isPrime -1; i++){
//     if(isPrime % i == 0){
//         flag = false
//     }    
// }
// if(flag === false){
//     console.log('O número',isPrime,'não é primo')
// }else{
//     console.log('O número',isPrime,'é primo')
// }
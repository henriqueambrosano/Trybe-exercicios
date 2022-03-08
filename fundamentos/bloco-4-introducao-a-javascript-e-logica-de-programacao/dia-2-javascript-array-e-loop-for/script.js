let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;
numbers.forEach(num => console.log(num))

// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let soma = numbers.reduce((a,b)=> a+b)
console.log('A soma dos números da array é: ', soma)

// Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
// A média aritmética é o resultado da soma de todos os elementos divido pelo número total de elementos.
let media = soma/numbers.length
console.log('A média aritimética da soma da array é:', media)

// Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";
if(media > 20){
    console.log('Valor maior que 20')
}else{
    console.log('Valor menor ou igual a 20')
}

// Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let maiorNumero = numbers[0];
for(let i = 1; i< numbers.length; i+=1){
    if(numbers[i] > maiorNumero){
        maiorNumero = numbers[i]
    }
}
console.log('O maior número da array é:',maiorNumero)

// Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numerosImpares = 0;
numbers.forEach((num)=>{
    num%2 != 0 ? numerosImpares++ : numerosImpares = numerosImpares
})
if(numerosImpares <= 0){
    console.log('Nenhum valor ímpar encontrado')
}else{
    console.log(`Existem ${numerosImpares} números ímpares no array`)
}
// Utilizando for , descubra qual o menor valor contido no array e imprima-o;
let menorNumero = numbers[0];
for(let i = 1; i< numbers.length; i+=1){
    if(numbers[i] < menorNumero){
        menorNumero = numbers[i]
    }
}
console.log('O menor número da array é:',menorNumero)
// Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let myArray = [];
for(let i = 1; i < 26; i+=1){
    myArray.push(i)
}
console.log(myArray)

// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
for(num of myArray){
    console.log(num/2)
}
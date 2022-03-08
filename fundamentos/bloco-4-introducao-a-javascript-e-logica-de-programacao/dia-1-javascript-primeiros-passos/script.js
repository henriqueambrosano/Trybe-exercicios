// definição das variáveis que serao trabalhadas
let a = 10;
let b = 15;
let c = 22;

//programas de operações aritimeticas básicas
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//retorne o maior entre dois numeros
if (a > b) {
  console.log(a);
} else {
  console.log(b);
}

//retorne o maior entre tres numeros
if (a > b && a > c) {
  console.log(async);
} else if (b > a && b > c) {
  console.log(b);
} else {
  console.log(c);
}

//retorne positivo, negativo ou zero
if (a > 0) {
  console.log("Positivo");
} else if (a < 0) {
  console.log("Negativo");
} else {
  console.log("Zero");
}

//returne true se os angulos representarem os angulos de um triangulo
if (a <= 0 || b <= 0 || c <= 0) {
  console.log(false);
} else if (a + b + c == 180) {
  console.log(true);
} else {
  console.log(false);
}

// retorne os movimentos que a peça de xadrez pode fazer
let pecasExistentes = [
  "peão",
  "peao",
  "cavalo",
  "torre",
  "rainha",
  "rei",
  "bispo",
];
let peca = "rei";
peca = peca.toLowerCase();

if (!pecasExistentes.includes(peca)) {
  console.log("Peça inválida, tente outra opção");
} else if (peca == "peao" || peca == "peão") {
  console.log("Movimenta uma casa para frente");
} else if (peca == "cavalo") {
  console.log("Movimenta em L");
} else if (peca == "torre") {
  console.log(
    "Movimenta quantas casas quiser para frente, tras, esquerda ou direita"
  );
} else if (peca == "rainha") {
  console.log("Movimenta quantas casas quiser em qualquer direção");
} else if (peca == "rei") {
  console.log("Movimenta uma casa em qualquer direção");
} else {
  console.log("Movimenta quantas casas quiser nas diagonais");
}

//Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F.
let nota = 70;

if (nota <= 0 || nota > 100) {
  console.log("nota inválida");
} else if (nota >= 90) {
  console.log("A");
} else if (nota >= 80) {
  console.log("B");
} else if (nota >= 70) {
  console.log("C");
} else if (nota >= 60) {
  console.log("D");
} else if (nota >= 50) {
  console.log("E");
} else if (nota < 50) {
  console.log("F");
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const num1 = 13;
const num2 = 25;
const num3 = 17;

if (num1 % 2 == 0 || num2 % 2 == 0 || num3 % 2 == 0) {
  console.log(true);
} else {
  console.log(false);
}

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

if (num1 % 2 != 0 || num2 % 2 != 0 || num3 % 2 != 0) {
  console.log(true);
} else {
  console.log(false);
}

// Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

let custo = 11;
let venda = 25;
custo = custo * 1.2; //adição de 20% de imposto sobre o custo do produto

if (custo < 0 || venda < 0) {
  console.log("Valor inválido");
} else {
  console.log("O lucro após a venda deste produto é: ", venda - custo);
}

//Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

let salarioBruto = 3000;
let salarioINSS;
let salarioLiquido;
let IR;

if (salarioBruto <= 1556.94) {
  salarioINSS = salarioBruto * 0.92;
} else if (salarioBruto <= 2594.92) {
  salarioINSS = salarioBruto * 0.91;
} else if (salarioBruto <= 5189.82) {
  salarioINSS = salarioBruto * 0.89;
} else {
  salarioINSS = salarioBruto - 570.88;
}

// console.log(salarioINSS)

if (salarioINSS <= 1903.98) {
  salarioLiquido = salarioINSS;
} else if (salarioINSS < 2826.65) {
  IR = salarioINSS * 0.075 - 142.8;
  salarioLiquido = salarioINSS - IR;
} else if (salarioINSS < 3751.05) {
  IR = salarioINSS * 0.15 - 354.8;
  salarioLiquido = salarioINSS - IR;
} else if (salarioINSS < 4664.68) {
  IR = salarioINSS * 0.225 - 636.13;
  salarioLiquido = salarioINSS - IR;
} else {
  IR = salarioINSS * 0.275 - 869.36;
  salarioLiquido = salarioINSS - IR;
}

console.log("O salário liquido é: ", salarioLiquido);

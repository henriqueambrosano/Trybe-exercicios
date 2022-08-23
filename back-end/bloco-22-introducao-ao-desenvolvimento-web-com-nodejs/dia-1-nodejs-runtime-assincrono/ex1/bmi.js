const readline = require('readline-sync');

console.log(2**2)

const weight = readline.questionFloat('qual seu peso?')
const height = readline.questionFloat('qual sua altura em metros?')

const result = weight / (height**2)

if(result >= 40) console.log('obesidade grau II e IV')
if(result >= 35 && result < 40) console.log('obesidade grau II')
if(result >= 30 && result < 35) console.log('obesidade grau I');
if(result >= 25 && result < 30) console.log('acima do peso');
if(result >= 18.5 && result < 25) console.log('peso normal');
if(result < 18.5) console.log('abaixo do peso');

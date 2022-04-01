// ex1

// const factorial = (n) => (n == 0 || n == 1 ? 1 : n * factorial(n - 1));
// let n = 5;
// let answer = factorial(n);

// console.log(`O fatorial de ${n} é: ${answer}`);

// // ex2

// const longestWord = string => console.log(string.split(' ').sort((a,b) => b.length - a.length)[0])

// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'

// //ex3

// const button = document.getElementById('my-btn');
// const p = document.getElementById('click-counter');

// let clicks = 0;
// const clickCount = () => {
//     clicks+=1
//     p.textContent = `Número de clicks: ${clicks}`
// }

// button.onclick = clickCount

//ex4.1

let string = 'Tryber x aqui!';

const switchString = (par) => {
  return string.replace('x', par);
};

switchString('bebeto');

//ex4.2

const mySkills = ['HTML', 'CSS', 'JS', 'PYTHON']

const concatenate = par => {
    console.log(`${par} Minhas cinco principais habilidades são: ${mySkills.sort().join(', ')}`)
}

concatenate(switchString('bebeto'))
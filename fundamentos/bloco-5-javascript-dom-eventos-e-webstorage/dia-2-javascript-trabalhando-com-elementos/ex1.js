// Acesse o elemento elementoOndeVoceEsta .

let el1 = document.getElementById('elementoOndeVoceEsta')
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
el1.parentNode.style.color = 'red'
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
el1.firstElementChild.textContent = 'texto do primeiro filho do filho'
// Acesse o primeiroFilho a partir de pai .
let firstChild = document.getElementById('pai').firstElementChild
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(el1.previousElementSibling)
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(el1.nextSibling)
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(el1.nextElementSibling)
// Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById('pai').children[2])

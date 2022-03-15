// Acesse o elemento elementoOndeVoceEsta .

let el1 = document.getElementById("elementoOndeVoceEsta");
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
el1.parentNode.style.color = "red";
// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
el1.firstElementChild.textContent = "texto do primeiro filho do filho";
// Acesse o primeiroFilho a partir de pai .
let firstChild = document.getElementById("pai").firstElementChild;
// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta .
console.log(el1.previousElementSibling);
// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta .
console.log(el1.nextSibling);
// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta .
console.log(el1.nextElementSibling);
// Agora acesse o terceiroFilho a partir de pai .
console.log(document.getElementById("pai").children[2]);

// parte 2
// Crie um irmão para elementoOndeVoceEsta .
let irmao = document.createElement("section");
irmao.setAttribute("id", "novoIrmao");
document.getElementById("pai").appendChild(irmao);
// Crie um filho para elementoOndeVoceEsta .
let filho = document.createElement("p");
filho.textContent = "filho de elementoOndeVoceEsta criado";
el1.appendChild(filho);
// Crie um filho para primeiroFilhoDoFilho .
let filho2 = document.createElement("p");
filho2.textContent = "filho do primeiro filho do filho criado";
el1.firstElementChild.appendChild(filho2);
// A partir desse filho criado, acesse terceiroFilho .
let filhoCriado = el1.firstElementChild.firstElementChild;
console.log(filhoCriado.parentElement.parentElement.nextElementSibling);
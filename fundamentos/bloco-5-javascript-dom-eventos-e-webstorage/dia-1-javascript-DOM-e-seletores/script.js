
//         Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
//         - document.getElementById()
//         - document.getElementsByClassName()
//         - document.getElementsByTagName()
//  Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
 function alterarTextoP(){
     document.getElementsByTagName('p')[0].innerText = 'Me vejo como dev fullstack'   
 }
 alterarTextoP()
//  Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function alterarCor(){
    document.getElementsByClassName('main-content')[0].style.backgroundColor = 'rgb(76,164,109)'
}
alterarCor()
//  Crie uma função que mude a cor do quadrado vermelho para branco.
function alteraBackground(){

    document.getElementsByClassName('center-content')[0].style.backgroundColor = 'white'
}
alteraBackground()
//  Crie uma função que corrija o texto da tag <h1>.
function corrigirH1(){
    document.getElementsByTagName('h1')[0].textContent = 'Exercício 5.1 - JavaScript'
}
corrigirH1()
//  Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function toUpperCase(){
    let paragrafo = document.getElementsByTagName('p')[0]
    paragrafo.textContent = paragrafo.textContent.toUpperCase()
}
toUpperCase()
//  Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showP(){
    let paragraphs = document.getElementsByTagName('p');
    for(each of paragraphs){
        console.log(each.textContent)
    }
}
showP()

 


const btnEnviar = document.querySelector('#enviar');
const btnApagar = document.querySelector('#apagar')
const nome = document.querySelector('#nome');
const email = document.querySelector('#email');
const whyMe = document.querySelector('#whyme');







btnEnviar.onclick = (e) => {
    console.log(whyMe.value.length)
    e.preventDefault();
    if(nome.value.length > 40 || nome.value.length < 10 || email.value.length <10 || email.value.length > 50 || whyMe.value.length > 500){
        alert('Dados inválidos!')
    }else{
        alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
    }
}

btnApagar.onclick = () => {
    location.reload();
}
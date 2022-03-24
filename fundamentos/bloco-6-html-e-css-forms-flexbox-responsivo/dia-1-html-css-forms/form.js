const btnEnviar = document.querySelector('#enviar');
const btnApagar = document.querySelector('#apagar')


btnEnviar.onclick = (e) => {
    e.preventDefault();
}

btnApagar.onclick = () => {
    location.reload();
}
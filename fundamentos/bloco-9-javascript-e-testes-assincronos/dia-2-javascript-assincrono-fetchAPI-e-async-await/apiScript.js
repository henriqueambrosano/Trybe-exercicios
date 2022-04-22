// apiScript.js
const API_URL = 'https://icanhazdadjoke.com/';

const h2 = document.getElementById('jokeContainer');

const fetchJoke = () => {
  // Adicionar lógica aqui!
  const myObject = {
    method: 'GET',
    headers: { Accept: 'application/json' },
  };

  fetch(API_URL, myObject)
    .then((response) => response.json())
    .then((data) => {
        h2.innerText = data.joke
    });
};

window.onload = () => fetchJoke();

// const fetch = require('node-fetch');

// const fetchJoke = () => {
//   const url = 'htps://api.chucknorris.io/jokes/random?category=dev';

//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => console.log(data.value))
//     .catch((error) => console.log(`Algo deu errado :( \n${error}`));
// }

// fetchJoke();

const fetch = require('node-fetch');

const fetchJoke = async () => {
  const url = 'https://api.chucknorris.io/jokes/random?category=dev';

  try{
      const response = await fetch(url);
      const data = await response.json();
      const result = await data.value;
      console.log(result);
  }catch(error) {
      console.log(`Algo deu errado :( \n${error}`)
  }
}

fetchJoke();

// Chuck Norris can write multi-threaded applications with a single thread.
// const fetch = require('node-fetch');

const myUrl = 'https://api.coincap.io/v2/assets';
const myUrl2 =
  'https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/usd.min.json';
const criptoList = document.getElementById('cryptoList');

const convertPrice = () => {
  return fetch(myUrl2)
    .then((response) => response.json())
    .then((data) => data.usd.brl);
};

const mountList = (data) => {
  convertPrice().then((brl) => {
    const top10 = data.filter((cripto, index) => index < 11);
    top10.forEach((coin) => {
      const li = document.createElement('li');
      li.innerText = `${coin.id.toUpperCase()} (${coin.symbol}) : R$ ${Number(
        coin.priceUsd * brl
      ).toFixed(2)}`;
      criptoList.appendChild(li);
    });
  });
};

const getCriptoPrices = async () => {
  const response = await fetch(myUrl);
  const data = await response.json();
  const result = data.data;

  mountList(result);
};

getCriptoPrices();

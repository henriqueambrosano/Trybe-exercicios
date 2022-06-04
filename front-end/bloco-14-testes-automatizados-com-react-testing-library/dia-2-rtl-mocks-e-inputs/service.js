import fetch from "node-fetch";

function randomNumber() {
  return Math.floor(Math.random() * 101);
}

function toUpper(string) {
  return string.toUpperCase();
}

function firstLetter(string) {
  return string[0];
}

function joinStrings(s1, s2) {
  return s1 + s2;
}

async function requestDog() {
  fetch('https://dog.ceo/api/breeds/list/all').then((response) =>
    response
      .json()
      .then(response.ok ? Promise.resolve(json) : Promise.reject(json))
    );
}

requestDog()


module.exports = {
  toUpper,
  firstLetter,
  joinStrings,
  randomNumber,
  requestDog,
};

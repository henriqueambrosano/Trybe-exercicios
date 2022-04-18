const getPlanet = () => {
  const mars = {
    name: 'Mars',
    distanceFromSun: {
      value: 227900000,
      measurementUnit: 'kilometers',
    },
  };
  setTimeout(() => {
    console.log('Returned planet: ', mars);
  }, 4000);
};

// getPlanet(); // imprime Marte depois de 4 segundos


const messageDelay = () => Math.floor(Math.random() * 5000);

const getMarsTemperature = () => {
  const maxTemperature = 58;
  return Math.floor(Math.random() * maxTemperature);
};

const greet = (temperature) =>
  console.log(`Hi there! Curiosity here. Right now is ${temperature}ºC at Mars`);

// crie a função sendMarsTemperature abaixo
const sendMarsTemperature = (callback) => {
    setTimeout(() => {
        callback(getMarsTemperature())
    }, messageDelay())
}

sendMarsTemperature(greet); // imprime "Mars temperature is: 20 degree Celsius", por exemplo
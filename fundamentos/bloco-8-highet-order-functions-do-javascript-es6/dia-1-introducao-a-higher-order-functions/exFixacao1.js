const myFunc = () => 'Acordando!!'
const myFunc1 = () => 'Bora tomar um café!!'
const myFunc2 = () => 'Partiu dormir!!'

const HOF = (func) => console.log(func)

HOF(myFunc())
HOF(myFunc1())
HOF(myFunc2())
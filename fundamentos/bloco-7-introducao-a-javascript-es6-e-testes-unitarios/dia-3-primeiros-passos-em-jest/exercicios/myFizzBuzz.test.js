const { it, expect } = require('@jest/globals');
const myFizzBuzz = require('./myFizzBuzz');

describe('Teste da função myFizzBuzz', () => {
    it('Verifica se quando passado um número divisivel por 3 e 5, a função retorna "fizzbuzz"', () =>{
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    })

    it('Verifica se quando passado um número divisivel por 3 mas nao por 5, a função retorna "fizz"', () => {
        expect(myFizzBuzz(9)).toEqual('fizz')
    })

    it('Verifica se quando passado um número divisivel por 5 mas nao por 3, a função retorna "buzz"', ()=> {
        expect(myFizzBuzz(20)).toEqual('buzz')
    })

    it('Verifica se quando passado um número que nao é divisivel nem por 3 e nem por 5, a função retorna o próprio número', () => {
        expect(myFizzBuzz(31)).toEqual(31)
    })

    it('Verifica se quando passado um parametro que não é um número, a função retorna false', () => {
        expect(myFizzBuzz('a')).toBeFalsy()
    })
})
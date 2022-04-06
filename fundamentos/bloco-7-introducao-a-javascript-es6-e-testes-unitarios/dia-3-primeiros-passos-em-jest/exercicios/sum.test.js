const { it, expect } = require('@jest/globals');
const sum = require('./sum');

describe('Teste da função sum', () => {
    it('Verifica se o retorno de sum(4,5) é 9', () => {
        expect(sum(4,5)).toBe(9)
    })

    it('Verifica se o retorno de sum(0,0) é 0', () => {
        expect(sum(0,0)).toBe(0)
    })

    it('Verifica se a função retorna um Erro quando passado uma string como argumento', () =>{
        expect(() => {
            sum(4,'5')
        }).toThrow()
    })

    it('Verifica se a mensagem do erro é "parameters must be numbers"', () => {
        expect(()=>{
            sum(4,'5')
        }).toThrowError(new Error('parameters must be numbers'))
})
})
const { it, expect } = require('@jest/globals');
const myRemove = require('./myRemove');

describe('Teste da função myRemove', () => {
    it('Verifica se myRemove([1,2,3,4],3) retorna [1,2,4]', () =>{
        expect(myRemove([1,2,3,4],3)).toEqual([1,2,4])
    })

    it('Verifica se myRemove([1,2,3,4],3) nao retorna [1,2,3,4]', () => {
        expect(myRemove([1,2,3,4],3)).not.toEqual([1,2,3,4])
    })

    it('Verifica se myRemove([1,2,3,4], 5) retorna [1,2,3,4]', () => {
        expect(myRemove([1,2,3,4], 5)).toEqual([1,2,3,4])
    })
})
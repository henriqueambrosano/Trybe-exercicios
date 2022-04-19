// Verifique se a importação do arquivo correto está sendo feita.
const { expect } = require('@jest/globals');
const { getPokemonDetails, uppercase } = require('./exercicios');

describe('A função getPokemonDetails', () => {
  it('retorna erro quando procuramos um pokemon que não existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedResult = new Error('Não temos esse pokémon para você :(')
    getPokemonDetails(pokemon => pokemon.name  === 'Henrique', (err, result) => {
        try{
            expect(err).toEqual(expectedResult);
            done()
        }catch(error) {
            done(error);
        }
    })
  });

  it('retorna um pokemon que existe no banco de dados', (done) => {
    // Escreva aqui seu código
    const expectedPokemon = {
        name: 'Bulbasaur',
        type: 'Grass',
        ability: 'Razor Leaf',
      };
      getPokemonDetails(pokemon => pokemon.name  === 'Bulbasaur', (err, result) => {
          try{
            expect(result).toEqual(expectedPokemon);
            done()
          }catch(error){
            done(error)
          }
      })
  });
});
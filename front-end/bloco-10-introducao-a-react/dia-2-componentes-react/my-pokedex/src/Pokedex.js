import React from 'react';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (

      <section className='pokemons'>
          <h1>Pokedex</h1>
          <div className='poke-container'>
        {this.props.pokemons.map((pokemon) => (<Pokemon key={pokemon.id} pokeInfo={pokemon} />))}
          </div>
      </section>
    );
  }
}


export default Pokedex
import React from 'react';

class Details extends React.Component {
  render() {
    const {
      pokemons,
      match: {
        params: { id },
      },
    } = this.props;
    console.log(this.props);
    const pokemon = pokemons.find((pokemon) => pokemon.id === +id);
    const { name, type, averageWeight, moreInfo } = pokemon;

    return (
      <div>
        <p>Nome: {name}</p>
        <p>Tipo: {type}</p>
        <p>Peso médio: {averageWeight.value + averageWeight.measurementUnit}</p>
        <a target="_blank" href={moreInfo}>
          Súmario informativo
        </a>
      </div>
    );
  }
}

export default Details;

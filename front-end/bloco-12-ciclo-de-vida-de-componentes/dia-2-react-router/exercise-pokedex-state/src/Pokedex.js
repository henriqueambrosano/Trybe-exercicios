import React from 'react';
import Pokemon from './Pokemon';
import Button from './Button';

class Pokedex extends React.Component {
  state = {
    currentPokemon: 0,
    classe: '',
  };

  selectArray = () => {
    const { classe } = this.state
    if (classe === '') {
      return this.props.pokemons;
    } else {
      return this.props.pokemons.filter(
        (pokemon) => pokemon.type === classe
      );
    }
  };

  handleClick = () => {
    const size = this.selectArray().length;
    this.setState((prev) => ({
      currentPokemon:
        prev.currentPokemon === size - 1 ? 0 : prev.currentPokemon + 1,
    }));
  };

  handleFilter = (e) => {
    this.setState({ currentPokemon: 0 });
    this.setState({ classe: e.target.innerText });
  };

  selectAll = () => {
    this.setState({ classe: '' });
  };

  filterButtons = () => {
    return this.props.pokemons.reduce((a, b) => {
      if (a.includes(b.type)) {
        return a;
      } else {
        a.push(b.type);
        return a;
      }
    }, []);
  };

  render() {
    const { currentPokemon } = this.state;
    return (
      <div className='pokedex'>
        <Pokemon
          key={this.selectArray()[currentPokemon].id}
          pokemon={this.selectArray()[currentPokemon]}
        />
        <div className='buttons'>
          <Button function={this.selectAll}>All</Button>
          {this.filterButtons().map((el) => (
            <Button key={el} function={this.handleFilter}>
              {el}
            </Button>
          ))}
        </div>
        <div className='next'>
          <Button
            classe={this.selectArray().length}
            function={this.handleClick}
          >
            Próximo Pokemon
          </Button>
        </div>
      </div>
    );
  }
}

export default Pokedex;

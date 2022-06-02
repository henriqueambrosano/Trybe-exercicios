import React from 'react';
import PropTypes from 'prop-types';
import './GameCell.css';

// Não mude a propriedade da div data-testid de cada casa
// ele será utilizado para o terceiro exercício!
// Use-o para selecionar uma casa especifica nas horas dos testes.

class GameCell extends React.Component {
  render() {
    const { id, onClick, src } = this.props;

    return (
      <div
        key={ id }
        data-testid={ `cell_${id}` }
        className="game-cell"
        onClick={ () => onClick(id) }
      >
        <img src={ src } alt={ src }/>
      </div>
    );
  }
}

GameCell.propTypes = {
  id: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
  src: PropTypes.string.isRequired,
};

export default GameCell;

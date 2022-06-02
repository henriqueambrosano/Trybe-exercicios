import React from 'react';
import PropTypes from 'prop-types';
import GameCell from './GameCell';
import './GameBoard.css';
import xImage from './x.png';
import oImage from './o.svg';

class GameBoard extends React.Component {
  
  setImage = (playerId) => {
    if (playerId === 1) return xImage;
    if (playerId === 2) return oImage;
    return '';
  };

  render() {
    const { gameState, updateGame } = this.props;
    return (
      <div className="game-board">
        {gameState.map((playerId, i) => (
          <GameCell
            id={i}
            key={i}
            onClick={updateGame}
            content={playerId}
            src={this.setImage(playerId)}
          />
        ))}
      </div>
    );
  }
}

GameBoard.propTypes = {
  gameState: PropTypes.arrayOf(PropTypes.number).isRequired,
  updateGame: PropTypes.func.isRequired,
};

export default GameBoard;

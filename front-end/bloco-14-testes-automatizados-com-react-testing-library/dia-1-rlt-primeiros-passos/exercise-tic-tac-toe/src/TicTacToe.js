import React from 'react';
import GameBoard from './GameBoard';

class TicTacToe extends React.Component {
  state = {
    activePlayer: 1,
    gameBoard: [0, 0, 0, 0, 0, 0, 0, 0, 0],
    winner: 0,
  };

  checkWinner = () => {
    const { gameBoard } = this.state;
    let winner = 0;
    if (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) winner = gameBoard[0]
    if (gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) winner = gameBoard[0]
    if (gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) winner = gameBoard[3]
    if (gameBoard[6] === gameBoard[7] && gameBoard[6] === gameBoard[8]) winner = gameBoard[6]
    
    if (gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) winner = gameBoard[1]
    if (gameBoard[2] === gameBoard[5] && gameBoard[2] === gameBoard[8]) winner = gameBoard[2]


    winner !== 0 && alert('worked')
    this.setState({winner})
  }

  updateGame = (index) => {
    const { activePlayer, gameBoard } = this.state;
    if (gameBoard[index] === 0) {
      gameBoard[index] = activePlayer === 1 ? 1 : 2;
      this.setState((prev) => ({
        activePlayer: prev.activePlayer === 1 ? 2 : 1,
        gameBoard,
      }), this.checkWinner());
    }
  };

  // Antes de começar a realizar o exercício,
  // junte os dois outros exercícios na master (ou seja, mergeie as Pull Requests).
  // Atualize essa branch com o git merge master.

  // Adicione nesse arquivo a lógica para identificar
  // quando que o jogo deve acabar. É necessário passar
  // nos teste do arquivo exercise-3.test.js;

  // Analise bem como que os teste são realizados 
  // para criar o que se pede.

  render() {
    const { gameBoard } = this.state;
    return <GameBoard gameState={gameBoard} updateGame={this.updateGame} />;
  }
}

export default TicTacToe;

import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('Configuração inicial do jogo', () => {
  it('testa se o tabuleiro contem 9 casas vazias ao iniciar', () => {
    render(<App />);
    const gameBoard = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    gameBoard.forEach((item, index) => {
      const emptyCase = screen.getByTestId(`cell_${index}`);
      expect(emptyCase).toBeInTheDocument();
      expect(emptyCase).toHaveTextContent('');
    });
  });

  it('Verifica se nao existe a mensagem fim de jogo', () => {
    render(<App />);
    const endGameMessage = screen.queryByText(/fim de jogo/i);
    expect(endGameMessage).not.toBeInTheDocument();
  });
});

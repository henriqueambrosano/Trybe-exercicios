import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import xImage from './x.png';

// Alguns describe já possuem a orientação do que precisa ser testado.
// Pode modifica-los mas lembre que os testes precisam testar todo o comportamento,
// das casas.
// A funcionalidade não está pronta, portanto esse teste não passará. Crie-a.

describe('Comportamento de cada casa', () => {
  beforeEach(() => {
    render(<App />);
  });
  it('Ao clicar em um casa deve adicionar o símbolo apenas naquele lugar', () => {
    userEvent.click(screen.getByTestId('cell_0'));
    expect(screen.queryAllByAltText('')).toHaveLength(8);

    userEvent.click(screen.getByTestId('cell_1'));
    expect(screen.queryAllByAltText('')).toHaveLength(7);
  });

  it('O simbolo precisa ser trocado ao clicar em uma casa para a outra', () => {
    const casa0 = screen.getByTestId('cell_0');
    userEvent.click(casa0);
    expect(casa0.firstElementChild).toHaveProperty('src', `http://localhost/${xImage}`);
  });

  it('Se clicar em uma casa já preenchida, o simbolo deve continuar o mesmo', () => {
    const casa0 = screen.getByTestId('cell_0');
    userEvent.click(casa0);
    userEvent.click(casa0);
    expect(casa0.firstElementChild).toHaveProperty('src', `http://localhost/${xImage}`);
  });

  it('O simbolo das casas precisam ser mantidas, quando outra casa for clicada', () => {
    const casa0 = screen.getByTestId('cell_0');
    const casa1 = screen.getByTestId('cell_1');
    userEvent.click(casa0);
    userEvent.click(casa1);
    expect(casa0.firstElementChild).toHaveProperty('src', `http://localhost/${xImage}`);
  });
});

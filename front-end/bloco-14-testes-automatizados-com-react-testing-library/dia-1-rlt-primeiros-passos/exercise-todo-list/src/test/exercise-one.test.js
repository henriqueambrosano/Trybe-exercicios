import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';

// arquivo App.test.js pode servir de exemplo
describe('Testando a aplicação, testando botão, e sua funcionalidade', () => {
  test('Verifica se o botão está na tela com o texto "Adicionar"', () => {
    render(<App />);
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent(/adicionar/i);
  });

  test('Ao clicar no botão Adicionar a tarefa deve ser adicionada na tela', () => {
    // Use o userEvent, para simular a digitação do usuário e o clique.
    render(<App />);
    const TEST_TASK = 'My task';
    const button = screen.getByRole('button');

    const taskInput = screen.getByLabelText(/tarefa/i);
    userEvent.type(taskInput, TEST_TASK);
    userEvent.click(button);
    expect(taskInput).toHaveTextContent('');

    const task = screen.getByText(TEST_TASK);
    expect(task).toBeInTheDocument();
  });
});

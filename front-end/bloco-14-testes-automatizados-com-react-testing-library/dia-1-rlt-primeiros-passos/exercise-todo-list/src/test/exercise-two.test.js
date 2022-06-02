import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import Item from '../Item';

describe('Teste do campo de input', () => {
  test('Testando a adição de vários itens a aplicação', () => {
    const listTodo = ['Realizar CR', 'Ler Post no Medium', 'Beber água']; // Use esse array como base para realizar os testes.
    render(<App />); // Caso precise de uma nova query adicione no object destructuring
    const button = screen.getByRole('button');
    const taskInput = screen.getByLabelText(/tarefa/i);
    listTodo.forEach((item) => {
      userEvent.type(taskInput, item);
      userEvent.click(button);
      const task = screen.getByText(item);
      expect(task).toBeInTheDocument();
    });
  });
});

describe('Teste do componente Item', () => {
  test('Ao receber uma string como prop ela precisa aparecer na tela', () => {
    const TEST_STRING = 'my random string';
    render(<Item content={ TEST_STRING } />);
    const string = screen.getByText(TEST_STRING);
    expect(string).toBeInTheDocument();
  });
});

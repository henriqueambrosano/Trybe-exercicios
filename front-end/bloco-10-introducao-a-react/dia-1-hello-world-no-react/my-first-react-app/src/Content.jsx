import React, { Component } from 'react';

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido',
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei',
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei',
  },
];

class Content extends Component {
  render() {
    return (
      <div className='card-container'>
        {conteudos.map((el) => (
          <div className='card'>
            <p>O conteúdo é: {el.conteudo}</p>
            <p>Status: {el.status}</p>
            <p>Bloco: {el.bloco}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Content;

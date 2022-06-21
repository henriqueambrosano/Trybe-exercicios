import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>
          Página inicial - Cadastro de Clientes
          <br />
        </h1>
        <Link to="/login">Fazer login</Link>
      </div>
    );
  }
}

export default Home;

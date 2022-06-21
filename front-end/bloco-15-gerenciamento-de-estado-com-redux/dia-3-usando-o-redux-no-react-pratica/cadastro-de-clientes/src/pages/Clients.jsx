import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


class Clients extends React.Component {
  render() {
    const { logged, clients } = this.props
    return(
      <div>
        {
          !logged ? <h1>Login não efetuado</h1> :
          <div>
            {clients.length === 0 ? <div> 
              <h1>Nenhum cliente cadastrado</h1>
              <Link to='/register'>Cadastrar Cliente</Link>
              </div> :
              <div>
                <Link to='/register'>Cadastrar Cliente</Link>
                <h1>Listagem de clientes cadastrados</h1>
              {clients.map((client, index) => (
                <div key={index}>
                  <p>Nome: {client.name}</p>
                  <p>Idade: {client.age}</p>
                  <p>e-mail: {client.email}</p>
                </div>
              ))}
            </div>
            }
          </div>
        }        
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  clients: state.customers.clients,
  logged: state.login.isLogged,
})

export default connect(mapStateToProps)(Clients);
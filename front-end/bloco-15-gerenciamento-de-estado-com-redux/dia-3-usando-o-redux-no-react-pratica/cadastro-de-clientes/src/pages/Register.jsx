import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveUser } from '../redux/actions/index'

class Register extends React.Component {
  state = {
    name: '',
    age: '',
    email:'',
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value
    })
  }

  register = () => {
    const { registerUser } = this.props;
    registerUser(this.state)
    this.setState({
      name: '',
      age: '',
      email: '',
    })
  }

  render() {
    const { name, age, email } = this.state;
    return(
      <div>
        <h1>Cadastro de clientes</h1>
        <form>
          <input type='text' name='name' placeholder='Nome completo do cliente' value={name} onChange={this.handleChange}/>
          <input type='number' name='age' placeholder='Idade do cliente(em anos)' value={age} onChange={this.handleChange}/>
          <input type='email' name='email' placeholder='E-mail do cliente' value={email} onChange={this.handleChange}/>
          <button type='button' onClick={ this.register }>Cadastrar</button>
        </form>
        <Link to='/clients'>Lista de clientes</Link>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  registerUser: (payload) => dispatch(saveUser(payload))
})

export default connect(null, mapDispatchToProps)(Register)
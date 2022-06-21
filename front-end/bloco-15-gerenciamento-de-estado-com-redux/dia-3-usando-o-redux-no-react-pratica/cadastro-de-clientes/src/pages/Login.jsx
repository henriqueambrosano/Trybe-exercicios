import React from 'react';
import { connect } from 'react-redux';
import {sendUserLogin} from '../redux/actions/index';

class Login extends React.Component {
  state = {
    user: '',
    password:'',
    isLogged: true
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]:value
    })
  }

  login = () => {
    const { sendLogin, history } = this.props;
    const { user, password } = this.state;
    if(user && password){
      sendLogin(this.state)
      history.push('/clients')
    } else {
      alert('Digite seu usuário e senha para continuar')
    }
  }
  
  render() {
    return(
      <div>
        <form>
          <input type='text' placeholder='Digite seu usuário' name='user' onChange={this.handleChange}/>
          <input type='password' placeholder='Digite sua senha' name='password' onChange={this.handleChange}/>
          <button type='button' onClick={this.login}>Entrar</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (payload) => dispatch(sendUserLogin(payload))
})

export default connect(null, mapDispatchToProps)(Login)
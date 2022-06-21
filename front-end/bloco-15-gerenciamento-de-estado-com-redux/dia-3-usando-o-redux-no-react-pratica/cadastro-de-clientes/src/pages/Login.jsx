import React from 'react';
import { connect } from 'react-redux';
import {sendUserLogin} from '../redux/actions/index';

class Login extends React.Component {
  state = {
    user: '',
    password:'',
  }

  handleChange = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]:value
    })
  }
  
  render() {
    const { sendLogin } = this.props
    return(
      <div>
        <form>
          <input type='text' placeholder='Digite seu usuário' name='user' onChange={this.handleChange}/>
          <input type='password' placeholder='Digite sua senha' name='password' onChange={this.handleChange}/>
          <button type='button' onClick={() => sendLogin(this.state)}>Entrar</button>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  sendLogin: (payload) => dispatch(sendUserLogin(payload))
})

export default connect(null, mapDispatchToProps)(Login)
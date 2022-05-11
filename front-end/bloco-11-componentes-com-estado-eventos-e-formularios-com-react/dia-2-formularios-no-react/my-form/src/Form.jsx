import React from 'react';
import './Form.css';

class Form extends React.Component {
  state = {
    color: '',
    name: '',
    email: '',
    curiosity: '',
  };

  handleInput = (event, state) => {
    this.setState({
      [state]: event.target.value,
    });
  };

  render() {
    return (
      <div className='my-form'>
        <form>
          <label>Selecione sua cor favorita: </label>
          <select
            onChange={(e) => this.handleInput(e, 'color')}
            value={this.state.color}
          >
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Black</option>
          </select>
          <label>Nome: </label>
          <input
            onChange={(e) => this.handleInput(e, 'name')}
            type='text'
            value={this.state.name}
          ></input>
          <label>Email: </label>
          <input
            onChange={(e) => this.handleInput(e, 'email')}
            type='email'
            value={this.state.email}
          ></input>
          <label>Escreva uma curiosidade sobre você: </label>
          <textarea
            onChange={(e) => this.handleInput(e, 'curiosity')}
            value={this.state.curiosity}
          ></textarea>
        </form>
      </div>
    );
  }
}

export default Form;

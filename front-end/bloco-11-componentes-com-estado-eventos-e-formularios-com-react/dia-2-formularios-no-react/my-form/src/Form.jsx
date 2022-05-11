import React from 'react';
import './Form.css';

class Form extends React.Component {
  state = {
    color: '',
    name: '',
    email: '',
    curiosity: '',
    hasDog: false,
    hasCat: false,
  };

  handleInput = ({ target }) => {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className='my-form'>
        <form>
          <label>Selecione sua cor favorita: </label>
          <select
            name='color'
            onChange={this.handleInput}
            value={this.state.color}
          >
            <option>Red</option>
            <option>Blue</option>
            <option>Green</option>
            <option>Black</option>
          </select>
          <label>Nome: </label>
          <input
            name='name'
            onChange={this.handleInput}
            type='text'
            value={this.state.name}
          ></input>
          <label>Email: </label>
          <input
            name='email'
            onChange={this.handleInput}
            type='email'
            value={this.state.email}
          ></input>
          <label>Escreva uma curiosidade sobre você: </label>
          <textarea
            name='curiosity'
            onChange={this.handleInput}
            value={this.state.curiosity}
          ></textarea>
          <label>
            Meus pets:
            <input
              type='checkbox'
              name='hasDog'
              onChange={this.handleInput}
              value={this.state.hasDog}
            />
            Dog
            <input
              type='checkbox'
              name='hasCat'
              onChange={this.handleInput}
              value={this.state.hasCat}
            />
            Cat
          </label>
          <fieldset>
            <label>Escolha uma foto de perfil: </label>
            <input type='file' />
          </fieldset>
        </form>
      </div>
    );
  }
}

export default Form;

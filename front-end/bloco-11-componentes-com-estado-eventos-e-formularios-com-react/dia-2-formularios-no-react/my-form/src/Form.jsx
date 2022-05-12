import React from 'react';
import './Form.css';
import Select from './Select';
import Input from './Input';

class Form extends React.Component {
  state = {
    color: 'Red',
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
          <Select value={this.state.color} handleInput={this.handleInput}/>          
          <Input name={'name'} value={this.state.name} handleInput={this.handleInput} handleError={this.handleError} label={'Nome: '} type={'text'}/>
          <Input name={'email'} value={this.state.email} handleInput={this.handleInput} label={'Email: '} type={'email'}/>
          <label>Escreva uma curiosidade sobre você: </label>
          <textarea
            name='curiosity'
            onChange={this.handleInput}
            value={this.state.curiosity}
          ></textarea>          
          <label>Meus pets:</label>
          <Input name={'hasDog'} value={this.state.hasDog} handleInput={this.handleInput} type={'checkbox'} pet={'Dog'}/>
          <Input name={'hasCat'} value={this.state.hasCat} handleInput={this.handleInput} type={'checkbox'} pet={'Cat'}/>            
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

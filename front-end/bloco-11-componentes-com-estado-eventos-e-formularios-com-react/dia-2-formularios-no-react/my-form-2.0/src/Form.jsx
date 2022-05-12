import React from 'react';

class Form extends React.Component {
  state = {
    name: '',
    email: '',
    CPF: 0,
    address: '',
    state: 'MG',
    tipo: '',
    curriculo: '',
    counter: 0,
    cargo: '',
    descricaoCargo: '',
  };

  handleInput = ({ target }) => {
    const { name, type } = target;
    let value;
    if (type === 'checkbox') {
      value = target.checked;
    } else if (type === 'radio') {
      value = target.id;
    } else {
      value = target.value;
    }
    if (name === 'name') value = value.toUpperCase();
    this.setState({
      [name]: value,
    });
  };

  toUpperCase = ({ target }) => {
    const value = target.value;
    target.value = value.toUpperCase();
  };

  alertPop = () => {
    if (this.state.counter === 0) {
      alert('Preencha este campo com cuidado');
      this.setState({ counter: 1 });
    }
  };

  render() {
    return (
      <section>
        <form>
          <fieldset>
            <label>Nome: </label>
            <input
              type='text'
              maxLength={40}
              name='name'
              onChange={(e) => {
                this.handleInput(e);
                this.toUpperCase(e);
              }}
              required
            ></input>
            <label>Email: </label>
            <input
              type='email'
              name='email'
              onChange={this.handleInput}
              maxLength={50}
              required
            ></input>
            <label>CPF: </label>
            <input
              type='text'
              name='CPF'
              maxLength={11}
              onChange={this.handleInput}
            ></input>
            <label>Endereço :</label>
            <input
              type='text'
              name='address'
              maxLength={200}
              onChange={this.handleInput}
              required
            ></input>
            <label>Estado: </label>
            <select name='state' onChange={this.handleInput} required>
              <option>MG</option>
              <option>SP</option>
              <option>RJ</option>
              <option>SC</option>
              <option>BSB</option>
              <option>AC</option>
              <option>AL</option>
              <option>TO</option>
              <option>RO</option>
              <option>RS</option>
              <option>RN</option>
              <option>ES</option>
            </select>
            <label>Tipo: </label>
            <input
              id='casa'
              type='radio'
              name='tipo'
              onChange={this.handleInput}
            />
            <label for='casa'>Casa</label>
            <input
              id='apto'
              type='radio'
              name='tipo'
              onChange={this.handleInput}
            />
            <label for='apto'>Apartamento</label>
          </fieldset>
          <fieldset>
            <label>Resumo do currículo: </label>
            <textarea
              name='curriculo'
              maxLength={1000}
              onChange={this.handleInput}
              required
            ></textarea>
            <label>Cargo: </label>
            <textarea
              name='cargo'
              maxLength={40}
              onChange={this.handleInput}
              onMouseEnter={this.alertPop}
              required
            ></textarea>
            <label>Descrição do cargo: </label>3
            <textarea
              name='descricaoCargo'
              type='text'
              maxLength={500}
              required
              onChange={this.handleInput}
            ></textarea>
          </fieldset>
        </form>
        <button>Montar Resumo</button>
      </section>
    );
  }
}

export default Form;

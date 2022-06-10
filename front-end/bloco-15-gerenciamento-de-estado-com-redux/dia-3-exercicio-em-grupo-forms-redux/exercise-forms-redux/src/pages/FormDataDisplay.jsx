import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class FormDataDisplay extends Component {
  render() {
    const { personalData, professionalData } = this.props;
    // Recupere as informações do seu estado criado no Redux
    const { curriculo, cargo, descricao } = professionalData;
    const { nome, email, cpf, endereco, cidade, estado } = personalData;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          {nome}
        </div>
        <div>
          Email:
          { email }
        </div>
        <div>
          CPF:
          { cpf }
        </div>
        <div>
          Endereço:
          { endereco }
        </div>
        <div>
          Cidade:
          { cidade }
        </div>
        <div>
          Estado:
          { estado }
        </div>
        <div>
          Currículo:
          { curriculo }
        </div>
        <div>
          Cargo:
          { cargo }
        </div>
        <div>
          Descrição do cargo:
          { descricao }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  personalData: state.personalReducer.personalData,
  professionalData: state.professionalReducer.professionalData,
});

FormDataDisplay.propTypes = {
  personalData: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
  }).isRequired,
  professionalData: PropTypes.shape({
    curriculo: PropTypes.string.isRequired,
    descricao: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
  }).isRequired,
};

export default connect(mapStateToProps)(FormDataDisplay);

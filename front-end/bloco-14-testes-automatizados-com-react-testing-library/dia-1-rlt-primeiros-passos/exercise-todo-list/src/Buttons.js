import React from 'react';
import PropTypes from 'prop-types';

class Buttons extends React.Component {
  state = {
    btnRemoveStatus: true,
  }

  selectTodo = (index) => {
    const { selectTodo } = this.props;
    this.setState({ btnRemoveStatus: false });
    selectTodo(index);
  }

  removeTodo = () => {
    const { removeTodo } = this.props;
    this.setState({ btnRemoveStatus: true });
    removeTodo();
  }

  render() {
    const { index } = this.props;
    const { btnRemoveStatus } = this.state;
    return (
      <div>
        <button
          type="button"
          onClick={ () => this.selectTodo(index) }
        >
          Selecionar

        </button>
        <button
          type="button"
          onClick={ this.removeTodo }
          disabled={ btnRemoveStatus }
        >
          Remover

        </button>
      </div>
    );
  }
}

Buttons.propTypes = {
  index: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired,
  selectTodo: PropTypes.func.isRequired,
};

export default Buttons;

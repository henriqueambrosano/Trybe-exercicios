import React from 'react';

class Select extends React.Component {
  render() {
      const { handleInput, value } = this.props
    return (
      <div>
        <label>Selecione sua cor favorita: </label>
        <select
          name='color'
          onChange={handleInput}
          value={value}
        >
          <option>Red</option>
          <option>Blue</option>
          <option>Green</option>
          <option>Black</option>
        </select>
      </div>
    );
  }
}

export default Select;

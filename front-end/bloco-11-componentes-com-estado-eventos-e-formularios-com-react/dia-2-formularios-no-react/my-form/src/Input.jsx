import React from 'react';

class Input extends React.Component {
  render() {
    const { label, handleInput, type, value, pet, name } = this.props;
    return (
      <div>
        <label>{label}</label>
        <input
          name={name}
          onChange={handleInput}
          type={type}
          value={value}
        ></input>
        {pet}
      </div>
    );
  }
}

export default Input;

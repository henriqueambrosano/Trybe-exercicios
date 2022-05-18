import React from 'react';

class Button extends React.Component {
  setClass = () => {
    if (this.props.classe < 2) {
      return 'hide';
    } else {
      return 'show';
    }
  };
  render() {
    return (
      <button
        className={this.setClass()}
        onClick={(e) => {
          this.props.function(e);
        }}
      >
        {this.props.children}
      </button>
    );
  }
}

export default Button;

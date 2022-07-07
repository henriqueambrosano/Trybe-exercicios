import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import myContext from './MyContext';

class App extends React.Component {
  state = {
    red: false,
    blue: false,
    yellow: false,
    signal: { color: 'red' },
  };

  moveCar = (car, side) => {
    this.setState({ [car]: side });
  };

  changeSignal = (color) => {
    this.setState({signal: {color}})
  }

  render() {
    const myValue = {
      state: this.state,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    };

    return (
      <myContext.Provider value={myValue}>
        <Cars />
        <TrafficSignal />
      </myContext.Provider>
    );
  }
}

export default App;

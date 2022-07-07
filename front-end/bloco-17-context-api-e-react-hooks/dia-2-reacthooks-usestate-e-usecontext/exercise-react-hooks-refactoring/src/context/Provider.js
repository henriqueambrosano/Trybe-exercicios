// src/context/Provider.js

import React, { useState } from 'react';
import CarsContext from './CarsContext';

function Provider({ children }) {
  const initialState = {
      red: false,
      blue: false,
      yellow: false,
      signal: { color: 'red' },
  };
  const [state, setState] = useState(initialState);

  function moveCar(car, side) {
    setState({ ...state, [car]: side });
  }

  function changeSignal(color) {
    setState({...state, signal: {color}})
  }

  const context = {
    state,
    moveCar,
    changeSignal,
  };


  return (
    <CarsContext.Provider value={context}>{children}</CarsContext.Provider>
  );
}

export default Provider;

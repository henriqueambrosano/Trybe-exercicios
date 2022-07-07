import React from 'react';
import './App.css';
import Cars from './Cars';
import TrafficSignal from './TrafficSignal';
import Provider from './context/Provider';

function App() {
    return (
      <Provider>
        <Cars />
        <TrafficSignal />
      </Provider>
    );
}

export default App;

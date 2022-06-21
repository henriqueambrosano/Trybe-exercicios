import React from 'react';
import './App.css';
import {Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Clients from './pages/Clients';
import Register from './pages/Register';

function App() {
  return (
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/clients' component={Clients}/>
        <Route path='/register' component={Register}/>
      </Switch>
  );
}

export default App;

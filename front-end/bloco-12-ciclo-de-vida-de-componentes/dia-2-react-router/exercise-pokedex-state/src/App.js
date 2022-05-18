import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import pokemons from './data';
import Details from './Details';
import Pokedex from './Pokedex';
import About from './About';
import NotFound from './NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Link to="/">Back to Home</Link>
        <Link to="/about">About pokedex</Link>
        <Switch>
          <Route
            path="/mais-detalhes/:id"
            render={(props) => <Details {...props} pokemons={pokemons} />}
          />
          <Route path="/about" render={() => <About />} />
          <Route
            exact
            path="/"
            render={() => <Pokedex pokemons={pokemons} />}
          />
          <Route path="*" render={() => <NotFound />} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

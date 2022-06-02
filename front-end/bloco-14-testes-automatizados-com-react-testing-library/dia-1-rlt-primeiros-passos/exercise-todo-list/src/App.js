import React, { Component } from 'react';
import Buttons from './Buttons';
import InputTodo from './InputTodo';
import Item from './Item';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listTodo: [],
      selectedTodo: null,
    };

    this.addTodo = this.addTodo.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  addTodo(todo) {
    this.setState((state) => ({ listTodo: [...state.listTodo, todo] }));
  }

  selectTodo(indexTodo) {
    this.setState({ selectedTodo: indexTodo });
  }

  removeTodo() {
    const { listTodo, selectedTodo } = this.state;
    listTodo.splice(selectedTodo, 1);
    this.setState({ listTodo });
  }

  render() {
    const { listTodo } = this.state;

    return (
      <main className="App">
        <InputTodo
          addTodo={ (todo) => this.addTodo(todo) }
        />
        <ul>
          { listTodo.map((todo, index) => (
            <li key={ index + 1 }>

              <Item content={ todo } />
              <Buttons
                index={ index }
                removeTodo={ this.removeTodo }
                selectTodo={ this.selectTodo }
              />
            </li>
          )) }
        </ul>
      </main>
    );
  }
}

export default App;

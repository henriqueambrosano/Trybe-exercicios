import React from 'react';
import './App.css';

class App extends React.Component {
  state = {
    api: '',
    loading: true,
  }

  async componentDidMount() {
    const data = await fetch('https://dog.ceo/api/breeds/image/random');
    const response = await data.json();
    this.setState({
      api: response,
      loading: false,
    });
  }

  shouldComponentUpdate(_nextProps, { api }) {
    const { message } = api;
    if (message.includes('terrier')) return false;
    return true;
  }

  componentDidUpdate() {
    const { api: { message } } = this.state;
    localStorage.setItem('dogurl', message);
    // alert(message.slice());
  }

  nextDog = () => {
    this.componentDidMount();
  }

  render() {
    const { loading, api: { message } } = this.state;
    const loadingElement = <p>Loading....</p>;
    return (
      <div>
        {loading
          ? loadingElement
          : <img width={ 600 } height={ 500 } src={ message } alt="cute dog" />}
        <button type="button" onClick={ this.nextDog }> Proxímo doguinho </button>
      </div>
    );
  }
}

export default App;

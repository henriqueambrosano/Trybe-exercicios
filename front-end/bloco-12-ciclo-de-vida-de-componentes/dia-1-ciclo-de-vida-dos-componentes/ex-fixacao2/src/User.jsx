import React from 'react';

class User extends React.Component{

  state ={
    api: '',
    loading: true,
    isOlderThan50: true,
  }

  shouldComponentUpdate(_nextProps, nextState) {
    const { age } = nextState.api.dob
    return age > 50 ? false : true
  }

 async componentDidMount() {
    const response = await fetch('https://api.randomuser.me/');
    const data = await response.json();
    const user = data.results[0];

    console.log(user)
    this.setState({
      api: user,
      loading: false
    })
  }

  
  render() {
    console.log('render')
    const { api: {name, picture, email, dob}, loading } = this.state
    const loadingElement = <p>Loading....</p>
    return(
      <div className="user-data">
        {!loading ? 
        <div>
          <img src={picture.large} alt={name.first}/>
          <p>Name: {`${name.title}. ${name.first} ${name.last}`}</p>
          <p>Email: {email}</p>
          <p>Age: {dob.age}</p>
        </div>
        : loadingElement }
      </div>
    )
  }
}

export default User;

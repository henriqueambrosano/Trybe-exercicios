import React from 'react';
import { Link } from 'react-router-dom'

class Home extends React.Component{
render() {
  return (
    <div>
      Página inicial<br/>
      <Link to='/login'>Login Page</Link>
    </div>
  )
}
}

export default Home
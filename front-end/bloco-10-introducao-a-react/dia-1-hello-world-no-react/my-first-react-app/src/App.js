import logo from './logo.svg';
import './App.css';

const compromissos = ['c1','c2','c3','c4','c5','c6']

const Task = (value) => {
  return (    
    <li>{value}</li>
  );
}

function App() {
  return(
    <div>
      {compromissos.map((el) => Task(el))}
    </div>
  )
}

export default App;

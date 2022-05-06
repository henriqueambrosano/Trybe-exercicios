import Header from './Header';
import Content from './Content';
import Footer from './Footer';


const compromissos = ['c1','c2','c3','c4','c5','c6']

const Task = (value) => {
  return (    
    <li>{value}</li>
  );
}

function App() {
  return(
    <div>
      <Header/>
      <Content />
      <Footer />
    </div>
  )
}

export default App;

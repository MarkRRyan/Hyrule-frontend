import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Monsters from './components/Monsters';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Monsters />
    </div>
  );
}

export default App;

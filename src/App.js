import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import Monsters from './components/Monsters';
import Nav from './components/Nav';
import Weapons from './components/Weapons'
import Home from './components/Home';
import { Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/monsters' element={<Monsters />} />
        <Route path='/weapons' element={<Weapons />} />
      </Routes>
    </div>
  );
}

export default App;

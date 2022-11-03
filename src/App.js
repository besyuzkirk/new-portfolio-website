import Scene from './sections/scene/Scene';
import Home from './sections/home/Home';
import './App.css';
import UnderWater from './sections/underwater/UnderWater';

function App() {
  return (
    <div className="App">
      <Scene />
      <Home />
      <UnderWater />
    </div>
  );
}

export default App;

//ToDo
//Summary.css responsivity issiue
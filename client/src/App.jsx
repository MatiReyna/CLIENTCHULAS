import { Routes, Route } from 'react-router-dom';

// Importacion de los componentes.
import About from './components/about/About';
import './App.css'

const App = () => {

  return (
    <div>
      <p className="read-the-docs">
        El proyecto esta levantado correctamente.
      </p>
      <Routes>
        <Route path='/about' element={ <About /> } />
      </Routes>
    </div>
  )
};

export default App
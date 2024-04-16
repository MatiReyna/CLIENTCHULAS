import { Routes, Route } from 'react-router-dom';

// Importacion de los componentes.
import Header from './components/header/roots/Header';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import './App.css'

const App = () => {

  return (
    <div>
      <p className="read-the-docs">
        El proyecto esta levantado correctamente.
      </p>
      <Header />
      <Routes>
        <Route path='/about' element={ <About /> } />
      </Routes>
      <Footer />
    </div>
  )
};

export default App
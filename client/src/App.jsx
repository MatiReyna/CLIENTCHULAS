import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importacion de los componentes.
import NavBar from './components/header/components/NavBar';
import Home from './components/home/roots/Home';
import About from './components/about/About';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';

const App = () => {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/faq' element={ <Faq /> } />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
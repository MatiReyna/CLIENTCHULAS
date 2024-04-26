import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importacion de los componentes.
import Header from './components/header/roots/Header';
import Home from './components/home/roots/Home';
import About from './components/about/About';
import Footer from './components/footer/Footer';
import './App.css'

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
      </Routes>
      <Footer />
    </div>
  )
};

export default App;
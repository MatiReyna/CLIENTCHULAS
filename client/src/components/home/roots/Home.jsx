import React from 'react';

import style from './Home.module.css';  //? Importamos los estilos del componente.

// Importamos componentes.
import Title from '../title/Title';
import TakeATurn from '../components/TakeATurn';
import About from '../components/About';
import Carousel from '../components/Carousel';
import Contact from '../components/Contact';

const Home = () => {

    return (
        <div>
            <div className={style.containerHome}>
                <Title subTitle='Te contamos en tres simples pasos como vas a poder gestionar tus turnitos' title='Apoyate en la imagen' />
                <TakeATurn />
                <About />
                <Title subTitle='GALLERY' title='Algunas muestras' />
                <Carousel />
                {/* <Contact /> */}
            </div>
        </div>
    )
};

export default Home;
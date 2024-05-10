import React from 'react';

import style from './Home.module.css';  //? Importamos los estilos del componente.

// Importamos componentes.
import TakeATurn from '../components/TakeATurn';
import Carousel from '../components/Carousel';
import Title from '../title/Title';

const Home = () => {

    return (
        <div>
            <div className={style.containerHome}>
                <Title subTitle='Te contamos en tres simples pasos como vas a poder gestionar tus turnitos' title='Apoyate en la imagen' />
                <TakeATurn />
                <Title subTitle='GALLERY' title='Algunas muestras' />
                <Carousel />
            </div>
        </div>
    )
};

export default Home;
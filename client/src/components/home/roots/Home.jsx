import React from 'react';

// Importamos componentes.
import TakeATurn from '../components/TakeATurn';
import Carousel from '../components/Carousel';
import Title from '../title/Title';

const Home = () => {

    return (
        <div>
            <div>
                <Title subTitle='Hola' title='Hola, Hola' />
                <TakeATurn />
                <Title subTitle='GALLERY' title='Algunas muestras' />
                <Carousel />
            </div>
        </div>
    )
};

export default Home;
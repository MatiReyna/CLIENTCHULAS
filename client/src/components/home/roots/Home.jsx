import React from 'react';

// Importamos componentes.
import TakeATurn from '../components/TakeATurn';
import Carousel from '../components/Carousel';
import Title from '../title/Title';

const Home = () => {

    return (
        <div>
            {/* <div>
                <Carousel />
            </div> */}
            <div>
                <Title subTitle='Hola' title='Hola, Hola' />
                <TakeATurn />
            </div>
        </div>
    )
};

export default Home;
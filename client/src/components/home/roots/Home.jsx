import React from 'react';

// Importamos componentes.
import TakeATurn from '../components/TakeATurn';
import Carousel from '../components/Carousel';

const Home = () => {

    return (
        <div>
            <div>
                <Carousel />
            </div>
            <div>
                <TakeATurn />
            </div>
        </div>
    )
};

export default Home;
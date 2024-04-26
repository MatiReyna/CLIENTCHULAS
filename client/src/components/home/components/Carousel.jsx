import React from 'react';
import { useState } from  'react';
import { accordion } from '../utils/accordion';

const Carousel = () => {

    const [ active, setActive ] = useState(0);

    return (
        <div>
            <section>
                {
                    accordion.map((card, index) => (
                        <article
                            key={card.image}
                            className={active === index ? 'active' : ''}
                            onClick={() => setActive(index)}
                        >
                            <img src={card.image} />
                            <div className={content}>
                                <span>photo_camera</span>
                                <div>
                                    <h2>{card.header}</h2>
                                    <p>{card.text}</p>
                                </div>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
    )
};

export default Carousel;
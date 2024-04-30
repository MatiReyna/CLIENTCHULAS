import React from 'react';
import { useState } from  'react';
import { accordion } from '../utils/accordion';

import style from './Carousel.module.css';  //? Importamos los estilos del componente.

const Carousel = () => {

    const [ active, setActive ] = useState(0);
    const [ expanded, setExpanded ] = useState(false);

    const handleImageClick = () => {
        setExpanded(!expanded)
    };

    return (
        <div>
            <section>
                {
                    accordion.map((card, index) => (
                        <article
                            key={card.image}
                            className={`${style.card} ${active === index ? style.active : ''} ${expanded ? style.expanded : ''}`}
                            onClick={() => setActive(index)}
                        >
                            <img src={card.image} alt={card.header} onClick={handleImageClick} />
                            <div className={style.content}>
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
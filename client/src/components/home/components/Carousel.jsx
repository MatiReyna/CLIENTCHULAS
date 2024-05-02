import React from 'react';
import { useState, useEffect } from  'react';
import { accordion } from '../utils/accordion';

import style from './Carousel.module.css';  //? Importamos los estilos del componente.

const Carousel = () => {

    const [ active, setActive ] = useState(0);
    const [ expanded, setExpanded ] = useState(false);

    useEffect(() => {  // Funcion para que cambia la imagen automaticamente del Carousel.
        const interval = setInterval(() => {
            setActive(active => (active + 1) % accordion.length)
        }, 5000)  // Cambia cada tres segundos la imagen.

        return () => clearInterval(interval)
    }, []);

    const handleImageClick = () => {
        clearInterval(interval)  // Detiene el cambio automatico cuando se le hace click.
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
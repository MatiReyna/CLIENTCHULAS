import React from 'react';

import style from './Carousel.module.css';  //? Importamos los estilos del componente.

const Carousel = () => {

    return (
        <div className={style.galleryContainer}>
            <div className={style.cardGallery}>
                <figure>
                    <img src='/about-mica.webp' />
                </figure>
            </div>
            <div className={style.cardGallery}>
                <figure>
                    <img src='/about-moro.webp' />
                </figure>
            </div>
            <div className={style.cardGallery}>
                <figure>
                    <img src='/logo-pagina.webp' />
                </figure>
            </div>
            <div className={style.cardGallery}>
                <figure>
                    <img src='/about-one.webp' />
                </figure>
            </div>
        </div>
    )
};

export default Carousel;
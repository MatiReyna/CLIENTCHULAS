import React from 'react';
import { FireOutlined } from '@ant-design/icons';

import style from './Carousel.module.css';  //? Importamos los estilos del componente.

const Carousel = () => {

    return (
        <div className={style.galleryContainer}>
            <div className={style.cardGallery}>
                <img src='/img-one.webp' />
                <img src='/img-two.webp' />
                <img src='/img-three.webp' />
                <img src='/img-four.webp' />
            </div>
            <button className={style.btnCarousel}>¡Quiero más! <FireOutlined className={style.iconCarousel} /></button>
        </div>
    )
};

export default Carousel;
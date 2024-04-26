import React from 'react';
import { firstText, secondText, thirdText } from './utils/constant';

import style from './About.module.css';  //? Importamos los estilos del componente.

const About = () => {

    return (
        <div className={style.container}>
            <div className={style.columncontainer}>
                <div>
                    <p className={style.firsttext}>{firstText}</p>
                    <img src='/about-one.webp' alt='about-one' className={style.imageone} />
                    <p className={style.secondtext}>{secondText}</p>
                </div>
                <div>
                    <img src='/about-mica.webp' alt='about-mica' className={style.imagetwo} />
                    <p className={style.thirdtext}>{thirdText}</p>
                    <img src='/about-moro.webp' alt='about-moro' className={style.imagethree} />
                </div>
            </div>
        </div>
    )
};

export default About;
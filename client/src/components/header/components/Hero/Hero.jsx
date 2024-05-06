import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';

import style from './Hero.module.css';  //? Importamos los estilos del componente.

const Hero = () => {

    return (
        <div className={style.heroContainer}>
            <div className={style.heroText}>
                <h2>Hacete las mejores uñas y disfruta</h2>
                <p>Tomate un tiempo para vos y date unos mismo a esas manos.
                Acá, te vamos a cuidar como te lo mereces, no esperes más
                para pensar en vos y saca un turno</p>
                <button className={style.btnHero}>Saca turno <CalendarOutlined className={style.iconHero} /></button>
            </div>
        </div>
    )
};

export default Hero;
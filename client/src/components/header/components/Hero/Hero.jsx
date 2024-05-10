import React from 'react';
import { CalendarOutlined } from '@ant-design/icons';
import { Link, useLocation } from 'react-router-dom';

import style from './Hero.module.css';  //? Importamos los estilos del componente.

const Hero = () => {

    const { pathname } = useLocation();  // Obtener la ruta actual.

    const isVisible = pathname !== '/calendar';  // Verificar si la ruta es diferente de '/calendar'.

    return (
        isVisible && (
            <div className={style.heroContainer}>
                <div className={style.heroText}>
                    <h2>Hacete las mejores uñas y disfruta</h2>
                    <p>Tomate un tiempo para vos y date unos mismo a esas manos.
                        Acá, te vamos a cuidar como te lo mereces, no esperes más
                        para pensar en vos y saca un turno</p>

                    <Link to='/calendar'>
                        <button className={style.btnHero} aria-label='Sacar turno'>Saca turno <CalendarOutlined className={style.iconHero} /></button>
                    </Link>
                </div>
            </div>
        )
    )
};

export default Hero;
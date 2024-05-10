import React from 'react';
import { CalendarOutlined, ClockCircleOutlined, LikeOutlined } from '@ant-design/icons';  // Importamos los iconos necesarios.
import { Avatar } from 'antd';

import style from './TakeATurn.module.css';  //? Importamos los estilos del componente.
import buscar from '../utils/buscar.webp';
import esperar from '../utils/esperar.webp';
import seleccionar from '../utils/seleccionar.webp';

const TakeATurn = () => {

    return (
        <div className={style.takeaturnContainer}>
            <div className={style.seleccion}>
                <img src={buscar} alt='Busca tu turno' />
                <div className={style.caption}>
                    <Avatar
                        className={style.icon}
                        size={100}
                        icon={ <CalendarOutlined /> }
                    />
                    <p>Busca el día y hora en el turnero</p>
                </div>
            </div>
            <div className={style.seleccion}>
                <img src={esperar} alt='Aguarda la confirmación' />
                <div className={style.caption}>
                    <Avatar
                        className={style.icon}
                        size={100}
                        icon={ <ClockCircleOutlined /> }
                    />
                    <p>Aguarda que te confirmen el turno...</p>
                </div>
            </div>
            <div className={style.seleccion}>
                <img src={seleccionar} alt='Listo, disfruta' />
                <div className={style.caption}>
                    <Avatar
                        className={style.icon}
                        size={100}
                        icon={ <LikeOutlined /> }
                    />
                    <p>¡Listo, disfruta de tus nuevas uñas!</p>
                </div>
            </div>
        </div>
    )
};

export default TakeATurn;

//TODO: Este componente es el encargado de mostrar la explicación de como sacar un turno de manera simple y corta.
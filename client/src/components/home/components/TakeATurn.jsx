import React from 'react';

// Importamos los iconos de 'antd'.
import { CalendarOutlined, CarryOutOutlined, ClockCircleOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import style from './TakeATurn.module.css';

const TakeATurn = () => {

    return (
        <div className={style.container}>
            <div>TE MOSTRAMOS LOS PASOS A SEGUIR PARA QUE PUEDAS SACAR UN TURNO 🤙🏼</div>

            <div>
                <div>
                    <Avatar
                        style={{ backgroundColor: '#28445c' }}
                        size={70}
                        icon={ <CalendarOutlined /> }
                    />
                    <p>BUSCÁ EL DÍA Y HORA EN EL TURNERO</p>
                </div>
                <div>
                    <Avatar
                        style={{ backgroundColor: '#28445c' }}
                        size={70}
                        icon={ <CarryOutOutlined /> }
                    />
                    <p>SELECCIONA EL QUE MÁS TE CONVENGA</p>
                </div>
                <div>
                    <Avatar
                        style={{ backgroundColor: '#28445c' }}
                        size={70}
                        icon={ <ClockCircleOutlined /> }
                    />
                    <p>AGUARDA QUE TE CONFIRMEN EL TURNO...</p>
                </div>
                <div>
                    <Avatar
                        style={{ backgroundColor: '#28445c' }}
                        size={70}
                        icon={ <LikeOutlined /> }
                    />
                    <p>LISTO, DISFRUTA DE TUS NUEVAS UÑAS</p>
                </div>
            </div>
        </div>
    )
};

export default TakeATurn
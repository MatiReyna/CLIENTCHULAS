import React from 'react';

// Importamos los iconos de 'antd'.
import { CalendarOutlined, CarryOutOutlined, ClockCircleOutlined, LikeOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import style from './TakeATurn.module.css';

const TakeATurn = () => {

    return (
        <div className={style.container}>
            <div className={style.title}>
                ¡Sigue estos simples pasos para sacar un turno!
            </div>

            <div className={style.stepsContainer}>
                <div className={style.step}>
                    <Avatar
                        className={style.icon}
                        size={70}
                        icon={ <CalendarOutlined /> }
                    />
                    <p>Busca el día y hora en el turnero</p>
                </div>
                <div className={style.step}>
                    <Avatar
                        className={style.icon}
                        size={70}
                        icon={ <CarryOutOutlined /> }
                    />
                    <p>Selecciona el que más te convenga</p>
                </div>
                <div className={style.step}>
                    <Avatar
                        className={style.icon}
                        size={70}
                        icon={ <ClockCircleOutlined /> }
                    />
                    <p>Aguarda que te confirmen el turno...</p>
                </div>
                <div className={style.step}>
                    <Avatar
                        className={style.icon}
                        size={70}
                        icon={ <LikeOutlined /> }
                    />
                    <p>¡Listo, disfruta de tus nuevas uñas!</p>
                </div>
            </div>
        </div>
    )
};

export default TakeATurn
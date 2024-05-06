import React from 'react';
import { CalendarOutlined, CarryOutOutlined, ClockCircleOutlined, LikeOutlined } from '@ant-design/icons';  // Importamos los iconos necesarios.
import { Avatar } from 'antd';

import style from './TakeATurn.module.css';  //? Importamos los estilos del componente.
import buscar from '../utils/buscar.webp';
import seleccionar from '../utils/seleccionar.webp';
import esperar from '../utils/esperar.webp';

const TakeATurn = () => {

    return (
        // <div className={style.container}>
        //     <div className={style.title}>
        //         ¡Sigue estos simples pasos para sacar un turno!
        //     </div>

        //     <div className={style.stepsContainer}>
        //         <div className={style.step}>
        //             <Avatar
        //                 className={style.icon}
        //                 size={70}
        //                 icon={ <CalendarOutlined /> }
        //             />
        //             <p>Busca el día y hora en el turnero</p>
        //         </div>
        //         <div className={style.step}>
        //             <Avatar
        //                 className={style.icon}
        //                 size={70}
        //                 icon={ <CarryOutOutlined /> }
        //             />
        //             <p>Selecciona el que más te convenga</p>
        //         </div>
        //         <div className={style.step}>
        //             <Avatar
        //                 className={style.icon}
        //                 size={70}
        //                 icon={ <ClockCircleOutlined /> }
        //             />
        //             <p>Aguarda que te confirmen el turno...</p>
        //         </div>
        //         <div className={style.step}>
        //             <Avatar
        //                 className={style.icon}
        //                 size={70}
        //                 icon={ <LikeOutlined /> }
        //             />
        //             <p>¡Listo, disfruta de tus nuevas uñas!</p>
        //         </div>
        //     </div>
        // </div>
        <div className={style.takeaturnContainer}>
            <div className={style.seleccion}>
                <img src={buscar} alt='buscar' />
                <div className={style.caption}>
                    <Avatar
                        className={style.icon}
                        size={70}
                        icon={ <CalendarOutlined /> }
                    />
                    <p>Busca el día y hora en el turnero</p>
                </div>
            </div>
            <div className={style.seleccion}>
                <img src={seleccionar} alt='seleccionar' />
                <div className={style.caption}>
                    <Avatar
                        className={style.icon}
                        size={70}
                        icon={ <CarryOutOutlined /> }
                    />
                    <p>Selecciona el que más te convenga</p>
                </div>
            </div>
            <div className={style.seleccion}>
                <img src={esperar} alt='esperar' />
                <div className={style.caption}>
                    <Avatar
                        className={style.icon}
                        size={70}
                        icon={ <ClockCircleOutlined /> }
                    />
                    <p>Aguarda que te confirmen el turno...</p>
                </div>
            </div>
            <div className={style.seleccion}>
                <img src='./about-moro.webp' alt='disfruta' />
                <div className={style.caption}>
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

export default TakeATurn;

//TODO: Este componente es el encargado de mostrar la explicación de como sacar un turno de manera simple y corta.
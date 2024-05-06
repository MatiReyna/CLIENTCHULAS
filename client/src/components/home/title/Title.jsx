import React from 'react';

import style from './Title.module.css';  //? Importamos los estilos del componente.

const Title = ({ subTitle, title }) => {

    return (
        <div className={style.titleContainer}>
            <p>{subTitle}</p>
            <h2>{title}</h2>
        </div>
    )
};

export default Title;
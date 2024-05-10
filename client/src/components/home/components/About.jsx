import React from 'react';
import { PlayCircleOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import style from './About.module.css';  //? Importamos los estilos del componente.

const About = () => {

    return (
        <div className={style.aboutContainer}>
            <div className={style.aboutLeft}>
                <img src='/about-one.webp' alt='' className={style.aboutImg} />
                <Avatar
                    className={style.playIcon}
                    size={100}
                    icon={ <PlayCircleOutlined /> }
                />
            </div>
            <div className={style.aboutRight}>
                <h3>ABOUT MISS CHULAS</h3>
                <h2>Minima nesciunt animi rem nihil tempore dolorum.</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias eligendi alias autem itaque incidunt labore ab voluptatibus fuga corporis natus placeat repellendus unde exercitationem est provident, magnam quaerat architecto? Et!</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta accusamus tempora quibusdam dolor nobis saepe, mollitia reprehenderit dolore recusandae iste quo. Aliquid voluptates veritatis laudantium nemo doloremque corrupti tempore ratione!</p>
            </div>
        </div>
    )
};

export default About;
import React from 'react';
import { Link } from 'react-router-dom';

import { FAQ, changePolicies, contact, callPhone, email, dayOperation, day } from './utils/constant';
import { InstagramOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import style from './Footer.module.css';  //? Importamos los estilos del componente.

const Footer = () => {

    return (
        <div className={style.footerContainer}>
            <div>
                <img src='/logo-pagina.png' alt='logoFooter' className={style.logoFooter} />
            </div>
            <div>
                <Link to={'/faq'}>
                    <p>{FAQ}</p>
                </Link>
                <Link to={'/change-policies'}>
                    <p>{changePolicies}</p>
                </Link>
            </div>
            <div>
                <p>{contact}</p>
                <p style={{ fontWeight: 'bold' }}>{callPhone}</p>
                <p style={{ fontWeight: 'bold' }}>{email}</p>
                <p>{dayOperation}</p>
                <p>{day}</p>
                <p>¡Gracias por visitarnos!</p>
            </div>
            
            <a
                href='https://www.instagram.com/misschulas/?igsh=MXRzOTFmMm9qNXhyeQ%3D%3D'
                target='_blank'
                rel='noopener noreferrer'
            >
                <Avatar
                    className={style.icon}
                    size={70}
                    icon={ <InstagramOutlined /> }
                />
            </a>
            <p>Seguinos para enterarte de todo</p>
        </div>
    )
};

export default Footer
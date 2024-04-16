import React from 'react';
import { Link } from 'react-router-dom';

import { FAQ, changePolicies, contact, callPhone, email, dayOperation, day } from './utils/constant';

import style from './Footer.module.css';

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
                <p>{callPhone}</p>
                <p>{email}</p>
                <p>{dayOperation}</p>
                <p>{day}</p>
            </div>
        </div>
    )
};

export default Footer
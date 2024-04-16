import React from 'react';
import { Link } from 'react-router-dom';

import { FAQ, changePolicies, contact, callPhone, email, dayOperation, day } from './utils/constant';

const Footer = () => {

    return (
        <div>
            <div>
                <img src='/logo-pagina.png' alt='logoFooter' />
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
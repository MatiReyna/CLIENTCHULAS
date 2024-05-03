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
                <img src='/logo-pagina.webp' alt='logoFooter' className={style.logoFooter} />
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

            <div className={style.footerCopyright}>
                <p>@2024 Miss Chulas, Inc. All rights reserved.</p>
                <p>Privacy Policy.</p>
                <p>Terms of Use.</p>
            </div>
        </div>
        // <footer className={style.footerContainer}>
        //     <div className={style.footerWrapper}>
        //         <div className={style.footerSection}>
        //             <div className={style.footerSubscribe}>
        //                 <h2>
        //                     Subscribe to the Miss Chulas® newslatter to say
        //                     up-to-date with the latest releases.
        //                 </h2>
        //                 <div className={style.box}>
        //                     <input type='email' placeholder='Email Address' />
        //                     <button>💖</button>
        //                 </div>
        //             </div>
        //         </div>
        //         <nav className={style.footerNav}>
        //             <div>
        //                 <h3>Company</h3>
        //                 <ul>
        //                     <li><a>About</a></li>
        //                     <li><a>Blog</a></li>
        //                     <li><a>Contact Us</a></li>
        //                 </ul>
        //             </div>
        //             <div>
        //                 <h3>Connect</h3>
        //             </div>
        //         </nav>
        //         <div className={style.footerCopyright}>
        //             <p>©2024 Miss Chulas, Inc. All rights reserved.</p>
        //             <p>Privacy Policy.</p>
        //             <p>Terms of Use.</p>
        //         </div>
        //     </div>
        // </footer>
    )
};

export default Footer;
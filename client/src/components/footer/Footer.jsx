import React from 'react';
import { Link } from 'react-router-dom';

import { FAQ, changePolicies, contact, callPhone, email, dayOperation, day } from './utils/constant';
import { InstagramOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import style from './Footer.module.css';  //? Importamos los estilos del componente.

const Footer = () => {

    return (
        // <div className={style.footerContainer}>
        //     <div>
        //         <img src='/logo-pagina.webp' alt='logoFooter' className={style.logoFooter} />
        //     </div>
        //     <div>
        //         <Link to={'/faq'}>
        //             <p>{FAQ}</p>
        //         </Link>
        //         <Link to={'/change-policies'}>
        //             <p>{changePolicies}</p>
        //         </Link>
        //     </div>
        //     <div>
        //         <p>{contact}</p>
        //         <p style={{ fontWeight: 'bold' }}>{callPhone}</p>
        //         <p style={{ fontWeight: 'bold' }}>{email}</p>
        //         <p>{dayOperation}</p>
        //         <p>{day}</p>
        //         <p>¡Gracias por visitarnos!</p>
        //     </div>

        //     <a
        //         href='https://www.instagram.com/misschulas/?igsh=MXRzOTFmMm9qNXhyeQ%3D%3D'
        //         target='_blank'
        //         rel='noopener noreferrer'
        //     >
        //         <Avatar
        //             className={style.icon}
        //             size={70}
        //             icon={ <InstagramOutlined /> }
        //         />
        //     </a>
        //     <p>Seguinos para enterarte de todo</p>

        //     <div className={style.footerCopyright}>
        //         <p>@2024 Miss Chulas, Inc. All rights reserved.</p>
        //         <p>Privacy Policy.</p>
        //         <p>Terms of Use.</p>
        //     </div>
        // </div>
        <div className={style.footerContainer}>
            <div className={style.footer}>
                <div className={style.newslatter}>
                    <div className={style.newslatterLeft}>
                        <h2>Sbscribe to our</h2>
                        <h1>Newslatter</h1>
                    </div>
                    <div className={style.newslatterRight}>
                        <div className={style.newslatterInput}>
                            <input type='text' placeholder='Enter your email adress' />
                            <button>Submit</button>
                        </div>
                    </div>
                </div>

                <div>
                    <div>
                        <h2>Vee Teach</h2>
                        <p>Distinctio, architecto perferendis corrupti deleniti, cum assumenda, accusantium neque illum nobis ipsa necessitatibus dolores itaque?.</p>
                        <div>
                            <a herf='#'><i></i></a>
                            <a herf='#'><i></i></a>
                            <a herf='#'><i></i></a>
                            <a herf='#'><i></i></a>
                        </div>
                    </div>
                </div>
                <div>
                    <p>Information</p>
                    <a>Our Company</a>
                    <a>About Us</a>
                    <a>Blog</a>
                </div>
                <div>
                    <p>Helpful Links</p>
                    <a>Service</a>
                    <a>Support</a>
                    <a>Terms & Condition</a>
                </div>
                <div>
                    <p>Navegation</p>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                </div>
            </div>
        </div>
    )
};

export default Footer;
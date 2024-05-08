import React from 'react';
import { Link } from 'react-router-dom';

import { InstagramOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import style from './Footer.module.css';  //? Importamos los estilos del componente.

const Footer = () => {

    return (
        <footer className={style.footerContainer}>
            <section className={style.newslatterSection}>
                <div className={style.newslatterLeft}>
                    <h2>Suscribite to our</h2>
                    <h1>Newslatter</h1>
                </div>
                <div className={style.newslatterRight}>
                    <div className={style.newslatterInput}>
                        <input type='text' placeholder='Enter your email adress' />
                        <button>Submit</button>
                    </div>
                </div>
            </section>

            <section className={style.footerContent}>
                <article className={style.footerMain}>
                    <h2>Vee Teach</h2>
                    <p>Distinctio necessitatibus dolores itaque?.</p>
                    <div>
                        <a herf='#'><i></i></a>
                        <a herf='#'><i></i></a>
                        <a herf='#'><i></i></a>
                        <a herf='#'><i></i></a>
                    </div>
                </article>
                <article className={style.links}>
                    <p>Information</p>
                    <a>Our Company</a>
                    <a>About Us</a>
                    <a>Blog</a>
                </article>
                <article className={style.links}>
                    <p>Helpful Links</p>
                    <a>Service</a>
                    <a>Support</a>
                    <a>Terms & Condition</a>
                </article>
                <article className={style.links}>
                    <p>Navegation</p>
                    <a>Home</a>
                    <a>About</a>
                    <a>Contact</a>
                </article>
            </section>
        </footer>
    )
};

export default Footer;
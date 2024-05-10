import React from 'react';
import { Link } from 'react-router-dom';
import { InstagramOutlined, LinkedinOutlined, PinterestOutlined, TikTokOutlined } from '@ant-design/icons';

import style from './Footer.module.css';  //? Importamos los estilos del componente.

const Footer = () => {

    return (
        <footer className={style.footerContainer}>
            <section className={style.newslatterSection}>
                <div className={style.newslatterLeft}>
                    <h2>Subscribe to our</h2>
                    <h1>Newslatter</h1>
                </div>
                <div className={style.newslatterRight}>
                    <div className={style.newslatterInput}>
                        <input type='text' placeholder='Enter your email adress' />
                        <button aria-label='Submit'>Submit</button>
                    </div>
                </div>
            </section>

            <section className={style.footerContent}>
                <article className={style.footerMain}>
                    <img src='/logo-pagina.webp' alt='logoFooter' className={style.logo} />
                    <h2>Miss Chulas</h2>
                    <p>Trasformando uñitas, seguinos en nuestras redes.</p>
                    <div className={style.linkSocial}>
                        <a herf='#'><InstagramOutlined /></a>
                        <a herf='#'><LinkedinOutlined /></a>
                        <a herf='#'><PinterestOutlined /></a>
                        <a herf='#'><TikTokOutlined /></a>
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
                    <Link to='/'>
                        <a>Home</a>
                    </Link>
                    <a>About</a>
                    <a>Contact</a>
                </article>
                <div className={style.footerCopyright}>
                <p>Copyright © 2024 Miss Culas, Inc.</p>
                <ul>
                    <li>Terms of Services</li>
                    <li>Privacy Police</li>
                </ul>
            </div>
            </section>
        </footer>
    )
};

export default Footer;
import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './NavBar.module.css';  //? Importamos los estilos del componente.

const NavBar = () => {

    const { pathname } = useLocation();  // Aca saco donde esta parado el usuario.
    const [ sticky, setSticky ] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 430 ? setSticky(true) : setSticky(false);
        })
    }, []);

    return (
        <nav className={`${style.navbarContainer} ${sticky ? style.darkNavbar : ''}`}>
            <Link to='/'>
            <img src='logo-pagina.webp' alt='logoHeader' className={style.logo} />
            </Link>
            <ul>
                <li className={pathname === '/' ? style.active : ''}>
                    <Link to='/'>Home</Link>
                </li>
                <li className={pathname === '/calendar' ? style.active : ''}>
                    <Link to='/calendar'>Turnero</Link>
                </li>
                <li className={pathname === '/about' ? style.active : ''}>
                    <Link to='/about'>About Us</Link>
                </li>
                <li className={pathname === '/faq' ? style.active : ''}>
                    <Link to='faq'>FAQ</Link>
                </li>
                <li>
                    <button className={style.btnContact}>
                        Contact Us
                    </button>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
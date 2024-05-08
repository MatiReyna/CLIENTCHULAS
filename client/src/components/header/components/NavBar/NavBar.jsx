import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

import style from './NavBar.module.css';  //? Importamos los estilos del componente.

const NavBar = () => {

    const { pathname } = useLocation();  // Aca saco donde esta parado el usuario.
    const [ sticky, setSticky ] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.innerHeight * 0.9
            setSticky(window.scrollY > offset)
        }
        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
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
                    <button className={style.btnContact} aria-label='Conatct Us'>
                        Contact Us
                    </button>
                </li>
            </ul>
        </nav>
    )
};

export default NavBar;
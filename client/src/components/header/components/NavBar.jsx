import React from 'react';
import { useLocation, Link } from 'react-router-dom';

import style from './NavBar.module.css';  //? Importamos los estilos del componente.

const NavBar = () => {

    const { pathname } = useLocation();

    return (
        <div>
            <nav>
                <ul className={style.container}>
                    <li className={pathname === '/' ? style.active : ''}>
                        <Link to='/'>HOME</Link>
                    </li>
                    <li className={pathname === '/calendar' ? style.active : ''}>
                        <Link to='/calendar'>TURNERO</Link>
                    </li>
                    <li className={pathname === '/about' ? style.active : ''}>
                        <Link to='/about'>SOBRE MI</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};

export default NavBar;
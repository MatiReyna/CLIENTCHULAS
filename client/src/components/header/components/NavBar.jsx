import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { useState } from 'react';
import { MenuOutlined, CloseOutlined } from '@ant-design/icons';

import style from './NavBar.module.css';  //? Importamos los estilos del componente.

const NavBar = () => {

    const { pathname } = useLocation();  // Aca saco donde esta parado el usuario.
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    };

    return (
        // <div className={style.navbarContainer}>
        //     <Link to="/" className={style.logoLink}>
        //     <img src='logo-pagina.webp' alt='logoHeader' className={style.logo} />
        //     </Link>

        //     {/* Botón de menú para dispositivos móviles */}
        //     <div className={style.menuToggle} onClick={toggleMenu}>
        //         { isMenuOpen ? <CloseOutlined /> : <MenuOutlined /> }
        //     </div>

        //     <ul className={`${style.list} ${isMenuOpen ? style.open : ''}`}>
        //         <li className={pathname === '/' ? style.active : ''}>
        //             <Link to='/' onClick={toggleMenu}>HOME</Link>
        //         </li>
        //         <li className={pathname === '/calendar' ? style.active : ''}>
        //             <Link to='/calendar' onClick={toggleMenu}>TURNERO</Link>
        //         </li>
        //         <li className={pathname === '/about' ? style.active : ''}>
        //             <Link to='/about' onClick={toggleMenu}>SOBRE MI</Link>
        //         </li>
        //     </ul>

        //     <div className={style.search}>
        //         <input type='text' placeholder='Search' />
        //     </div>
        // </div>
        <nav className={style.navbarContainer}>
            <img src='logo-pagina.webp' alt='logoHeader' className={style.logo} />
            <ul>
                <li>Home</li>
                <li>Turnero</li>
                <li>About Us</li>
                <li>FAQ</li>
                <li>HOME</li>
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
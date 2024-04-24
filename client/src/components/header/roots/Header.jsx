import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';

import style from './Header.module.css';  //? Importamos los estilos del componente.

const Header = () => {

    return (
        <div className={style.headercontainer}>
            <div>
                <Link to='/'>
                    <img src='logo-pagina.png' alt='logoHeader' className={style.logo} />
                </Link>
            </div>
            <div className={style.navbar}>
                <NavBar />
            </div>
        </div>
    )
};

export default Header
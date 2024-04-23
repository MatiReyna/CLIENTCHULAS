import React from 'react';
import { Flex } from 'antd';
import { useLocation, Link } from 'react-router-dom';

import style from './NavBar.module.css';  //? Importamos los estilos del componente.

const NavBar = () => {

    const { pathname } = useLocation();

    return (
        <div>
            <nav>
                <Flex gap='large' wrap='wrap'>
                    <ul className={style.container}>
                        <li className={pathname === '/' ? style.active : ''}>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/calendar'>TURNERO</Link>
                        </li>
                        <li>
                            <Link to='/about'>SOBRE MI</Link>
                        </li>
                    </ul>
                </Flex>
            </nav>
        </div>
    )
};

export default NavBar
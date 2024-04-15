import { Flex } from 'antd';
import { Link } from 'react-router-dom';

// Importamos los estilos.
import style from './NavBar.module.css';

const NavBar = () => {

    return (
        <div>
            <nav>
                <Flex gap='large' wrap='wrap'>
                    <ul className={style.container}>
                        <li>
                            <Link to='/'>HOME</Link>
                        </li>
                        <li>
                            <Link to='/calendar'>TURNERO</Link>
                        </li>
                        <li>
                            <Link to='/about'>PROPÓSITO</Link>
                        </li>
                    </ul>
                </Flex>
            </nav>
        </div>
    )
};

export default NavBar
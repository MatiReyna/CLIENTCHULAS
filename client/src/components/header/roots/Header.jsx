// Importacion de los componentes.
import NavBar from '../components/NavBar';

// Importamos los estilos del componente.
import style from './Header.module.css';

const Header = () => {

    return (
        <div className={style.headercontainer}>
            <div>
                <a href='/'>
                    <img src='logo-pagina.png' alt='logo' className={style.logo} />
                </a>
            </div>
            <div className={style.navbar}>
                <NavBar />
            </div>
        </div>
    )
};

export default Header
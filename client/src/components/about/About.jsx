// Importamos las constantes que contiene los textos.
import { firstText, secondText, thirdText } from './utils/constant';

// Importamos los estilos.
import style from './About.module.css';

const About = () => {

    return (
        <div className={style.container}>
            <div className={style.columncontainer}>
                <div>
                    <p className={style.firsttext}>{firstText}</p>
                    <img src='/about-one.jpeg' alt='about-one' className={style.imageone} />
                    <p className={style.secondtext}>{secondText}</p>
                </div>
                <div>
                    <img src='/about-two.jpeg' alt='about-two' className={style.imagetwo} />
                    <p className={style.thirdtext}>{thirdText}</p>
                    <img src='/about-three.jpeg' alt='about-three' className={style.imagethree} />
                </div>
            </div>
        </div>
    )
};

export default About
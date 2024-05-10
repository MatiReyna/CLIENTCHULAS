import React from 'react';

import style from './Contact.module.css';  //? Importamos los estilos del componente.

const Contact = () => {

    return (
        <div className={style.contactContainer}>
            <div className={style.contactLeft}>
                <h2>Contact</h2>
                <h3>Caseros 954</h3>
            </div>
            <div className={style.contactRight}>
            <iframe src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.989532629006!2d-64.20024172474069!3d-31.414414474262614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298803171ff21%3A0xe46ef3775fe2483d!2sCaseros%20954%2C%20C%C3%B3rdoba!5e0!3m2!1ses-419!2sar!4v1715373503761!5m2!1ses-419!2sar'></iframe>
            </div>
        </div>
    )
};

export default Contact;
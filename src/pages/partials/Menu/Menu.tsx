import React from 'react';

import './style.scss'
import logoDeterminados from '../../../assets/images/logotipo-determinados-icone-branco.svg';

const Menu = () => {
    return(
        <header id="header_rd">
            <nav>
                <img src={logoDeterminados} alt="Logotipo Rede Determinados"/>
                <ul>
                    <li><a href="javascript:void(0)">Home</a></li>
                    <li><a href="javascript:void(0)">Quem somos</a></li>
                    <li><a href="javascript:void(0)">Parceiros</a></li>
                    <li><a href="javascript:void(0)">Membros</a></li>
                    <li id="fale_conosco">
                        <a href="javascript:void(0)">Fale com a gente</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Menu;
import React from 'react';

import './style.scss'
import imgLogotipo from '../../../assets/images/logotipo-determinados-icone-branco.svg'

const Footer = () => {
    return (
        <div className="footer" id="footer-rd">
            <div className="container">
                <div className="row">
                    <div className="footer__block" id="about">
                        <img src={imgLogotipo} alt="Logotipo Rede Determinados"/>
                        <p className="mb-0 mt-3 text-white">© Rede Determinados. <span className="d-block">Todos os direitos reservados.</span> </p>
                    </div>
                    <div className="footer__block" id="companhia">
                        <h4 className="footer__title">Companhia</h4>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="" className="footer__link">Sobre nós</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Missão</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Entre em contato</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block" id="companhia">
                        <h4 className="footer__title">Seja um parceiro</h4>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="" className="footer__link">Junte-se a nós</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Aprimore suas habilidades</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Se torne um mentor</a>
                            </li>
                            <li className="footer__item">
                                <a href="" className="footer__link">Seja um investidor</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__block" id="companhia">
                        <h4 className="footer__title">Siga-nos</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Footer;

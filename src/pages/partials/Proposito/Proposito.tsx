import React from 'react';
import './style.scss'

import imgProposito from '../../../assets/images/proposito.svg';
import imgEconomiaColaborativa from '../../../assets/images/economia-colaborativa.svg';
const Proposito = () => {
    return(
        <div className="container" id="nosso_proposito">
            <div className="row">
                <div className="col-12 col-lg-5 col-xl-6">
                    <img src={imgProposito} className="img-fluid" alt="Propósito Rede Determinados"/>
                </div>
                <div className="col-12 col-lg-7 col-xl-6">
                    <h2>
                        <span className="d-block">nosso</span>
                        Propósito<span>.</span>
                    </h2>
                    <div className="description">
                        <p className="mb-0">Ajudamos empreendedora que tem uma ideia, projeto ou startup em andamento, porém, se esbarram nas principais dificuldades que são: planejamento, burocracia, financeiro, entre outras.</p>
                        <p className="mb-0">Após a mentoria, o projeto ou startup apresentada demonstre viabilidade e precise de investimento será apresentado a investidores para avaliação e possível aporte dessa necessidade.</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-7 col-xl-6">
                    <h2>
                        <span className="d-block">economia</span>
                        Colaborativa<span>.</span>
                    </h2>
                    <div className="description">
                        <p className="mb-0">Voltado aos empreendedores colaborativos que tem habilidades profissionais e queiram colocar a disposição da rede em troca de cumprir carga horária para universidade adquirindo expertise na sua área de atuação ou que queiram intraempreender numa startup.</p>
                    </div>
                </div>
                <div className="col-12 col-lg-5 col-xl-6">
                    <img src={imgEconomiaColaborativa} className="img-fluid" alt="Economia Colaborativa na Rede Determinados"/>
                </div>
            </div>
        </div>
    )
}

export default Proposito;
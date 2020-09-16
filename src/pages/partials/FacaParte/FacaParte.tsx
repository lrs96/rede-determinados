import React from 'react';
import './style.scss';

import Person from '../../../components/Person/Index';

const FacaParte = () => {
    return(
        <div className="container" id="faca_parte_determinados">
            <div className="row justify-content-center pb-0">
                <h2 className="mb-0 d-block text-center">
                    <span className="d-block">para o</span>
                    Empreendedor<span>.</span>
                </h2>
            </div>
            <div className="row">
                <Person nameImagem="empreendedor.svg" namePerson="Empreendedor" />
                <Person nameImagem="investidor.svg" namePerson="Investidor" />
                <Person nameImagem="colaborador.svg" namePerson="Colaborador" />
                <Person nameImagem="mentor.svg" namePerson="Mentor" />
            </div>
        </div>
    )
}

export default FacaParte;
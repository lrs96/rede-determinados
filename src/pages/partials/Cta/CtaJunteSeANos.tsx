import React from 'react';
import './style.scss'

const CtaJunteANos = () => {
    return (
        <div className="container" id="cta_junte_a_nos">
            <h2 className="mb-0 text-white">Quer se juntar a nós?</h2>
            <p className="my-3 text-white">Se você quer causar um grande impacto ou uma mudança significativa na sua vida profissinal, este é o seu lugar.</p>
            <form className="form-inline" id="form_cta_junte_a_nos">
                <input type="text" placeholder="Seu nome" className="form-control" id="nome_form_cta_junte_a_nos" />
                <input type="email" className="form-control" id="email_cta_junte_a_nos" placeholder="Digite seu melhor e-mail" />
                <button type="submit" className="btn btn-white-rd">Cadastre-se</button>
            </form>
        </div>
    )
}

export default CtaJunteANos;
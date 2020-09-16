import React from 'react';

import Button from '../../../components/Button/Index';

const CtaCadastrese = () => {
    return (
        <div className="cadastrese">
            <div className="container cadastrese--bg-black">
                    <p className="cadastrese__text cadastrese__text--white">É hora de transformar sua vida!</p>
                    <h3 className="cadastrese__title">Tem uma boa ideia, projeto ou startup?</h3>
                    <p className="cadastrese__text cadastrese__text--white cadastrese__text--subtitle">O Determinados reúne pessoas chaves e é a ferramenta que pode transformar o seu negócio.</p>
                    <Button classe="cadastrese__button btn btn-white" href="javascript:void(0)" content="cadastre-se" />
            </div>
        </div>
    )
}

export default CtaCadastrese;
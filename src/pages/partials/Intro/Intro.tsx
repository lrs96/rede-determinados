import React from 'react';
import Buttonlink from '../../../components/Button/Index'
import './style.scss';


const Intro = () => {
    return(
        <div id="intro_rd">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-xl-8">
                        <h1 className="mb-0">
                            <span className="d-block">Por que,</span>
                            determinação é o
                            <span className="d-block">nosso forte</span>
                        </h1>
                        <p className="subdescription text-white my-3 my-lg-4">
                            Somos a maior rede social que conecta empreeendedores a mentores, empreeendedores colaborativos, investidores e parceiros.
                        </p>
                        <div className="d-flex">
                            <Buttonlink href="/" classe="btn btn-white-rd" content="Conheça mais" />
                            <Buttonlink href="/teste" classe="btn btn-white-outline-rd" content="Assista ai vídeo" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro;
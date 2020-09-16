import React from 'react';
import './style.scss'
import Menu from '../partials/Menu/Menu';
import Intro from '../partials/Intro/Intro'
import Proposito from '../partials/Proposito/Proposito'
import CtaJunteANos from '../partials/Cta/CtaJunteSeANos';
import FacaParte from '../partials/FacaParte/FacaParte';
import CtaCadastrese from '../partials/Cta/CtaCadastrese';
import Footer from '../partials/Footer/Footer';

const Home = () => {
    return (
        <main>
            <Menu />
            <Intro />
            <Proposito />
            <CtaJunteANos />
            <FacaParte />
            <CtaCadastrese />
            <Footer />
        </main>
    )
}

export default Home;
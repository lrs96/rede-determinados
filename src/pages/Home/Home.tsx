import React from 'react';
import './style.scss'
import Menu from '../partials/Menu/Menu';
import Intro from '../partials/Intro/Intro'
import Proposito from '../partials/Proposito/Proposito'
import CtaJunteANos from '../partials/Cta/CtaJunteSeANos';
import FacaParte from '../partials/FacaParte/FacaParte';
import Footer from '../partials/Footer/Footer';

const Home = () => {
    return (
        <main>
            <Menu />
            <Intro />
            <Proposito />
            <CtaJunteANos />
            <FacaParte />
            <Footer />
        </main>
    )
}

export default Home;
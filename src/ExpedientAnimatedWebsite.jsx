import React from 'react';
import Header from './Header';
import Home from './Home';
import About from './About';
import Services from './Services';
import Sectors from './Sectors';
import ThinkTank from './ThinkTank';
import WorkWithUs from './WorkWithUs';
import Associate from './Associate';
import Contact from './Contact';
import Footer from './Footer';

const ExpedientAnimatedWebsite = () => {
    return (
        <div className="animated-website">
            <Header />
            <Home />
            <About />
            <Services />
            <Sectors />
            <ThinkTank />
            <WorkWithUs />
            <Associate />
            <Contact />
            <Footer />
        </div>
    );
};

export default ExpedientAnimatedWebsite;
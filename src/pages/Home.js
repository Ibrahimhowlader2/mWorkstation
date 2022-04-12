import React from 'react';
import Blog from '../components/Blog';
import Contact from '../components/Contact';
import HomeBanner from '../components/HomeBanner';
import OurTeam from '../components/OurTeam';
import Portfolio from '../components/Portfolio';
import Reviews from '../components/Reviews';
import Services from '../components/Services';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

const Home = () => {
    return (
        <div>
            <Header/>
            <HomeBanner />
            <Services />
            <Portfolio />
            <OurTeam />
            <Reviews />
            <Blog />
            <Contact />
            <Footer/>
        </div>
    );
};

export default Home;
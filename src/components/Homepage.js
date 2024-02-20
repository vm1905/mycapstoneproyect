import React from 'react';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import AboutUs from './AboutUs';
import Footer from './Footer';

function Homepage() {
    return(
        <>
            <Hero />
            <Specials />
            <Testimonials />
            <AboutUs />
            <Footer />
        </>
    );
}

export default Homepage;
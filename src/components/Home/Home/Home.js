import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Contact from '../Contact/Contact';
import Header from '../Header/Header';
import LattestProject from '../LattestProject/LattestProject';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <div>
          <Header></Header>
          <Testimonials></Testimonials>
          <LattestProject></LattestProject>
          <Contact></Contact>
          <Footer></Footer>
        </div>
    );
};

export default Home;
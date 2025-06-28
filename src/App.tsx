import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Process from './components/Process';
import SpecialOffer from './components/SpecialOffer';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Portfolio />
      <Process />
      <SpecialOffer />
      <WhyChooseUs />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
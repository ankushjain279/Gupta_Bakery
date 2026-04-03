import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import Features from './components/sections/Features';
import Products from './components/sections/Products';
import Gallery from './components/sections/Gallery';
import Order from './components/sections/Order';
import AboutUs from './components/sections/AboutUs';
import Contact from './components/sections/Contact';
import Offers from './components/sections/Offers';

function App() {
  return (
    <div className="bg-black text-white min-h-screen selection:bg-gold-500 selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Offers/>
        <Features />
        <Products />
        <Gallery />
        <Order />
        <AboutUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;

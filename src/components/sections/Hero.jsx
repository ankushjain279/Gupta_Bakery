import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingCart, Cake as CakeIcon } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background with golden glow and particles */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold-600/10 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold-600/5 rounded-full blur-[120px] animate-pulse delay-700"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_100%)]"></div>

        {/* Particle-like elements */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: Math.random() * 100 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              y: [0, -20, 0],
              x: [0, Math.random() * 10 - 5, 0]
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
            className="absolute w-1 h-1 bg-gold-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          {/* Chef Mascot Placeholder */}
          <div className="relative my-5 mb-10 group flex flex-col items-center">

            {/* Glow */}
            <div className="absolute w-60 h-60 md:w-72 md:h-72 bg-gold-500/20 rounded-full blur-2xl group-hover:bg-gold-500/30 transition-all duration-500"></div>

            {/* Main Circle */}
            <div className="relative w-52 h-52 md:w-64 md:h-64 rounded-full 
                  border-[2px] border-gold-500/40   /* 👈 reduced border */
                  flex items-center justify-center 
                  bg-black/60 backdrop-blur-md shadow-[0_0_40px_rgba(250,176,5,0.15)]">

              {/* Logo */}
              <img
                src="https://res.cloudinary.com/dunxhltm6/image/upload/v1775153232/logo_q7lgzb.jpg"
                alt="Gupta Bakery logo"
                className="w-[85%] h-[85%] object-contain rounded-full"
              />

              {/* SINCE 1995 inside */}
              <div className="absolute bottom-3 text-gold-400 text-xs tracking-[0.3em] font-semibold">
                SINCE 2017
              </div>
            </div>
          </div>
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-8xl font-black mb-4 tracking-tighter"
          >
            Welcome to <span className="gold-text">Gupta Bakery</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex items-center justify-center space-x-4 mb-6"
          >
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-r from-transparent to-gold-500"></div>
            <h2 className="text-gold-400 font-bold tracking-[0.3em] text-sm md:text-xl uppercase">Official Page</h2>
            <div className="h-[1px] w-12 md:w-24 bg-gradient-to-l from-transparent to-gold-500"></div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light"
          >
            Follow us for daily updates on cakes, offers & more! Crafted with passion, delivered with love.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            
            <a href="#order">
              <button className="w-full sm:w-auto px-10 py-4 bg-gold-600 hover:bg-gold-700 text-black font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 gold-glow transform hover:-translate-y-1 cursor-pointer">
                <ShoppingCart size={20} />
                ORDER NOW
              </button>
            </a>
            
            <a href="#gallery">
              <button className="w-full sm:w-auto px-10 py-4 border border-gold-500/50 hover:bg-gold-500/10 text-gold-500 font-bold rounded-full transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 cursor-pointer">
                <CakeIcon size={20} />
                VIEW CAKES
              </button>
            </a>
  
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold-500 opacity-50"
      >
        <div className="w-6 h-10 border-2 border-gold-500 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-gold-500 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;

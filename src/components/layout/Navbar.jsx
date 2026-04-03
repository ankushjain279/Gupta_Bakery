import React, { useState, useEffect } from 'react';
import { Menu, X, Cake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
          ? 'bg-black/90 backdrop-blur-md py-4 gold-border border-b'
          : 'bg-transparent py-6'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Cake className="w-8 h-8 text-gold-500" />
            <span className="text-2xl font-bold gold-text tracking-tighter">
              GUPTA BAKERY
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-300 hover:text-gold-400 transition-colors duration-200 font-medium uppercase text-sm tracking-widest"
              >
                {link.name}
              </a>
            ))}

            {/* ✅ ORDER BUTTON */}
            <a href="#order">
              <button className="bg-gold-600 hover:bg-gold-700 text-black px-6 py-2 rounded-full font-bold transition-all duration-300 transform hover:scale-105 gold-glow cursor-pointer">
                ORDER NOW
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gold-500 p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 border-b gold-border"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 text-base font-medium text-gray-300 hover:text-gold-400 hover:bg-gold-500/10 rounded-md transition-all duration-200"
                >
                  {link.name}
                </a>
              ))}

              {/* ✅ MOBILE ORDER BUTTON */}
              <div className="pt-4">
                <a href="#order" onClick={() => setIsOpen(false)}>
                  <button className="w-full bg-gold-600 text-black px-6 py-3 rounded-full font-bold gold-glow cursor-pointer">
                    ORDER NOW
                  </button>
                </a>
              </div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
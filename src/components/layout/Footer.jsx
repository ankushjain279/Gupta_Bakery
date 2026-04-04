import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Cake, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black pt-20 pb-10 relative overflow-hidden">

      <div className="container mx-auto px-4">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start space-y-6">

            <div className="flex items-center space-x-2">
              <Cake className="w-10 h-10 text-gold-500" />
              <span className="text-3xl font-black gold-text">GUPTA BAKERY</span>
            </div>

            <p className="text-gray-400 text-center md:text-left font-light leading-relaxed">
              Affordable cakes, unforgettable taste.
            </p>
            {/* Instagram CTA */}
            <div className="flex items-center gap-3">
              <motion.a
                whileHover={{ y: -5, scale: 1.1 }}
                href="https://www.instagram.com/guptabakery01?igsh=MTJtOG85Y2oxOTkwNg=="
                target="_blank"
                className="text-gray-400 hover:text-pink-500 transition cursor-pointer"
              >
                <Instagram size={28} />
              </motion.a>

              <span className="text-gray-400 text-sm font-light">
                Follow us for early updates & exclusive offers
              </span>
            </div>

          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-xl font-bold gold-text uppercase">Quick Links</h4>

            <ul className="space-y-4 text-center md:text-left">
              <li><a href="#home" className="text-gray-400 hover:text-gold-400 cursor-pointer">Home</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-gold-400 cursor-pointer">Products</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-gold-400 cursor-pointer">Gallery</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-gold-400 cursor-pointer">About</a></li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-xl font-bold gold-text uppercase">Opening Hours</h4>

            <div className="space-y-4 text-center md:text-left">
              <div>
                <span className="text-gold-400 text-xs">Mon - Sat</span>
                <p className="text-gray-400">09:00 AM - 10:00 PM</p>
              </div>

              <div>
                <span className="text-gold-400 text-xs">Sunday</span>
                <p className="text-gray-400">10:00 AM - 12:00 PM</p>
              </div>
            </div>
          </div>

          {/* Extra Section (Optional Useful Info) */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <h4 className="text-xl font-bold gold-text uppercase">Why Choose Us</h4>

            <ul className="text-gray-400 text-sm space-y-3 text-center md:text-left">
              <li>✔ Fresh cakes made daily</li>
              <li>✔ Affordable pricing</li>
              <li>✔ Custom cakes for every occasion</li>
              <li>✔ Trusted by thousands of customers</li>
            </ul>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="pt-10 border-t border-gold-500/10 flex flex-col items-center gap-4 text-center">

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2026 Gupta Bakery. All Rights Reserved.
          </div>

    
          {/* Scroll to Top */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gold-600/10 border border-gold-500/30 rounded-full flex items-center justify-center text-gold-500 hover:bg-gold-600 hover:text-black transition cursor-pointer"
          >
            <ArrowUp size={20} />
          </button>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
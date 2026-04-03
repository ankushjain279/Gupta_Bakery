import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone } from 'lucide-react';

const Order = () => {
  return (
    <section id="order" className="section-padding bg-black/95 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-600/10 rounded-full blur-[150px] animate-pulse"></div>

      <div className="container mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto p-12 border-2 border-gold-500/20 rounded-[40px] bg-black/40 backdrop-blur-xl gold-glow"
        >
          {/* Icon */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-gold-600/20 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <Smartphone className="text-gold-500" size={32} />
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 gold-text"
          >
            Order Your Favorites
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light mb-12"
          >
            Craving something sweet? We're just a few clicks away. Get our delicious treats delivered right to your doorstep.
          </motion.p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">

            {/* Swiggy */}
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://www.swiggy.com/menu/464598?source=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64 flex items-center justify-center gap-3 bg-[#FC8019] text-white px-8 py-5 rounded-2xl font-black text-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png"
                alt="Swiggy"
                className="h-8"
              />
              SWIGGY
            </motion.a>

            {/* Zomato */}
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://zomato.onelink.me/xqzv/872r0nhj"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-64 flex items-center justify-center gap-3 bg-[#E23744] text-white px-8 py-5 rounded-2xl font-black text-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
            
              ZOMATO
            </motion.a>

          </div>

          {/* Footer Note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-12 border-t border-gold-500/10"
          >
            <p className="text-gray-500 font-medium uppercase tracking-[0.2em] text-sm">
              Available on both platforms in Jhansi
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default Order;
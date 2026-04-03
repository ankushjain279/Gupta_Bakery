import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);

  const images = [
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214457/1_efhn4k.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214457/2_n8zfgn.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214457/3_ymyvat.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214460/4_bxqlbq.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214459/5_khhrtb.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214469/6_eszmn8.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214506/7_o2eldy.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214506/8_wycaz5.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214505/9_lv0mmj.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214506/10_o63zjz.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214506/12_lesjyy.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214507/13_fkfi4b.jpg',
    'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214517/14_mpf8sr.jpg'
  ];

  const visibleImages = showAll ? images : images.slice(0, 8);

  return (
    <section id="gallery" className="section-padding bg-black relative overflow-hidden">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Camera className="text-gold-500" size={20} />
            <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-sm">
              Visual Journey
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 gold-text"
          >
            Moments in Gold
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            A glimpse into our bakery where every creation is a work of art, made with precision and love, made by us.
          </motion.p>
        </div>

        {/* Images */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {visibleImages.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer gold-border"
            >
              <img
                src={img}
                alt={`Cake ${index + 1}`}
                className="w-full h-full object-cover transition-all duration-700 group-hover:brightness-50"
              />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 border border-gold-500 rounded-full flex items-center justify-center text-gold-500 group-hover:bg-gold-600 group-hover:text-black transition-all duration-300">
                  <Camera size={24} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 border border-gold-500 text-gold-500 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-gold-500/10 transition-all duration-300 cursor-pointer"
          >
            {showAll ? 'Show Less' : 'Show More'}
          </button>
        </div>

      </div>
    </section>
  );
};

export default Gallery;
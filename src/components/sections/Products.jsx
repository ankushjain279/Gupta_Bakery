import React from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ image, name, category, description, price, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ scale: 1.03 }}
      className="group bg-black/40 border border-gold-500/10 rounded-2xl overflow-hidden hover:border-gold-500/50 transition-all duration-500"
    >
      <div className="relative h-72 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.8 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-75"
        />

        <div className="absolute top-4 left-4 bg-gold-600 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest z-10">
          {category}
        </div>
      </div>

      <div className="p-8 text-center flex flex-col justify-between h-40">
        <div>
          <h3 className="text-2xl font-bold mb-2 gold-text">{name}</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-center">
          <span className="text-gold-500 font-bold text-xl">{price}</span>
        </div>
      </div>
    </motion.div>
  );
};

const Products = () => {
  const products = [
    {
      name: '👑 Signature Creations',
      category: 'Best Sellers',
      description: 'Our most loved and unique cakes crafted for unforgettable taste.',
      price: '₹150 onwards',
      image: 'https://res.cloudinary.com/dunxhltm6/image/upload/v1775214172/speciality_pf5rhr.jpg'
    },
    {
      name: '🎨 Custom Cakes',
      category: 'Custom Cakes',
      description: 'Theme cakes, photo cakes, and personalized designs for every occasion.',
      price: '₹300 onwards',
      image: 'https://res.cloudinary.com/dunxhltm6/image/upload/v1775213722/custom_kt8qfi.jpg'
    },
    {
      name: '💍 Wedding Cakes',
      category: 'Luxury Cakes',
      description: 'Elegant multi-layer cakes crafted for weddings and grand celebrations.',
      price: '₹250 onwards',
      image: 'https://res.cloudinary.com/dunxhltm6/image/upload/v1775212861/luxury_cake_giwwcv.jpg'
    },
    {
      name: '🌿 Eggless Specialties',
      category: 'Eggless',
      description: 'Delicious eggless cakes made with the same rich taste and freshness.',
      price: '₹99 onwards',
      image: 'https://res.cloudinary.com/dunxhltm6/image/upload/v1775212861/egg_less_cake_t5n1if.jpg'
    },
    {
      name: '🍰 Pastries',
      category: 'Mini Desserts',
      description: 'Cupcakes, pastries, and mini desserts with premium taste.',
      price: '₹49 onwards',
      image: 'https://res.cloudinary.com/dunxhltm6/image/upload/v1775212862/pastry_g1i4le.png'
    }
  ];

  return (
    <section id="products" className="section-padding bg-black/95 relative">
      <div className="container mx-auto">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-6 gold-text"
          >
            Our Cakes & Specialties
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg md:text-xl font-light max-w-2xl mx-auto"
          >
            Discover our wide range of affordable and freshly baked cakes crafted for every occasion.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Products;
import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, Heart, Sparkles } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <Sparkles className="text-gold-500" size={20} />
              <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-sm">
                Our Story
              </span>
            </motion.div>

            <h2 className="text-4xl md:text-6xl font-black mb-8 gold-text leading-tight">
              A Legacy of Taste <br /> & Freshness
            </h2>

            <p className="text-gray-400 text-lg md:text-xl font-light mb-8 leading-relaxed">
              Gupta Bakery has been a beloved destination for dessert lovers in Jhansi for decades.
              We take pride in being a{' '}
              <span className="text-gold-400 font-bold">Retail & Wholesale bakery</span>,
              catering to both individual cravings and large-scale celebrations.
            </p>

            <p className="text-gray-400 text-lg md:text-xl font-light mb-12 leading-relaxed">
              Our philosophy is simple: use the finest ingredients, maintain high hygiene standards,
              and never compromise on freshness. We offer delicious, fresh cakes at affordable prices,
              including custom designs for every occasion.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-gold-500/20">
              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 bg-gold-600/10 rounded-full flex items-center justify-center mb-4">
                  <Award className="text-gold-500" size={24} />
                </div>
                <h4 className="text-gold-400 font-bold mb-2">Retail & Wholesale</h4>
                <p className="text-gray-500 text-sm">
                  Catering to everyone from local families to large events.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 bg-gold-600/10 rounded-full flex items-center justify-center mb-4">
                  <ShieldCheck className="text-gold-500" size={24} />
                </div>
                <h4 className="text-gold-400 font-bold mb-2">Affordable Prices</h4>
                <p className="text-gray-500 text-sm">
                  Enjoy high-quality, fresh cakes at budget-friendly prices.
                </p>
              </div>

              <div className="flex flex-col items-center md:items-start">
                <div className="w-12 h-12 bg-gold-600/10 rounded-full flex items-center justify-center mb-4">
                  <Heart className="text-gold-500" size={24} />
                </div>
                <h4 className="text-gold-400 font-bold mb-2">Fresh Daily</h4>
                <p className="text-gray-500 text-sm">
                  Baked fresh every morning for the perfect texture.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Soft Glow (no black shade) */}
            <div className="absolute inset-0 bg-gold-600/10 rounded-[60px] blur-[80px] -z-10"></div>

            <div className="relative z-10 p-8">
              <div className="aspect-[4/5] rounded-[60px] overflow-hidden gold-border gold-glow">

                {/* ✅ FIXED IMAGE */}
                <img
                  src="https://res.cloudinary.com/dunxhltm6/image/upload/v1775274498/Bakery_smiles_and_eggless_treats_bx6z6w.png"
                  alt="Gupta Bakery"
                  className="w-full h-full object-cover transition-all duration-700"
                  style={{ objectPosition: 'center top' }} // 🔥 FIXED POSITION
                />

              </div>

              {/* Stats */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-10 -left-10 bg-black/60 backdrop-blur-xl border border-gold-500/30 p-8 rounded-3xl shadow-2xl gold-glow hidden md:block"
              >
                <div className="text-5xl font-black gold-text mb-2">8+</div>
                <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                  Years of Excellence
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-black/60 backdrop-blur-xl border border-gold-500/30 p-8 rounded-3xl shadow-2xl gold-glow hidden md:block"
              >
                <div className="text-5xl font-black gold-text mb-2">2k+</div>
                <div className="text-gray-400 font-bold uppercase tracking-widest text-xs">
                  Happy Customers
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
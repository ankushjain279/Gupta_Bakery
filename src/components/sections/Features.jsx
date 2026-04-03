import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock, ShoppingBag, Star, TrendingUp, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="p-8 bg-black/50 border border-gold-500/20 rounded-2xl backdrop-blur-md group hover:border-gold-500/50 transition-all duration-300"
    >
      <div className="w-14 h-14 bg-gold-600/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold-600 transition-colors duration-300">
        <Icon className="text-gold-500 group-hover:text-black transition-colors duration-300" size={28} />
      </div>
      <h3 className="text-2xl font-bold mb-4 gold-text group-hover:text-gold-400 transition-colors duration-300">{title}</h3>
      <p className="text-gray-400 font-light leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </motion.div>
  );
};

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: 'Daily Updates',
      description: 'Get real-time updates on available cakes and fresh bakery items every single day.'
    },
    {
      icon: TrendingUp,
      title: 'Latest Designs',
      description: 'Explore the newest trends in cake artistry and customized options for your special moments.'
    },
    {
      icon: ShoppingBag,
      title: 'Easy Order',
      description: 'Streamlined ordering process designed for your convenience. Your favorite treats are just a click away.'
    },
    {
      icon: Star,
      title: 'Affordable Excellence',
      description: 'Delicious, high-quality treats made with care—offering great taste at prices everyone can enjoy.'
    }
  ];

  return (
    <section id="features" className="section-padding bg-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold-600/5 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-600/5 rounded-full blur-[100px]"></div>

      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <Award className="text-gold-500" size={20} />
            <span className="text-gold-500 font-bold uppercase tracking-[0.3em] text-sm">Why Choose Us</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 gold-text"
          >
            Crafting Sweet Memories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl font-light"
          >
            We combine traditional techniques with modern creativity to bring you the finest bakery experience in Jhansi.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;

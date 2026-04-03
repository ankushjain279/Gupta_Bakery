import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Sparkles } from 'lucide-react';

const Offers = () => {
    return (
        <section id="offers" className="section-padding bg-black relative overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] bg-gold-600/10 blur-[150px] rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>

            <div className="container mx-auto relative z-10">

                {/* Heading */}
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-5xl md:text-7xl font-black gold-text"
                    >
                        Exclusive Offer
                    </motion.h2>

                    <p className="text-gray-400 mt-4 text-lg">
                        Grab your sweet deal before it’s gone 🍰
                    </p>
                </div>

                {/* Main Card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className="relative max-w-5xl mx-auto p-12 rounded-[50px] border border-gold-500/20 bg-gradient-to-br from-black via-black/80 to-black gold-glow overflow-hidden"
                >

                    {/* Decorative Glow */}
                    <div className="absolute -top-20 -left-20 w-60 h-60 bg-gold-500/20 blur-[120px] rounded-full"></div>
                    <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-gold-500/20 blur-[120px] rounded-full"></div>

                    {/* Badge */}
                    <div className="absolute top-6 right-6 bg-gold-600 text-black px-5 py-2 rounded-full font-bold text-sm shadow-lg animate-bounce">
                        Limited Time
                    </div>

                    {/* Content */}
                    <div className="text-center">

                        {/* Icon */}
                        <div className="w-24 h-24 mx-auto mb-6 bg-gold-600/20 rounded-full flex items-center justify-center gold-glow">
                            <Sparkles className="text-gold-500" size={40} />
                        </div>

                        {/* Main Offer */}
                        <h3 className="text-4xl md:text-6xl font-black mb-6">
                            Get <span className="gold-text text-6xl md:text-7xl">15% OFF</span>
                        </h3>

                        {/* Description */}
                        <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8">
                            Follow us on Instagram and show it at the shop to unlock this exclusive bakery discount.
                        </p>

                        {/* Highlight Box */}
                        <div className="inline-block px-8 py-4 border border-gold-500/30 rounded-full text-gold-400 font-bold text-lg mb-10 backdrop-blur-xl">
                            Offer valid till <span className="text-white">5 April</span>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row justify-center gap-6">

                            <a
                                href="https://www.instagram.com/guptabakery01?igsh=MTJtOG85Y2oxOTkwNg=="
                                target="_blank"
                                className="px-10 py-5 bg-gold-600 text-black font-black rounded-full text-lg hover:bg-gold-500 transition-all duration-300 gold-glow transform hover:scale-105 cursor-pointer"
                            >
                                Follow & Claim Offer
                            </a>

                            <a
                                href="#products"
                                className="px-10 py-5 border border-gold-500 text-gold-400 font-bold rounded-full text-lg hover:bg-gold-500/10 transition-all duration-300 cursor-pointer"
                            >
                                Explore Cakes
                            </a>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Offers;
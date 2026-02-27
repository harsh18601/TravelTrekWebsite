import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image Overlay */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80"
                    alt="Adventure Landscape"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1 }}
                    className="bg-black bg-opacity-30 backdrop-blur-md border border-white border-opacity-10 py-12 px-16 rounded-sm inline-block"
                >
                    <h1 className="text-5xl md:text-7xl font-light italic tracking-tight text-white mb-2" style={{ fontFamily: 'serif' }}>
                        Experience The Best Trip Ever
                    </h1>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
    const images = [
        "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&w=1920&q=80",
        "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=1920&q=80"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Background Image Slider */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black bg-opacity-40 z-10" />
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        alt="Adventure Landscape"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="w-full h-full object-cover"
                    />
                </AnimatePresence>
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-md text-white hover:bg-opacity-30 transition-all group hidden md:block"
            >
                <ChevronLeft size={32} className="group-hover:-translate-x-1 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-6 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white border-opacity-20 bg-white bg-opacity-10 backdrop-blur-md text-white hover:bg-opacity-30 transition-all group hidden md:block"
            >
                <ChevronRight size={32} className="group-hover:translate-x-1 transition-transform" />
            </button>

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

            {/* Indicator Dots */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30 flex gap-3">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-white w-6' : 'bg-white opacity-40'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default Hero;



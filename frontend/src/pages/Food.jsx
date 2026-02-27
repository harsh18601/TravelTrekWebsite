import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';
import { motion } from 'framer-motion';
import { Utensils, Star, MapPin, ArrowRight } from 'lucide-react';
import api from '../services/api';

const Food = () => {
    const [foodItems, setFoodItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const res = await api.get('/foods');
                setFoodItems(res.data);
            } catch (error) {
                console.error("Error fetching food", error);
            } finally {
                setLoading(false);
            }
        };
        fetchFood();
    }, []);

    return (
        <main className="bg-white text-brand-navy min-h-screen">
            <TopBanner />
            <Navbar />

            {/* Header Section */}
            <section className="pt-48 pb-20 bg-[#918674] bg-opacity-5 text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-brand-amber font-bold tracking-[0.4em] uppercase text-xs mb-8 block"
                    >
                        Culinary Journeys
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-light italic leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                        Taste the <span className="text-brand-amber text-9xl">World</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 max-w-lg mx-auto mt-12 text-lg font-light italic"
                    >
                        "Explore a curated selection of global flavors, from street food treasures to fine dining mastery."
                    </motion.p>
                </div>
            </section>

            {/* List Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {loading ? (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-[600px] bg-gray-50 rounded-sm animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                            {foodItems.length > 0 ? foodItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-10 shadow-3xl">
                                        <img
                                            src={item.food_img || `https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80`}
                                            alt={item.food_name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
                                            <div className="flex items-center gap-2 text-brand-amber mb-4">
                                                <Star size={16} className="fill-brand-amber" />
                                                <span className="text-sm font-bold tracking-widest uppercase">Premium Choice</span>
                                            </div>
                                            <h3 className="text-4xl text-white font-light italic mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                                                {item.food_name}
                                            </h3>
                                        </div>
                                    </div>

                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between text-brand-navy">
                                            <div className="flex items-center gap-2">
                                                <Utensils size={18} className="text-brand-amber" />
                                                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">{item.food_type || 'International'}</span>
                                            </div>
                                            <span className="text-xs font-light italic text-gray-400">Fine Dining</span>
                                        </div>
                                        <p className="text-gray-500 font-light italic leading-relaxed line-clamp-3">
                                            {item.food_description || "Indulge in an exquisite culinary experience where tradition meets modern innovation."}
                                        </p>
                                        <button className="w-full py-4 border border-brand-navy border-opacity-10 text-brand-navy text-[10px] font-bold uppercase tracking-[0.3em] hover:bg-brand-navy hover:text-white transition-all duration-300">
                                            Reserve a Table
                                        </button>
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="col-span-full py-32 bg-gray-50 rounded-sm flex flex-col items-center justify-center border-4 border-double border-white">
                                    <Utensils size={40} className="text-gray-200 mb-6" />
                                    <p className="text-gray-300 font-light italic text-2xl">Preparing new culinary delights...</p>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Food;

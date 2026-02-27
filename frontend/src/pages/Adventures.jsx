import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';
import { motion } from 'framer-motion';
import { Zap, MapPin, Star, ArrowRight, Compass } from 'lucide-react';
import api from '../services/api';

const Adventures = () => {
    const [adventures, setAdventures] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAdventures = async () => {
            try {
                const res = await api.get('/adventures');
                setAdventures(res.data);
            } catch (error) {
                console.error("Error fetching adventures", error);
            } finally {
                setLoading(false);
            }
        };
        fetchAdventures();
    }, []);

    return (
        <main className="bg-white text-brand-navy min-h-screen">
            <TopBanner />
            <Navbar />

            {/* Header Section */}
            <section className="pt-48 pb-20 bg-[#918674] bg-opacity-5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-12">
                        <div className="max-w-2xl">
                            <motion.span
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-brand-amber font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
                            >
                                Explorer's Selection
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-6xl md:text-8xl font-light italic leading-tight"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                Choose Your <br /> <span className="text-brand-amber">Next Thrill</span>
                            </motion.h1>
                        </div>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="text-gray-500 max-w-sm text-lg font-light leading-relaxed italic"
                        >
                            "From mountain scaling to deep sea diving, we've curated the ultimate list of adventures for the brave at heart."
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* List Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {loading ? (
                        <div className="grid md:grid-cols-3 gap-12">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-[500px] bg-gray-50 rounded-sm animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="grid md:grid-cols-3 gap-12">
                            {adventures.length > 0 ? adventures.map((adv, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i % 3 * 0.1 }}
                                    className="bg-white group cursor-pointer"
                                >
                                    <div className="relative aspect-[4/5] bg-gray-100 overflow-hidden rounded-sm mb-8 shadow-2xl">
                                        <img
                                            src={adv.image || `https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=800&q=80`}
                                            alt={adv.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-6 z-20">
                                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Best Time: {adv.bestTimeToVisit || 'All Year'}</span>
                                        </div>
                                        <div className="absolute inset-0 bg-brand-navy opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                                        <div className="absolute top-6 right-6 z-20 flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-lg">
                                            <Star size={14} className="text-brand-amber fill-brand-amber" />
                                            <span className="text-xs font-bold tracking-tighter text-brand-navy">4.9</span>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3 text-brand-amber">
                                            <Compass size={18} />
                                            <span className="text-xs font-bold tracking-[0.2em] uppercase">{adv.type || 'Adventure'}</span>
                                        </div>
                                        <h3 className="text-3xl font-light italic group-hover:text-brand-amber transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {adv.name}
                                        </h3>
                                        <p className="text-gray-400 font-light leading-relaxed line-clamp-2 italic">
                                            {adv.desc || "Embark on an unforgettable journey into the heart of nature's most spectacular landscapes."}
                                        </p>
                                        <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                                            <div className="flex items-center gap-2 text-gray-400">
                                                <MapPin size={16} />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">{adv.location || 'Global'}</span>
                                            </div>
                                            <button className="flex items-center gap-2 text-brand-navy group-hover:text-brand-amber transition-colors">
                                                <span className="text-xs font-bold uppercase tracking-widest">Details</span>
                                                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="col-span-full text-center py-40 border-2 border-dashed border-gray-100 rounded-sm">
                                    <p className="text-gray-300 font-light italic text-2xl">No adventures found in this trek...</p>
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

export default Adventures;

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';
import { motion } from 'framer-motion';
import { Heart, Star, Sparkles, ArrowRight } from 'lucide-react';
import api from '../services/api';

const Wellness = () => {
    const [wellnessItems, setWellnessItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchWellness = async () => {
            try {
                const res = await api.get('/wellness');
                setWellnessItems(res.data);
            } catch (error) {
                console.error("Error fetching wellness", error);
            } finally {
                setLoading(false);
            }
        };
        fetchWellness();
    }, []);

    return (
        <main className="bg-white text-brand-navy min-h-screen">
            <TopBanner />
            <Navbar />

            {/* Header Section */}
            <section className="relative pt-64 pb-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1920&q=80" alt="background" className="w-full h-full object-cover opacity-10" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="inline-flex items-center gap-4 text-brand-amber mb-10"
                    >
                        <div className="h-[1px] w-12 bg-brand-amber" />
                        <span className="text-xs font-bold tracking-[0.5em] uppercase">Holistic Sanctuary</span>
                        <div className="h-[1px] w-12 bg-brand-amber" />
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-7xl md:text-9xl font-light italic leading-[0.8]"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                        Restore Your <br /> <span className="text-brand-amber">Inner Peace</span>
                    </motion.h1>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-32 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    {loading ? (
                        <div className="space-y-24">
                            {[1, 2].map(i => (
                                <div key={i} className="h-[400px] bg-white rounded-sm animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-40">
                            {wellnessItems.length > 0 ? wellnessItems.map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-20`}
                                >
                                    <div className="lg:w-1/2 relative group">
                                        <div className="relative aspect-video rounded-sm overflow-hidden shadow-2xl">
                                            <img
                                                src={item.resort_img || `https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&w=1000&q=80`}
                                                alt={item.resort_name}
                                                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                            />
                                        </div>
                                        <motion.div
                                            initial={{ rotate: -5 }}
                                            whileInView={{ rotate: 10 }}
                                            className="absolute -bottom-10 -right-10 w-48 h-48 bg-white p-6 shadow-2xl rounded-sm hidden lg:flex flex-col justify-center items-center text-center"
                                        >
                                            <Sparkles className="text-brand-amber mb-4" size={32} />
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy">Excellence Award</span>
                                        </motion.div>
                                    </div>

                                    <div className="lg:w-1/2 space-y-8">
                                        <div className="flex items-center gap-3 text-brand-amber">
                                            <Heart size={20} />
                                            <span className="text-xs font-bold tracking-[0.3em] uppercase">{item.resort_type || 'Treatment'}</span>
                                        </div>
                                        <h2 className="text-5xl font-light italic" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {item.resort_name}
                                        </h2>
                                        <p className="text-gray-500 font-light italic text-xl leading-relaxed">
                                            {item.resort_desc || "Surrender to a world of absolute tranquility and rejuvenation, where ancient wisdom meets modern science."}
                                        </p>
                                        <div className="grid grid-cols-2 gap-8 py-8 border-y border-gray-200">
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Duration</span>
                                                <span className="text-lg font-light text-brand-navy italic">90 Minutes Session</span>
                                            </div>
                                            <div>
                                                <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 block mb-2">Starting From</span>
                                                <span className="text-lg font-light text-brand-navy italic">$120.00</span>
                                            </div>
                                        </div>
                                        <button className="group flex items-center gap-6 text-brand-navy transition-all">
                                            <span className="text-xs font-bold uppercase tracking-[0.4em] group-hover:text-brand-amber transition-colors">Experience Now</span>
                                            <div className="w-12 h-12 rounded-full border border-brand-navy border-opacity-10 flex items-center justify-center group-hover:bg-brand-amber group-hover:border-transparent transition-all">
                                                <ArrowRight size={20} className="group-hover:text-white" />
                                            </div>
                                        </button>
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="text-center py-40">
                                    <p className="text-gray-300 font-light italic text-2xl">Crafting new wellness experiences...</p>
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

export default Wellness;

import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopBanner from '../components/TopBanner';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Star, Zap, Heart, Calendar, ArrowRight, Map } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const stories = [
        { name: 'Taj Mahal, India', desc: '"Have been in front of so many monuments till date, but the feel of witnessing Taj is unmatchable."', color: 'from-orange-400 to-orange-500', img: '/assets/images/taj_mahal.png' },
        { name: 'Leaning Tower of Pisa, Italy', desc: '"Bucket list: to hold up the Leaning Tower of Pisa."', color: 'from-orange-300 to-orange-400', img: '/assets/images/pisa.png' },
        { name: 'Streets of Paris', desc: '"A walk about Paris will provide lessons in history, beauty, and in the point of life."', color: 'from-indigo-400 to-indigo-600', img: '/assets/images/paris.png' },
        { name: 'Gateway of India, Mumbai', desc: '"Where dreams are fulfilled and lives are settled!"', color: 'from-red-500 to-red-600', img: 'https://images.unsplash.com/photo-1570160897040-30430ef221c2?auto=format&fit=crop&w=800&q=80' },
        { name: 'Statue of Liberty, New York', desc: '"The last time I was inside a woman was when I went to the Statue of Liberty."', color: 'from-red-400 to-red-500', img: '/assets/images/liberty.png' }
    ];

    const views = [
        { name: 'Taj Mahal, Agra, India', img: '/assets/images/taj_mahal.png' },
        { name: 'Machu Picchu, Peru', img: '/assets/images/machu_picchu.png' },
        { name: 'Leaning Tower of Pisa, Italy', img: '/assets/images/pisa.png' }
    ];

    const categories = [
        { name: 'Food & Drinks', icon: Map, color: 'text-brand-amber', path: '/food', desc: '"Good Food is Good Mood"' },
        { name: 'Wellness & Spa', icon: Heart, color: 'text-brand-emerald', path: '/wellness', desc: '"Spa days are a necessity not a luxury"' },
        { name: 'Adventurous', icon: Zap, color: 'text-brand-amber', path: '/adventures', desc: '"Life is a daring adventure or nothing"' }
    ];

    return (
        <main className="bg-white text-brand-navy">
            <TopBanner />
            <Navbar />
            <Hero />

            {/* TravelTrek Stories Section */}
            <section className="py-24 bg-white overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                    <h2 className="text-5xl font-light italic text-brand-amber mb-2" style={{ fontFamily: 'serif' }}>TravelTrek Stories</h2>
                    <div className="w-24 h-0.5 bg-brand-amber mx-auto bg-opacity-30" />
                </div>

                <div className="flex flex-wrap justify-center gap-6 px-6">
                    {stories.map((story, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05, rotate: 0 }}
                            initial={{ rotate: i % 2 === 0 ? -5 : 5 }}
                            className={`relative w-64 p-6 rounded-sm shadow-2xl overflow-hidden text-white flex flex-col justify-end min-h-[400px] cursor-pointer group`}
                        >
                            {/* Card Background Image */}
                            <div className="absolute inset-0 z-0">
                                <img src={story.img} alt={story.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                <div className={`absolute inset-0 bg-gradient-to-b ${story.color} opacity-60 z-1`} />
                                <div className="absolute inset-0 bg-black bg-opacity-20 z-2" />
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-xl font-bold mb-4">{story.name}</h3>
                                <p className="text-sm italic font-light opacity-90 leading-relaxed">
                                    {story.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* 360 Views Section */}
            <section className="relative py-32 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1920&q=80" alt="background" className="w-full h-full object-cover opacity-30" />
                    <div className="absolute inset-0 bg-brand-emerald bg-opacity-10 backdrop-blur-sm" />
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-6xl font-light italic text-white drop-shadow-lg mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>Discover 360° views</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-12">
                        {views.map((view, i) => (
                            <div key={i} className="bg-white p-6 rounded-sm shadow-2xl flex flex-col items-center group transform transition-transform hover:-translate-y-2">
                                <h3 className="text-brand-amber font-bold mb-6 text-sm uppercase tracking-widest">{view.name}</h3>
                                <div className="w-full aspect-[4/3] bg-gray-100 mb-8 overflow-hidden rounded-sm">
                                    <img src={view.img} alt={view.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                </div>
                                <button className="bg-brand-amber text-brand-navy px-10 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all shadow-md">
                                    Get Surprised
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid md:grid-cols-3 gap-8">
                        {categories.map((cat, i) => (
                            <div key={i} className="bg-white p-12 rounded-sm shadow-lg border border-gray-100 flex flex-col items-center text-center group">
                                <h3 className="text-2xl font-bold text-brand-amber mb-6">{cat.name}</h3>
                                <p className="text-gray-500 italic mb-8">"{cat.desc}"</p>
                                <Link to={cat.path}>
                                    <button className="bg-brand-amber bg-opacity-20 text-brand-amber px-8 py-2 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-brand-amber hover:text-brand-navy transition-all">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Discover On Click (Refined Map Discovery) */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-6xl font-light italic text-brand-amber mb-6"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                        Discover on-click
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="w-24 h-0.5 bg-brand-amber mx-auto mb-10 bg-opacity-30"
                    />
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="text-gray-400 italic font-light text-lg mb-20 max-w-2xl mx-auto"
                    >
                        "Traveling – it leaves you speechless, then turns you into a storyteller."
                    </motion.p>

                    <div className="relative aspect-[21/9] bg-[#f0f7ff] rounded-[4rem] overflow-hidden border border-blue-50 shadow-inner flex items-center justify-center">
                        <div className="text-blue-100 opacity-30">
                            <Map size={500} strokeWidth={0.5} />
                        </div>

                        {/* Interactive Profile Pins */}
                        {[
                            { top: '25%', left: '20%', delay: 0 },
                            { top: '45%', left: '52%', delay: 0.4 },
                            { top: '65%', left: '82%', delay: 0.8 }
                        ].map((pin, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 20,
                                    delay: pin.delay + 0.5
                                }}
                                whileHover={{ scale: 1.1, y: -5 }}
                                className="absolute cursor-pointer"
                                style={{ top: pin.top, left: pin.left }}
                            >
                                <div className="relative">
                                    <div className="w-16 h-16 bg-white rounded-full shadow-[0_10px_25px_-5px_rgba(0,0,0,0.1)] p-1.5 border border-white transition-shadow hover:shadow-2xl">
                                        <div className="w-full h-full rounded-full overflow-hidden border-2 border-brand-amber border-opacity-10">
                                            <img
                                                src={`https://i.pravatar.cc/150?u=traveltrek${i}`}
                                                alt="Explorer"
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                    </div>
                                    {/* Pulse Effect */}
                                    <motion.div
                                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                                        transition={{ repeat: Infinity, duration: 3, delay: pin.delay }}
                                        className="absolute inset-0 bg-brand-amber rounded-full -z-10"
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Home;

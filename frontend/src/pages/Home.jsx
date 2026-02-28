import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import TopBanner from '../components/TopBanner';
import Footer from '../components/Footer';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Zap, Heart, Calendar, ArrowRight, Map, Quote, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
    const [selectedExplorer, setSelectedExplorer] = useState(null);

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

    const explorers = [
        { id: 1, name: "Elena Rodriguez", location: "Patagonia, Chile", bio: "Elena spent 3 months trekking across the Southern Patagonian Ice Field. 'The silence of the glaciers is something you feel in your soul.'", img: "https://i.pravatar.cc/150?u=traveltrek0", top: '25%', left: '20%' },
        { id: 2, name: "Marcus Chen", location: "Kyoto, Japan", bio: "A visual storyteller capturing the fleeting beauty of cherry blossom season. 'Perspective changes everything when you slow down.'", img: "https://i.pravatar.cc/150?u=traveltrek1", top: '45%', left: '52%' },
        { id: 3, name: "Amina Okoro", location: "Serengeti, Tanzania", bio: "Amina's wildlife photography documented the Great Migration. 'Nature doesn't wait for anyone, you have to be present.'", img: "https://i.pravatar.cc/150?u=traveltrek2", top: '65%', left: '82%' }
    ];

    const testimonials = [
        { name: "Sarah Jenkins", role: "Adventure Photographer", content: "TravelTrek curated an expedition that surpassed all my expectations. Their attention to detail and unique access is unparalleled.", rating: 5 },
        { name: "David Thorne", role: "CEO, TechInnovate", content: "The Elite membership is a game-changer. The concierge service handled everything, allowing me to truly disconnect and explore.", rating: 5 },
        { name: "Maya Patel", role: "Culture Enthusiast", content: "From the food tours in Osaka to the spa retreats in Bali, every recommendation was spot on. Highly recommended!", rating: 4 }
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
            <section className="py-32 bg-white relative">
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
                        {/* Real World Map Background */}
                        <div className="absolute inset-0 opacity-40 grayscale hover:grayscale-0 transition-all duration-1000">
                            <img
                                src="https://images.unsplash.com/photo-1526772662000-3f88f10405ff?auto=format&fit=crop&w=1920&q=80"
                                alt="World Map"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Interactive Profile Pins */}
                        {explorers.map((explorer, i) => (
                            <motion.div
                                key={i}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{
                                    type: "spring", stiffness: 260, damping: 20, delay: i * 0.2 + 0.5
                                }}
                                whileHover={{ scale: 1.2, zIndex: 40 }}
                                onClick={() => setSelectedExplorer(explorer)}
                                className="absolute cursor-pointer"
                                style={{ top: explorer.top, left: explorer.left }}
                            >
                                <div className="relative group">
                                    <div className="w-16 h-16 bg-white rounded-full shadow-2xl p-1.5 border-2 border-brand-amber transition-all group-hover:scale-110">
                                        <div className="w-full h-full rounded-full overflow-hidden">
                                            <img src={explorer.img} alt={explorer.name} className="w-full h-full object-cover" />
                                        </div>
                                    </div>
                                    <motion.div
                                        animate={{ scale: [1, 1.4, 1], opacity: [0.3, 0, 0.3] }}
                                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.5 }}
                                        className="absolute inset-0 bg-brand-amber rounded-full -z-10"
                                    />
                                </div>
                            </motion.div>
                        ))}

                        {/* Advanced Info Overlay */}
                        <AnimatePresence>
                            {selectedExplorer && (
                                <motion.div
                                    initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
                                    animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
                                    exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
                                    className="absolute inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center p-6"
                                    onClick={() => setSelectedExplorer(null)}
                                >
                                    <motion.div
                                        initial={{ scale: 0.9, y: 20 }}
                                        animate={{ scale: 1, y: 0 }}
                                        exit={{ scale: 0.9, y: 20 }}
                                        className="bg-white max-w-lg w-full rounded-sm overflow-hidden shadow-2xl relative"
                                        onClick={e => e.stopPropagation()}
                                    >
                                        <button
                                            onClick={() => setSelectedExplorer(null)}
                                            className="absolute top-4 right-4 text-gray-400 hover:text-brand-navy transition-colors"
                                        >
                                            <X size={24} />
                                        </button>

                                        <div className="h-48 overflow-hidden">
                                            <img src={selectedExplorer.img} alt={selectedExplorer.name} className="w-full h-full object-cover" />
                                        </div>

                                        <div className="p-8 text-left">
                                            <h3 className="text-brand-amber font-bold text-xs uppercase tracking-widest mb-2">{selectedExplorer.location}</h3>
                                            <h2 className="text-3xl font-bold text-brand-navy mb-4" style={{ fontFamily: 'serif' }}>{selectedExplorer.name}</h2>
                                            <p className="text-gray-500 italic leading-relaxed mb-6">"{selectedExplorer.bio}"</p>
                                            <button className="w-full bg-brand-navy text-white py-4 font-bold text-xs uppercase tracking-widest hover:bg-brand-amber hover:text-brand-navy transition-all">
                                                Read Full Story
                                            </button>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-light italic text-brand-amber mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>Voices of Discovery</h2>
                        <div className="w-24 h-0.5 bg-brand-amber mx-auto bg-opacity-30" />
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {testimonials.map((t, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white p-10 rounded-sm shadow-xl border border-gray-100 relative group hover:border-brand-amber transition-all duration-500"
                            >
                                <Quote className="text-brand-amber opacity-10 absolute top-6 right-6 group-hover:opacity-30 transition-opacity" size={60} />
                                <div className="flex gap-1 mb-6">
                                    {[...Array(5)].map((_, star) => (
                                        <Star
                                            key={star}
                                            size={14}
                                            fill={star < t.rating ? "currentColor" : "none"}
                                            className={star < t.rating ? "text-brand-amber" : "text-gray-200"}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 italic leading-relaxed mb-8 relative z-10">"{t.content}"</p>
                                <div>
                                    <h4 className="font-bold text-brand-navy uppercase tracking-widest text-sm">{t.name}</h4>
                                    <p className="text-xs text-gray-400 font-medium">{t.role}</p>
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


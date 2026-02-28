import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';
import { motion } from 'framer-motion';
import { Award, Zap, Shield, Star } from 'lucide-react';

const ApplyNow = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="bg-brand-navy text-white min-h-screen">
            <TopBanner />
            <Navbar />

            <section className="pt-40 pb-24 px-6">
                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <h1 className="text-6xl font-light italic text-brand-amber mb-8" style={{ fontFamily: 'Playfair Display, serif' }}>
                            TravelTrek Elite
                        </h1>
                        <p className="text-gray-300 text-lg mb-12 leading-relaxed">
                            Join an exclusive circle of global explorers. TravelTrek Elite members enjoy unprecedented access to private estates, bespoke expeditions, and a dedicated 24/7 concierge.
                        </p>

                        <div className="space-y-8">
                            {[
                                { icon: Award, title: "Unrivaled Access", desc: "Private tours of world heritage sites after hours." },
                                { icon: Zap, title: "Priority Booking", desc: "Always be first in line for our seasonal expeditions." },
                                { icon: Shield, title: "Secure Travels", desc: "Comprehensive insurance and discrete security arrangements." }
                            ].map((feat, i) => (
                                <div key={i} className="flex gap-6">
                                    <div className="w-12 h-12 bg-brand-amber bg-opacity-10 rounded-full flex items-center justify-center flex-shrink-0">
                                        <feat.icon className="text-brand-amber" size={24} />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-brand-amber uppercase tracking-widest text-sm mb-1">{feat.title}</h3>
                                        <p className="text-gray-400 text-sm">{feat.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white p-10 md:p-14 rounded-sm shadow-2xl text-brand-navy"
                    >
                        {submitted ? (
                            <div className="text-center py-20">
                                <Star className="text-brand-amber mx-auto mb-6" size={48} fill="currentColor" />
                                <h2 className="text-3xl font-bold mb-4">Application Filed</h2>
                                <p className="text-gray-500 mb-8 italic">
                                    "Your journey towards elite status has begun. We review applications with the utmost care."
                                </p>
                                <button
                                    onClick={() => setSubmitted(false)}
                                    className="bg-brand-navy text-white px-10 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-brand-amber hover:text-brand-navy transition-all"
                                >
                                    Review Requirements
                                </button>
                            </div>
                        ) : (
                            <>
                                <h2 className="text-2xl font-bold mb-8 uppercase tracking-tighter">Membership Application</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Professional Title</label>
                                        <input type="text" required className="w-full bg-gray-50 border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all" placeholder="CEO, Independent Artist, Voyager" />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">LinkedIn or Portfolio URL</label>
                                        <input type="url" required className="w-full bg-gray-50 border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all" placeholder="https://..." />
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Why TravelTrek?</label>
                                        <textarea required className="w-full bg-gray-50 border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all h-32 resize-none" placeholder="What drives your spirit of discovery?"></textarea>
                                    </div>
                                    <div className="pt-4">
                                        <button type="submit" className="w-full bg-brand-amber text-brand-navy py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-brand-navy hover:text-white transition-all shadow-xl">
                                            Submit Application
                                        </button>
                                    </div>
                                    <p className="text-[10px] text-gray-400 text-center uppercase tracking-widest italic">
                                        Membership is subject to review and invitation.
                                    </p>
                                </form>
                            </>
                        )}
                    </motion.div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default ApplyNow;

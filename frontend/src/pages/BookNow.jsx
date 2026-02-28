import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';
import { motion } from 'framer-motion';
import { Send, MapPin, Calendar, Users } from 'lucide-react';

const BookNow = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <main className="bg-white text-brand-navy min-h-screen">
            <TopBanner />
            <Navbar />

            <section className="pt-40 pb-24 px-6">
                <div className="max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-center mb-16"
                    >
                        <h1 className="text-6xl font-light italic text-brand-amber mb-6" style={{ fontFamily: 'Playfair Display, serif' }}>
                            Begin Your Journey
                        </h1>
                        <p className="text-gray-400 italic text-lg max-w-2xl mx-auto">
                            "Fill in the details below, and our travel curators will craft the perfect itinerary for you."
                        </p>
                    </motion.div>

                    {submitted ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="bg-brand-amber bg-opacity-10 p-12 rounded-sm border border-brand-amber border-opacity-20 text-center"
                        >
                            <h2 className="text-3xl font-bold text-brand-navy mb-4">Inquiry Received!</h2>
                            <p className="text-brand-navy opacity-80 mb-8">
                                Thank you for choosing TravelTrek. Our consultants will reach out to you within 24 hours.
                            </p>
                            <button
                                onClick={() => setSubmitted(false)}
                                className="bg-brand-navy text-white px-10 py-3 rounded-sm font-bold text-xs uppercase tracking-widest hover:bg-brand-amber hover:text-brand-navy transition-all"
                            >
                                Send Another Inquiry
                            </button>
                        </motion.div>
                    ) : (
                        <motion.form
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            onSubmit={handleSubmit}
                            className="grid md:grid-cols-2 gap-8 bg-white p-8 md:p-12 shadow-2xl rounded-sm border border-gray-100"
                        >
                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Full Name</label>
                                    <input type="text" required className="w-full bg-gray-50 border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Email Address</label>
                                    <input type="email" required className="w-full bg-gray-50 border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all" placeholder="john@example.com" />
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Destination of Interest</label>
                                    <div className="relative">
                                        <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-amber" size={18} />
                                        <input type="text" required className="w-full bg-gray-50 border-none p-4 pl-12 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all" placeholder="e.g. Maldives, Swiss Alps" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Preferred Dates</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-amber" size={18} />
                                        <input type="text" className="w-full bg-gray-50 border-none p-4 pl-12 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all" placeholder="Next Month / Specific Dates" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Number of Travelers</label>
                                    <div className="relative">
                                        <Users className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-amber" size={18} />
                                        <select className="w-full bg-gray-50 border-none p-4 pl-12 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all appearance-none">
                                            <option>1 Traveler</option>
                                            <option>2 Travelers</option>
                                            <option>3-5 Travelers</option>
                                            <option>Group (5+)</option>
                                        </select>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">Special Requirements</label>
                                    <textarea className="w-full bg-gray-50 border-none p-4 rounded-sm focus:ring-2 focus:ring-brand-amber outline-none transition-all h-24 resize-none" placeholder="Any specific needs or preferences?"></textarea>
                                </div>
                            </div>

                            <div className="md:col-span-2 pt-6">
                                <button type="submit" className="w-full bg-brand-navy text-white py-5 rounded-sm font-bold text-sm uppercase tracking-widest hover:bg-brand-amber hover:text-brand-navy transition-all shadow-xl flex items-center justify-center gap-3">
                                    Request Itinerary <Send size={18} />
                                </button>
                            </div>
                        </motion.form>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BookNow;

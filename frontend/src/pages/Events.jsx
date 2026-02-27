import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, ArrowRight, Ticket } from 'lucide-react';
import api from '../services/api';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await api.get('/events');
                setEvents(res.data);
            } catch (error) {
                console.error("Error fetching events", error);
            } finally {
                setLoading(false);
            }
        };
        fetchEvents();
    }, []);

    return (
        <main className="bg-white text-brand-navy min-h-screen">
            <TopBanner />
            <Navbar />

            {/* Header Section */}
            <section className="pt-48 pb-20 bg-[#918674] bg-opacity-5">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-end">
                        <div>
                            <motion.span
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="text-brand-amber font-bold tracking-[0.3em] uppercase text-xs mb-6 block"
                            >
                                World Class Experiences
                            </motion.span>
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="text-6xl md:text-8xl font-light italic leading-tight"
                                style={{ fontFamily: 'Playfair Display, serif' }}
                            >
                                Seasonal <br /> <span className="text-brand-amber">Gatherings</span>
                            </motion.h1>
                        </div>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex flex-col gap-6"
                        >
                            <p className="text-gray-400 text-lg font-light leading-relaxed italic">
                                "From traditional festivals to modern artistic summits, join us in celebrating the vibrant cultures of our planet."
                            </p>
                            <div className="flex gap-4">
                                <div className="px-6 py-2 border border-brand-navy border-opacity-10 rounded-sm text-[10px] font-bold uppercase tracking-widest">Filter by Date</div>
                                <div className="px-6 py-2 border border-brand-navy border-opacity-10 rounded-sm text-[10px] font-bold uppercase tracking-widest">Location</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* List Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    {loading ? (
                        <div className="space-y-12">
                            {[1, 2, 3].map(i => (
                                <div key={i} className="h-48 bg-gray-50 rounded-sm animate-pulse" />
                            ))}
                        </div>
                    ) : (
                        <div className="space-y-12">
                            {events.length > 0 ? events.map((event, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="group flex flex-col md:flex-row gap-12 p-8 border border-gray-100 rounded-sm hover:shadow-2xl transition-all duration-500 bg-white"
                                >
                                    <div className="md:w-1/3 aspect-video relative overflow-hidden rounded-sm">
                                        <img
                                            src={event.imgSrc || `https://images.unsplash.com/photo-1514525253361-bee8487230c7?auto=format&fit=crop&w=800&q=80`}
                                            alt={event.name}
                                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                                        />
                                        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-sm shadow-lg text-center">
                                            <span className="text-brand-amber font-bold text-lg block leading-none">UP</span>
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-navy">COMING</span>
                                        </div>
                                    </div>

                                    <div className="md:w-2/3 flex flex-col justify-center gap-6">
                                        <div className="flex items-center gap-6 text-gray-400">
                                            <div className="flex items-center gap-2">
                                                <Calendar size={16} className="text-brand-amber" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">{event.eventType || 'Annual Festival'}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock size={16} className="text-brand-amber" />
                                                <span className="text-[10px] font-bold uppercase tracking-widest">{event.time || 'TBA'}</span>
                                            </div>
                                        </div>

                                        <h3 className="text-4xl font-light italic group-hover:text-brand-amber transition-colors" style={{ fontFamily: 'Playfair Display, serif' }}>
                                            {event.name}
                                        </h3>

                                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4 border-t border-gray-50">
                                            <div className="flex items-center gap-2 text-gray-500">
                                                <MapPin size={18} className="text-brand-amber" />
                                                <span className="text-sm font-light italic">{event.location || 'Central Park, NY'}</span>
                                            </div>
                                            <button className="flex items-center gap-4 bg-brand-navy text-white px-8 py-3 rounded-sm text-[10px] font-bold uppercase tracking-widest hover:bg-brand-amber transition-all duration-300">
                                                Get Tickets <Ticket size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </motion.div>
                            )) : (
                                <div className="text-center py-40 bg-gray-50 rounded-sm">
                                    <p className="text-gray-300 font-light italic text-2xl">Scheduling new world-class events...</p>
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

export default Events;

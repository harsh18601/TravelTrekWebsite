import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import TopBanner from '../components/TopBanner';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, Globe } from 'lucide-react';
import api from '../services/api';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        phoneNumber: '',
        message: ''
    });
    const [status, setStatus] = useState({ type: '', msg: '' });
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus({ type: '', msg: '' });

        try {
            await api.post('/contacts', formData);
            setStatus({ type: 'success', msg: 'Your message has been received. Our team will contact you shortly.' });
            setFormData({ firstName: '', lastName: '', email: '', country: '', phoneNumber: '', message: '' });
        } catch (error) {
            const errorMsg = error.response?.data?.errors?.[0]?.msg || "Failed to send message. Please try again.";
            setStatus({ type: 'error', msg: errorMsg });
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <main className="bg-white text-brand-navy min-h-screen">
            <TopBanner />
            <Navbar />

            {/* Header Section */}
            <section className="pt-48 pb-20 bg-[#918674] bg-opacity-5">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-brand-amber font-bold tracking-[0.4em] uppercase text-xs mb-8 block"
                    >
                        Inquire & Inspire
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-6xl md:text-8xl font-light italic leading-tight"
                        style={{ fontFamily: 'Playfair Display, serif' }}
                    >
                        Let's start a <br /> <span className="text-brand-amber">Conversation</span>
                    </motion.h1 >
                </div>
            </section>

            {/* Form & Info Section */}
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-12 gap-20">
                        {/* Info Column */}
                        <div className="lg:col-span-5 space-y-16">
                            <div className="space-y-6">
                                <h2 className="text-4xl font-light italic" style={{ fontFamily: 'Playfair Display, serif' }}>Global Concierge</h2>
                                <p className="text-gray-400 font-light italic text-lg leading-relaxed">
                                    "Whether you're planning a solo expedition or a corporate retreat, our travel architects are ready to design your perfect journey."
                                </p>
                            </div>

                            <div className="space-y-12">
                                {[
                                    { icon: Globe, label: 'Headquarters', value: '7th Avenue, New York, NY 10001' },
                                    { icon: Mail, label: 'Inquiries', value: 'concierge@traveltrek.com' },
                                    { icon: Phone, label: 'Direct Line', value: '+1 (800) 999 8888' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-8 group">
                                        <div className="w-16 h-16 border border-gray-100 rounded-sm flex items-center justify-center text-brand-amber group-hover:bg-brand-amber group-hover:text-white group-hover:border-transparent transition-all duration-500">
                                            <item.icon size={24} />
                                        </div>
                                        <div className="space-y-1">
                                            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400">{item.label}</p>
                                            <p className="text-xl font-light text-brand-navy italic">{item.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Form Column */}
                        <div className="lg:col-span-7">
                            <form onSubmit={handleSubmit} className="space-y-10 group">
                                <div className="grid md:grid-cols-2 gap-10">
                                    <div className="space-y-2 border-b border-gray-100 py-2 focus-within:border-brand-amber transition-colors">
                                        <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block">First Name</label>
                                        <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full bg-transparent text-lg font-light italic text-brand-navy outline-none" />
                                    </div>
                                    <div className="space-y-2 border-b border-gray-100 py-2 focus-within:border-brand-amber transition-colors">
                                        <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block">Last Name</label>
                                        <input name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full bg-transparent text-lg font-light italic text-brand-navy outline-none" />
                                    </div>
                                </div>
                                <div className="space-y-2 border-b border-gray-100 py-2 focus-within:border-brand-amber transition-colors">
                                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block">Email Address</label>
                                    <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full bg-transparent text-lg font-light italic text-brand-navy outline-none" />
                                </div>
                                <div className="space-y-2 border-b border-gray-100 py-2 focus-within:border-brand-amber transition-colors">
                                    <label className="text-[10px] font-bold text-gray-300 uppercase tracking-widest block">Your Message</label>
                                    <textarea required name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full bg-transparent text-lg font-light italic text-brand-navy outline-none resize-none"></textarea>
                                </div>

                                <div className="pt-6">
                                    <button
                                        disabled={loading}
                                        className={`px-12 py-5 rounded-sm font-bold text-[10px] uppercase tracking-[0.4em] transition-all flex items-center gap-6 ${loading ? 'bg-gray-100 text-gray-400' : 'bg-brand-navy text-white hover:bg-brand-amber'}`}
                                    >
                                        {loading ? 'Transmitting...' : 'Send Message'}
                                        <div className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                                            <Send size={14} />
                                        </div>
                                    </button>
                                </div>

                                {status.msg && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`p-6 rounded-sm flex items-center gap-4 ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}
                                    >
                                        {status.type === 'success' && <CheckCircle size={20} />}
                                        <p className="text-sm font-bold uppercase tracking-widest">{status.msg}</p>
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default Contact;

import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-navy border-t border-white border-opacity-5 py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {/* About Us */}
                <div>
                    <h3 className="text-2xl font-light italic mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>About TravelTrek</h3>
                    <p className="text-gray-400 font-light leading-relaxed italic">
                        "We believe that travel is the only thing you buy that makes you richer. Our mission is to curate extraordinary journeys that transcend the ordinary."
                    </p>
                </div>

                {/* Contact Us */}
                <div>
                    <h3 className="text-2xl font-light italic mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Get In Touch</h3>
                    <div className="space-y-4">
                        <div className="flex gap-4">
                            <MapPin className="text-brand-amber shrink-0" size={18} />
                            <p className="text-gray-400 text-sm font-light">Chhattarpur Square, New Delhi, India</p>
                        </div>
                        <div className="flex gap-4">
                            <Phone className="text-brand-amber shrink-0" size={18} />
                            <p className="text-gray-400 text-sm font-light">+91 98765 43210</p>
                        </div>
                        <div className="flex gap-4">
                            <Mail className="text-brand-amber shrink-0" size={18} />
                            <p className="text-gray-400 text-sm font-light italic">concierge@traveltrek.com</p>
                        </div>
                    </div>
                </div>

                {/* Recent Posts - Interactive Gallery */}
                <div>
                    <h3 className="text-2xl font-light italic mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Recent Journeys</h3>
                    <div className="grid grid-cols-3 gap-2">
                        {[
                            'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=150&q=80',
                            'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=150&q=80',
                            'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=150&q=80',
                            'https://images.unsplash.com/photo-1533130061792-64b345e4a833?auto=format&fit=crop&w=150&q=80',
                            'https://images.unsplash.com/photo-1433838552652-f9a46b332c40?auto=format&fit=crop&w=150&q=80',
                            'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=150&q=80',
                            'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=150&q=80',
                            'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=150&q=80',
                            'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=150&q=80'
                        ].map((url, i) => (
                            <div key={i} className="aspect-square rounded-sm overflow-hidden border border-white border-opacity-10 group">
                                <img src={url} alt={`Journey ${i}`} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Subscribe */}
                <div>
                    <h3 className="text-2xl font-light italic mb-6 text-white" style={{ fontFamily: 'Playfair Display, serif' }}>Newsletter</h3>
                    <p className="text-gray-400 text-sm mb-6 font-light italic">Join our exclusive circle of global explorers.</p>
                    <div className="relative group">
                        <input
                            type="email"
                            placeholder="Your essence..."
                            className="w-full bg-white bg-opacity-5 border border-white border-opacity-10 rounded-sm px-4 py-4 text-sm font-light italic focus:outline-none focus:border-brand-amber text-white transition-all"
                        />
                        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-brand-amber hover:scale-110 transition-transform">
                            <ArrowRight size={20} />
                        </button>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white border-opacity-5 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-gray-500 text-xs text-center">
                    Copyright © 2026 TravelTrek. All Rights Reserved. <span className="text-brand-amber">TravelTrek</span>
                </p>
                <div className="flex gap-6 text-gray-400">
                    <Facebook size={18} className="hover:text-brand-emerald cursor-pointer" />
                    <Twitter size={18} className="hover:text-brand-emerald cursor-pointer" />
                    <Instagram size={18} className="hover:text-brand-emerald cursor-pointer" />
                </div>
            </div>
        </footer>
    );
};

export default Footer;

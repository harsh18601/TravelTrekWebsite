import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Places to go', path: '/adventures' },
        { name: 'Events Calender', path: '/events' },
        { name: 'Wellness & Spa', path: '/wellness' },
        { name: 'Food', path: '/food' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-xl py-4' : 'bg-[#918674] bg-opacity-95 py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <span className={`text-4xl italic font-bold tracking-tight transition-colors ${scrolled ? 'text-brand-navy' : 'text-white'}`} style={{ fontFamily: 'Playfair Display, serif' }}>
                        TravelTrek
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-sm font-medium transition-all hover:text-brand-amber ${scrolled ? 'text-brand-navy' : 'text-white'
                                } ${location.pathname === link.path ? 'border-b-2 border-brand-amber' : ''}`}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className={`px-6 py-2 rounded-sm font-bold text-xs uppercase tracking-widest transition-all ${scrolled ? 'bg-brand-navy text-white' : 'bg-white text-brand-navy'} hover:bg-brand-amber hover:text-brand-navy`}>
                        Book Now
                    </button>
                </div>

            </div>
        </nav>
    );
};

export default Navbar;

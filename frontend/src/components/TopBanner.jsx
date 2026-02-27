import React from 'react';
import { motion } from 'framer-motion';

const TopBanner = () => {
    return (
        <div className="bg-brand-amber text-brand-navy py-2 px-6 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest z-[60] relative">
            TRAVEL TREK ELITE: Join our worldwide circle of explorers for exclusive benefits{' '}
            <a href="/member" className="underline hover:text-brand-slate transition-colors">Apply Now</a>.
        </div>
    );
};

export default TopBanner;

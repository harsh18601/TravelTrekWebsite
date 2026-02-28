import React from 'react';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <div className="bg-brand-amber text-brand-navy py-2 px-6 text-center text-[10px] md:text-xs font-bold uppercase tracking-widest z-[60] relative">
            TRAVEL TREK ELITE: Join our worldwide circle of explorers for exclusive benefits{' '}
            <Link to="/apply" className="underline hover:text-brand-slate transition-colors">Apply Now</Link>.
        </div>
    );
};

export default TopBanner;

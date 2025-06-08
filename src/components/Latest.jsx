import React from 'react';
import Marquee from 'react-fast-marquee';

const Latest = () => {
    return (
        // <div className="bg-gradient-to-r from-indigo-700 via-purple-800 to-pink-700 py-4 px-6">
        <div className="bg-gray-400 py-1 md:mt-22 px-2 flex items-center">
            <Marquee
                gradient={false}
                speed={60}
                className="text-white text-xl md:text-xl font-extrabold uppercase tracking-wide select-none"
            >
                🚀 Connecting Global Industries with Premium Bulk-Quality Tools, Machinery Parts, and Equipment 🛠️ — Fast Delivery ⏱️, Competitive Pricing 💰, Scalable Supply Solutions 📦, Trusted by Leading Manufacturers 🏭 and Logistics Providers Worldwide 🌍 — Limited Time Offers Inside! 🎉
                <p>🔥 Running Offer: Get 15% off all bulk orders above $5000! Use code <span className="font-bold">BULK15</span>📅 Upcoming: Exclusive Machinery Parts Sale starting July 15th — Stay tuned!</p>
            </Marquee>
            <div className="mt-4 text-center text-white text-sm md:text-base space-y-2">
            </div>
        </div>
    );
};

export default Latest;
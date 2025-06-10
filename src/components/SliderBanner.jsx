import React from 'react';
import SwipperSlider from './slider/SwipperSlider';

const SliderBanner = () => {
    return (
        <div className="relative max-w-[1590px] mx-auto p-3 ">
            
            {/* Background Slider - defines full height */}

            <SwipperSlider></SwipperSlider>


            {/* Overlay and Text Layer */}
            <div className="absolute inset-0 mx-auto px-4 py-10 md:px-16 flex items-center z-20 ">
                {/* Left-side overlay */}
                <div className="absolute inset-0 m-3  md:px-16 bg-gradient-to-r from-black/80 via-black/50 to-transparent z-10" />

                {/* Text Content */}
                <div className="relative z-20 md:max-w-3xl space-y-6 text-white text-left">
                    <h1 className="text-3xl md:text-5xl font-extrabold leading-tight bg-gradient-to-r from-indigo-300 via-purple-300 to-pink-500 bg-clip-text text-transparent">
                        Discover Premium Industrial Products for Modern Enterprises
                    </h1>

                    <p className="hidden md:block text-sm md:text-lg text-gray-200">
                        We supply high-grade tools, machinery components, and heavy-duty equipment designed for
                        <span className="font-semibold text-white"> construction, logistics, and manufacturing sectors</span>.
                        Experience efficient sourcing with <span className="text-indigo-300 font-semibold">fast delivery</span>,
                        <span className="text-indigo-300 font-semibold">competitive pricing</span>, and a
                        <span className="text-indigo-300 font-semibold">scalable inventory network</span> you can trust.
                    </p>

                    <div className="flex flex-wrap justify-start gap-2 md:gap-4">
                        <button className="btn btn-accent">📦 Explore Catalog</button>
                        <button className="btn btn-outline text-white border-white hover:border-indigo-500 hover:text-indigo-600">
                            🛠 Industries We Serve
                        </button>
                        <button className="btn btn-outline text-white border-white hover:border-indigo-500 hover:text-indigo-600">
                            🧾 Request a Quote
                        </button>
                        <button className="btn btn-outline text-white border-white hover:border-indigo-500 hover:text-indigo-600">
                            📞 Contact Sales
                        </button>
                    </div>

                    <div className="hidden mt-6 md:grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300">
                        <div className="flex items-start gap-2">
                            <span className="text-indigo-400">🚚</span>
                            <p><strong>Global Shipping:</strong> Reliable delivery to over 50+ countries.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-indigo-400">⚙️</span>
                            <p><strong>OEM Partnerships:</strong> Direct sourcing from certified manufacturers.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-indigo-400">📈</span>
                            <p><strong>Scalable Supply:</strong> Bulk-ready inventories for all business sizes.</p>
                        </div>
                        <div className="flex items-start gap-2">
                            <span className="text-indigo-400">🔒</span>
                            <p><strong>Secure Transactions:</strong> Encrypted payments and order tracking.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default SliderBanner;
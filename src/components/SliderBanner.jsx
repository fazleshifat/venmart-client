import React from 'react';
import SwipperSlider from './slider/SwipperSlider';

const SliderBanner = () => {
    return (
        <div className="relative max-w-[1380px] mx-auto p-3 ">
            {/* Background Slider - defines full height */}

            <SwipperSlider></SwipperSlider>


            {/* Overlay and Text Layer */}
            <div className="absolute inset-0 mx-auto px-10 py-10 md:px-16 flex items-center z-20 ">
                {/* Left-side overlay */}
                <div className="absolute inset-0 m-3  md:px-16 bg-gradient-to-r from-black/60 via-black/30 to-transparent z-10" />

                {/* Text Content */}
                <div className="relative z-20 max-w-xl space-y-6 text-white text-center md:text-left">
                    <h1 className="text-xl md:text-5xl font-extrabold leading-tight">
                        Discover Premium Industrial Products
                    </h1>
                    <p className="text-sm md:text-lg text-gray-200">
                        Supplying bulk-quality tools, machinery parts, and equipment for construction,
                        logistics, and manufacturing. Get fast delivery, competitive pricing, and scalable supply.
                    </p>
                    <button className="btn btn-primary">Explore Our Catalog</button>
                </div>
            </div>
        </div>

    );
};

export default SliderBanner;
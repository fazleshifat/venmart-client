import React from 'react';
import MarqueeSection from './Marquee';

const Banner = () => {
    return (
        <div className="relative bg-base-200 overflow-hidden">

            {/* Marquee Background with Image & Overlay */}
            <div className="absolute top-0 left-0 w-full z-0 overflow-hidden">
                {/* Marquee with images */}
                <MarqueeSection>
                </MarqueeSection>

                {/* Dark blur overlay */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-10" />
            </div>

            {/* Foreground Text Content */}
            <div className="relative h-screen z-20 flex flex-col items-center justify-center text-center px-6 py-16 max-w-4xl mx-auto">
                <h1 className="text-5xl font-extrabold text-white mb-6 drop-shadow-md">
                    Industrial Solutions, Delivered at Scale.
                </h1>

                <p className="text-lg text-white/90 mb-6 max-w-2xl drop-shadow-sm">
                    From tools to heavy-duty components, we supply industries with high-quality, certified products.
                    Partner with us for reliability, volume discounts, and on-time delivery.
                </p>

                <button className="btn btn-primary mb-4">Browse Product Catalog</button>

                <p className="text-sm text-white/80 max-w-md">
                    🎉 Special Offer: Get 15% off your first bulk order above $1,000. Limited time only!
                </p>

                <p className="text-sm text-white/70 mt-2">
                    ✅ ISO-Certified | ✅ Fast Shipping | ✅ B2B Support
                </p>
            </div>

        </div>



    );
};

export default Banner;
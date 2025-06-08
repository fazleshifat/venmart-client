import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueeSection = () => {
    return (
        <>
            <Marquee speed={100}>
                <div className="flex gap-4 h-screen">
                    <img src="/assets/banner1.jpg" alt="banner" />
                    <img src="/assets/banner2.png" alt="banner" />
                    <img src="/assets/banner3.png" alt="banner" />
                    <img src="/assets/banner6.png" alt="banner" />
                    <img src="/assets/banner7.png" alt="banner" />
                    <img src="/assets/banner8.png" alt="banner" />

                </div>
            </Marquee>
        </>
    );
};

export default MarqueeSection;
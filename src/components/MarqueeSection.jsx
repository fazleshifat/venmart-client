import React from 'react';
import Marquee from "react-fast-marquee";
const MarqueeSection = () => {
    return (
        <>
            <Marquee speed={100}>
                <div className="flex gap-4 h-screen">
                    <img src="/assets/image.jpg" alt="banner" />
                    <img src="/assets/image.jpg" alt="banner" />
                    <img src="/assets/image.jpg" alt="banner" />
                    <img src="/assets/image.jpg" alt="banner" />
                </div>
            </Marquee>
        </>
    );
};

export default MarqueeSection;
import React from 'react';
import ServiceSlider from '../components/ServiceSlider/ServiceSlider';

const OurServices = () => {
    return (
        <div>
            <div className="text-center md:mb-10">
                <h1 className="md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    🛍️Our Services
                </h1>
            </div>

            <ServiceSlider></ServiceSlider>
        </div>
    );
};

export default OurServices;
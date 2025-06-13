import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './ServiceSlider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                pagination={true}
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper min-h-[70vh] w-1/3"
            >
                <SwiperSlide>
                    <div className="m-5 rounded-4xl relative w-full min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden bg-gradient-to-br from-white via-indigo-200 to-red-300 border-indigo-300 dark:bg-gray-600 border-r-4 border-b-4 ">

                        {/* Decorative Corner Background */}
                        <img
                            src="/assets/abstract.png"
                            alt="Background texture"
                            className="absolute rounded-full animate-pulse top-0 left-0 w-48 h-48 opacity-10 pointer-events-none select-none"
                        />

                        {/* Left Side Image */}
                        <div className="w-full md:w-1/2 h-[60vh] flex items-center justify-center">
                            <img
                                src="/assets/banner1.png"
                                alt="Wholesale Illustration"
                                className="w-full h-full object-cover rounded-2xl shadow-xl"
                            />
                        </div>

                        {/* Right Side Text Content */}
                        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-center md:text-left z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                                Powering Wholesale & Retail Success
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-6">
                                From bulk purchasing to inventory optimization, our platform provides the tools and support you need to streamline your business and maximize profits.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="m-5 rounded-4xl relative w-full min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden bg-gradient-to-br from-white via-indigo-200 to-red-300 border-indigo-300 dark:bg-gray-600 border-r-4 border-b-4 ">

                        {/* Decorative Corner Background */}
                        <img
                            src="/assets/abstract.png"
                            alt="Background texture"
                            className="absolute animate-pulse top-0 left-0 w-48 h-48 opacity-10 pointer-events-none select-none"
                        />

                        {/* Left Side Image */}
                        <div className="w-full md:w-1/2 h-[60vh] flex items-center justify-center">
                            <img
                                src="/assets/banner1.png"
                                alt="Wholesale Illustration"
                                className="w-full h-full object-cover rounded-2xl shadow-xl"
                            />
                        </div>

                        {/* Right Side Text Content */}
                        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-center md:text-left z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                                Powering Wholesale & Retail Success
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-6">
                                From bulk purchasing to inventory optimization, our platform provides the tools and support you need to streamline your business and maximize profits.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="m-5 rounded-4xl relative w-full min-h-[50vh] flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-12 overflow-hidden bg-gradient-to-br from-white via-indigo-200 to-red-300 border-indigo-300 dark:bg-gray-600 border-r-4 border-b-4 ">

                        {/* Decorative Corner Background */}
                        <img
                            src="/assets/abstract.png"
                            alt="Background texture"
                            className="absolute animate-pulse top-0 left-0 w-48 h-48 opacity-10 pointer-events-none select-none"
                        />

                        {/* Left Side Image */}
                        <div className="w-full md:w-1/2 h-[60vh] flex items-center justify-center">
                            <img
                                src="/assets/banner1.png"
                                alt="Wholesale Illustration"
                                className="w-full h-full object-cover rounded-2xl shadow-xl"
                            />
                        </div>

                        {/* Right Side Text Content */}
                        <div className="w-full md:w-1/2 mt-10 md:mt-0 md:pl-12 text-center md:text-left z-10">
                            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 leading-tight">
                                Powering Wholesale & Retail Success
                            </h2>
                            <p className="text-lg md:text-xl text-gray-600 mb-6">
                                From bulk purchasing to inventory optimization, our platform provides the tools and support you need to streamline your business and maximize profits.
                            </p>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </>
    );
}
import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper max-w-96 lg:max-w-full object-center"
            >
                <SwiperSlide><img src="/assets/banner1.png" className='cursor-grab  lg:h-[400px]' alt="banner" /></SwiperSlide>
                <SwiperSlide><img src="/assets/banner2.png" className='cursor-grab  lg:h-[400px]' alt="banner" /></SwiperSlide>
                <SwiperSlide><img src="/assets/banner12.png" className='cursor-grab  lg:h-[400px]' alt="banner" /></SwiperSlide>
                <SwiperSlide><img src="/assets/banner3.png" className='cursor-grab  lg:h-[400px]' alt="banner" /></SwiperSlide>
                <SwiperSlide><img src="/assets/banner5.png" className='cursor-grab  lg:h-[400px]' alt="banner" /></SwiperSlide>
            </Swiper>
        </>
    );
}

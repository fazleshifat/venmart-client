import React from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swiper.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const SwipperSlider = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                // pagination={{
                //     clickable: true,
                // }}
                // navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='shadow-2xl rounded-3xl'><img src="/assets/banner1.jpg" alt="banner" className='min-h-[80vh] md:max-h-[80vh]' /></SwiperSlide>
                <SwiperSlide className='shadow-2xl rounded-3xl'><img src="/assets/banner2.png" alt="banner" className='min-h-[80vh] md:max-h-[80vh]' /></SwiperSlide>
                <SwiperSlide className='shadow-2xl rounded-3xl'><img src="/assets/banner3.png" alt="banner" className='min-h-[80vh] md:max-h-[80vh]' /></SwiperSlide>
                <SwiperSlide className='shadow-2xl rounded-3xl'><img src="/assets/banner6.png" alt="banner" className='min-h-[80vh] md:max-h-[80vh]' /></SwiperSlide>
                <SwiperSlide className='shadow-2xl rounded-3xl'><img src="/assets/banner7.png" alt="banner" className='min-h-[80vh] md:max-h-[80vh]' /></SwiperSlide>
                <SwiperSlide className='shadow-2xl rounded-3xl'><img src="/assets/banner8.png" alt="banner" className='min-h-[80vh] md:max-h-[80vh]' /></SwiperSlide>
                
            </Swiper>
        </div>
    );
};

export default SwipperSlider;
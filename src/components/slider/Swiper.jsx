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

const Swipper = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 1500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide  className='shadow-2xl border-2 border-white rounded-3xl'><img src="/assets/image.jpg" alt="banner" /></SwiperSlide>
                <SwiperSlide  className='shadow-2xl border-2 border-white rounded-3xl'><img src="/assets/image.jpg" alt="banner" /></SwiperSlide>
                <SwiperSlide  className='shadow-2xl border-2 border-white rounded-3xl'><img src="/assets/image.jpg" alt="banner" /></SwiperSlide>
                <SwiperSlide  className='shadow-2xl border-2 border-white rounded-3xl'><img src="/assets/image.jpg" alt="banner" /></SwiperSlide>
                <SwiperSlide  className='shadow-2xl border-2 border-white rounded-3xl'><img src="/assets/image.jpg" alt="banner" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Swipper;
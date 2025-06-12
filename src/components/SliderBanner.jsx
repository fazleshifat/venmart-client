import React from 'react';
import SwipperSlider from './slider/SwipperSlider';
import TypeWriter from './TypwWriter';
import { Fade } from 'react-awesome-reveal';

const SliderBanner = () => {
    return (
        <Fade cascade damping={0.5}>
            <div className="relative max-w-[1590px] mx-auto px-5 flex flex-col lg:flex-row-reverse justify-between">


                <div className='lg:max-w-6/12 md:mx-auto'>
                    <Fade cascade direction={'left'}>

                        <img src="/assets/abstract.png" className='absolute lg:right-60 opacity-30 w-66 lg:w-fit' alt="abstract" />
                    </Fade>

                    <SwipperSlider></SwipperSlider>

                </div>


                <img src="/assets/sale.png" className='w-15 md:w-40 h-15 md:h-40 md:mt-30 right-10 md:right-18 absolute animate-bounce' />

                {/* Overlay and Text Layer */}
                <div className="lg:max-w-6/12 mx-auto flex items-center overflow-x-hidden">
                    <Fade cascade direction={'right'}>
                        {/* Left-side overlay */}


                        {/* Text Content */}
                        <div className="space-y-6 max-w-3xl text-white text-left">
                            <h1 className="text-3xl md:text-5xl text-[#19817b] dark:text-[#7fffd4]">
                                Discover Premium Industrial Products for
                                <span className='text-indigo-300 ml-3 font-semibold'>
                                    <TypeWriter></TypeWriter>
                                </span>

                            </h1>

                            <p className="hidden md:block text-sm md:text-lg text-gray-500">
                                We supply high-grade tools, machinery components, and heavy-duty equipment designed for
                                <span className="font-semibold text-gray-400"> construction, logistics, and manufacturing sectors</span>.
                                Experience efficient sourcing with <span className="text-indigo-300 font-semibold">fast delivery</span>,
                                <span className="text-indigo-300 font-semibold">competitive pricing</span>, and a
                                <span className="text-indigo-300 font-semibold">scalable inventory network</span> you can trust.
                            </p>

                            <div className="flex flex-wrap justify-start gap-2 md:gap-4 mt-6">
                                <button className="btn bg-indigo-600 text-white hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition">
                                    📦 Explore Catalog
                                </button>
                                <button className="btn bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition">
                                    🛠 Industries We Serve
                                </button>
                                <button className="btn bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition">
                                    🧾 Request a Quote
                                </button>
                                <button className="btn bg-zinc-200 text-zinc-800 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-white dark:hover:bg-zinc-600 transition">
                                    📞 Contact Sales
                                </button>
                            </div>
                        </div>

                    </Fade>
                </div>
            </div >
        </Fade >
    );
};

export default SliderBanner;
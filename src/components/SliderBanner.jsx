import React from 'react';
import SwipperSlider from './slider/SwipperSlider';
import TypeWriter from './TypwWriter';
import { Fade } from 'react-awesome-reveal';
import { motion } from "framer-motion";

const SliderBanner = () => {
    return (
        <Fade cascade damping={0.5}>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
                }}
                className="relative max-w-[1590px] mx-auto px-5 flex flex-col lg:flex-row-reverse justify-between">


                <div className='lg:max-w-6/12 md:mx-auto py-5'>
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
                                {/* <br className='hidden md:flex lg:hidden'/> */}
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

                            <div className="flex flex-wrap gap-2 md:gap-4 mt-6">
                                <button className="btn bg-gradient-to-b from-purple-500 to-blue-400 text-white hover:bg-gradient-to-b hover:from-purple-600 hover:to-blue-700 dark:from-purple-400 dark:to-blue-500 dark:hover:from-purple-500 dark:hover:to-blue-600 transition focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-opacity-50 rounded-lg">
                                    📦 Explore Catalog
                                </button>

                                <button className="btn bg-gradient-to-r from-pink-400  to-yellow-500 text-white hover:bg-gradient-to-r hover:from-pink-600 hover:via-orange-600 hover:to-yellow-600 dark:from-pink-400 dark:via-orange-400 dark:to-yellow-400 dark:hover:from-pink-500 dark:hover:via-orange-500 dark:hover:to-yellow-500 transition rounded-lg">
                                    🛠 Industries We Serve
                                </button>

                                <button className="btn bg-gradient-to-r from-green-400 to-yellow-500 text-white hover:bg-gradient-to-r hover:from-green-500 hover:via-yellow-500 hover:to-yellow-600 dark:from-green-300 dark:via-yellow-300 dark:to-yellow-400 dark:hover:from-green-400 dark:hover:via-yellow-400 dark:hover:to-yellow-500 transition rounded-lg">
                                    🧾 Request a Quote
                                </button>

                                <button className="btn bg-gradient-to-r from-cyan-400 via-indigo-500 to-magenta-600 text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:via-indigo-600 hover:to-magenta-700 dark:from-cyan-300 dark:via-indigo-400 dark:to-magenta-500 dark:hover:from-cyan-400 dark:hover:via-indigo-500 dark:hover:to-magenta-600 transition rounded-lg">
                                    📞 Contact Sales
                                </button>
                            </div>
                        </div>

                    </Fade>
                </div>
            </motion.div >
        </Fade >
    );
};

export default SliderBanner;
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
                            <h1 className="text-3xl md:text-5xl font-light text-gray-800 dark:text-white/90 leading-tight">
                                Discover & Buy Premium <span className='font-bold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent'>B2B</span> Products for
                                {/* <br className='hidden md:flex lg:hidden'/> */}
                                <span className='text-indigo-500 dark:text-indigo-300 ml-3 font-semibold'>
                                    <TypeWriter></TypeWriter>
                                </span>

                            </h1>

                            <p className="hidden md:block text-sm md:text-lg text-gray-500 dark:text-gray-400 leading-relaxed">
                                We supply high-grade tools, machinery components, and heavy-duty equipment designed for
                                <span className="font-semibold text-gray-600 dark:text-gray-300"> construction, logistics, and manufacturing sectors</span>.
                                Experience efficient sourcing with <span className="text-indigo-500 dark:text-indigo-300 font-semibold">fast delivery</span>,
                                <span className="text-indigo-500 dark:text-indigo-300 font-semibold"> competitive pricing</span>, and a
                                <span className="text-indigo-500 dark:text-indigo-300 font-semibold"> scalable inventory network</span> you can trust.
                            </p>

                            <div className="flex flex-wrap gap-2 md:gap-4 mt-6">
                                <button
                                    onClick={() => {
                                        const section = document.getElementById("categories");
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded-full hover:shadow-lg hover:shadow-indigo-500/25 hover:scale-105 transition-all duration-300">
                                    Categories
                                </button>

                                <button
                                    onClick={() => {
                                        const section = document.getElementById("services");
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="btn bg-white/70 dark:bg-white/10 text-gray-700 dark:text-white border border-gray-200 dark:border-white/20 rounded-full hover:bg-white dark:hover:bg-white/20 hover:shadow-md transition-all duration-300">
                                    Services
                                </button>


                                <button
                                    onClick={() => {
                                        const section = document.getElementById("partners");
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="btn bg-white/70 dark:bg-white/10 text-gray-700 dark:text-white border border-gray-200 dark:border-white/20 rounded-full hover:bg-white dark:hover:bg-white/20 hover:shadow-md transition-all duration-300">
                                    Partners
                                </button>


                                <button
                                    onClick={() => {
                                        const section = document.getElementById("records");
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="btn bg-white/70 dark:bg-white/10 text-gray-700 dark:text-white border border-gray-200 dark:border-white/20 rounded-full hover:bg-white dark:hover:bg-white/20 hover:shadow-md transition-all duration-300">
                                    Records
                                </button>


                                <button
                                    onClick={() => {
                                        const section = document.getElementById("contacts");
                                        if (section) {
                                            section.scrollIntoView({ behavior: "smooth" });
                                        }
                                    }}
                                    className="btn bg-white/70 dark:bg-white/10 text-gray-700 dark:text-white border border-gray-200 dark:border-white/20 rounded-full hover:bg-white dark:hover:bg-white/20 hover:shadow-md transition-all duration-300">
                                    Contact
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
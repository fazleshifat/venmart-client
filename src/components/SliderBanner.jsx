import React from 'react';
import SwipperSlider from './slider/SwipperSlider';
import TypeWriter from './TypwWriter';
import { Fade } from 'react-awesome-reveal';
import { motion } from "framer-motion";

const SliderBanner = () => {
    return (
        <Fade cascade damping={0.5}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="relative max-w-[1500px] mx-auto px-5 md:px-8 flex flex-col lg:flex-row-reverse justify-between items-center min-h-[60vh] lg:min-h-[75vh]">

                {/* Right: Slider */}
                <div className='lg:w-6/12 md:mx-auto py-5 relative'>
                    <Fade cascade direction={'left'}>
                        <img src="/assets/abstract.png" className='absolute lg:right-40 opacity-20 w-66 lg:w-fit pointer-events-none' alt="" />
                    </Fade>
                    <SwipperSlider></SwipperSlider>
                </div>

                {/* Sale badge */}
                <img src="/assets/sale.png" className='w-14 md:w-32 h-14 md:h-32 md:mt-24 right-8 md:right-16 absolute animate-bounce drop-shadow-lg' alt="" />

                {/* Left: Hero Content */}
                <div className="lg:w-6/12 mx-auto flex items-center overflow-hidden">
                    <Fade cascade direction={'right'}>
                        <div className="space-y-7 max-w-3xl text-left">
                            <div className="inline-flex items-center gap-2 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-300 px-4 py-1.5 rounded-full text-xs font-medium border border-indigo-100 dark:border-indigo-500/20">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                                Trusted B2B Marketplace
                            </div>

                            <h1 className="text-3xl md:text-5xl lg:text-[3.25rem] font-light text-gray-800 dark:text-white/90 leading-[1.15] tracking-tight">
                                Discover & Buy Premium{' '}
                                <span className='font-bold text-gradient'>B2B</span>{' '}
                                Products for
                                <span className='text-indigo-500 dark:text-indigo-300 ml-2 font-semibold'>
                                    <TypeWriter></TypeWriter>
                                </span>
                            </h1>

                            <p className="hidden md:block text-base text-gray-500 dark:text-gray-400 leading-relaxed max-w-xl">
                                High-grade tools, machinery components, and heavy-duty equipment for
                                <span className="font-medium text-gray-600 dark:text-gray-300"> construction, logistics, and manufacturing</span>.
                                Experience <span className="text-indigo-500 dark:text-indigo-300 font-medium">fast delivery</span>,
                                <span className="text-indigo-500 dark:text-indigo-300 font-medium"> competitive pricing</span>, and a
                                <span className="text-indigo-500 dark:text-indigo-300 font-medium"> scalable inventory</span> you can trust.
                            </p>

                            <div className="flex flex-wrap gap-3 pt-2">
                                <button
                                    onClick={() => document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" })}
                                    className="btn btn-primary-gradient rounded-xl px-6 text-sm font-medium">
                                    Explore Categories
                                </button>

                                <button
                                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                                    className="btn btn-ghost-styled rounded-xl px-6 text-sm font-medium">
                                    Our Services
                                </button>
                            </div>

                            {/* Trust indicators */}
                            <div className="hidden md:flex items-center gap-6 pt-4 text-xs text-gray-400 dark:text-gray-500">
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                    <span>Verified Sellers</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                    <span>Secure Payments</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                                    <span>Fast Delivery</span>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </div>
            </motion.div >
        </Fade >
    );
};

export default SliderBanner;

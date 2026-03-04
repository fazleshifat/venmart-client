import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const stats = [
    {
        number: 3200,
        title: "Products Sold",
        description: "Diverse catalog of trending items delivered across the country."
    },
    {
        number: 450,
        title: "Verified Sellers",
        description: "Trusted vendors providing quality goods and reliable service."
    },
    {
        number: 1500,
        title: "Varified Customer",
        description: "Streamlined order processing with fast and secure delivery."
    }
];

const ServiceRecord = () => {
    return (
        <section id="records" className="relative max-w-[1300px] mx-auto bg-fixed py-24 px-6 md:px-16 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url("/assets/providedServices.jpg")' }}
        >
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#1e1b4b]/90 to-[#0f172a]/95 z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-4xl font-light text-white mb-12"
                >
                    Our <span className="font-semibold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Records</span>
                </motion.h2>


                <div className="grid gap-12 md:grid-cols-3">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative p-6 flex flex-col items-center text-center"
                        >
                            {/* 3D cube behind the number */}
                            <div className="relative w-34 h-34 mb-6 border border-indigo-500/30 rounded-2xl">
                                <div className="absolute inset-0 bg-indigo-600/20 backdrop-blur-sm transform border border-indigo-400/30 rotate-45 rounded-2xl shadow-lg shadow-indigo-500/10" />
                                <div className="relative z-10 text-4xl font-extrabold text-white flex items-center justify-center h-full">
                                    <CountUp
                                        start={0}
                                        end={item.number}
                                        duration={4}
                                        suffix="+"
                                        enableScrollSpy
                                        scrollSpyDelay={100}
                                    />
                                </div>
                            </div>

                            <h3 className="text-xl font-semibold mb-2 text-indigo-300">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-200">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServiceRecord;

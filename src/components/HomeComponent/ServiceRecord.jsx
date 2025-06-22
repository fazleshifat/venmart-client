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
        <section className="relative max-w-[1300px] mx-auto bg-fixed py-24 px-6 md:px-16 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url("/assets/providedServices.jpg")' }}
        >
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black/85 bg-opacity-60 z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl md:text-5xl font-light text-[#7fffd4] mb-12"
                >
                    Our Service Record💼
                </motion.h2>

                <div className="grid gap-12 md:grid-cols-3">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="relative p-6 flex flex-col items-center text-center"
                        >
                            {/* 3D cube behind the number */}
                            <div className="relative w-34 h-34 mb-6 border-2 border-gray-400">
                                <div className="absolute inset-0 bg-black/60 transform border-2 border-gray-400 rotate-45 shadow-lg" />
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

                            <h3 className="text-xl font-semibold mb-2 text-[#20b2aa]">
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

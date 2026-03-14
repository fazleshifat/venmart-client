import React from "react";
import { motion } from "framer-motion";
import CountUp from 'react-countup';

const stats = [
    {
        number: 3200,
        suffix: "+",
        title: "Products Sold",
        description: "Diverse catalog of trending items delivered across the country.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
        ),
    },
    {
        number: 450,
        suffix: "+",
        title: "Verified Sellers",
        description: "Trusted vendors providing quality goods and reliable service.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>
        ),
    },
    {
        number: 1500,
        suffix: "+",
        title: "Verified Customers",
        description: "Streamlined order processing with fast and secure delivery.",
        icon: (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
        ),
    }
];

const ServiceRecord = () => {
    return (
        <section id="records" className="relative max-w-[1300px] mx-auto rounded-3xl bg-fixed py-24 px-6 md:px-16 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url("/assets/providedServices.jpg")' }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a]/95 via-[#1e1b4b]/90 to-[#0f172a]/95 z-0" />

            <div className="relative z-10 max-w-[1100px] mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-300/80 mb-3">Our track record</p>
                    <h2 className="text-3xl md:text-4xl font-light text-white">
                        Our <span className="font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">Records</span>
                    </h2>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-3">
                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="relative p-8 flex flex-col items-center text-center rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/8 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 rounded-xl bg-indigo-500/20 border border-indigo-400/20 flex items-center justify-center text-indigo-300 mb-5">
                                {item.icon}
                            </div>

                            {/* Number */}
                            <div className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
                                <CountUp
                                    start={0}
                                    end={item.number}
                                    duration={3}
                                    suffix={item.suffix}
                                    enableScrollSpy
                                    scrollSpyDelay={100}
                                />
                            </div>

                            <h3 className="text-base font-semibold text-indigo-300 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
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

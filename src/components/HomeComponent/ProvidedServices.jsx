import React from "react";
import { motion } from "framer-motion";

const stats = [
    {
        number: "120+",
        title: "Industrial Automation",
        description: "Smart machinery integration and streamlined workflow systems.",
    },
    {
        number: "400+",
        title: "Product Sourcing",
        description: "Global sourcing for quality tools and industrial equipment.",
    },
    {
        number: "620+",
        title: "Maintenance & Support",
        description: "End-to-end support services to keep operations running smoothly.",
    },
];

const ProvidedServices = () => {
    return (
        <section className="relative max-w-[1290px] mx-auto bg-fixed py-24 px-6 md:px-16 text-white bg-cover bg-center bg-no-repeat overflow-hidden"
            style={{ backgroundImage: 'url("/assets/providedServices.jpg")' }}
        >
            {/* Overlay for dark effect */}
            <div className="absolute inset-0 bg-black/80 bg-opacity-60 z-0" />

            <div className="relative z-10 max-w-[1200px] mx-auto text-center">
                <motion.h2
                    initial={{ opacity: 0, y: -40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-bold text-[#7fffd4] mb-12"
                >
                    Services We Provide 💼
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
                            <div className="relative w-24 h-24 mb-6 border-2 rounded-2xl">
                                <div className="absolute inset-0 bg-indigo-400 transform border-2 rotate-45 rounded-lg shadow-lg" />
                                <div className="relative z-10 text-3xl font-extrabold text-white flex items-center justify-center h-full">
                                    {item.number}
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

export default ProvidedServices;

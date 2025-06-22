import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router";

const industries = [
    {
        name: "Construction",
        description:
            "Reliable tools, safety gear, and equipment tailored for building sites.",
        image: "/assets/construction.jpeg",
        link: "/products/construction",
        points: ["Safety helmets", "Heavy-duty gloves", "Reinforced boots"]
    },
    {
        name: "Manufacturing",
        description:
            "Precision instruments and components essential for manufacturing plants.",
        image: "/assets/manufacturing.jpg",
        link: "/products/manufacturing",
        points: ["CNC machine tools", "Calibration devices", "Industrial lubricants"]
    },
    {
        name: "Electrical",
        description:
            "High-grade wiring, tools, and electrical safety supplies.",
        image: "/assets/electrical.jpg",
        link: "/products/electrical",
        points: ["Insulated tools", "Voltage testers", "Circuit protection"]
    },
    {
        name: "Logistics",
        description:
            "Packaging solutions, bulk storage, and handling equipment.",
        image: "/assets/logistics.webp",
        link: "/products/logistics",
        points: ["Pallets & crates", "Heavy trolleys", "Industrial wrappers"]
    },
    {
        name: "Healthcare",
        description:
            "Protective apparel and sterilization tools to ensure workplace hygiene.",
        image: "/assets/healthcare.avif",
        link: "/products/healthcare",
        points: ["Surgical masks", "Latex gloves", "Disinfectant kits"]
    },
    {
        name: "Automotive",
        description:
            "Workshop essentials, parts, and mechanic-grade toolkits.",
        image: "/assets/automotive.jpg",
        link: "/products/automotive",
        points: ["Hydraulic lifts", "Wrench kits", "Engine oil"]
    }
];

const IndustryWeServe = () => {
    return (
        <section className="py-20 px-6 md:px-16 max-w-[1350px] mx-auto">
            <motion.h2
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-2xl md:text-4xl font-bold text-center mb-12 text-[#20b2aa] dark:text-[#7fffd4]"
            >
                Industries We Serve ⚙️
            </motion.h2>

            <div className="flex flex-col gap-14">
                {industries.map((industry, index) => {
                    const isEven = index % 2 === 0;
                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.2 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`flex flex-col md:flex-row ${!isEven ? 'md:flex-row-reverse' : ''} bg-white dark:bg-zinc-900 rounded-2xl border-2 border-indigo-200 dark:border-zinc-600 shadow-md hover:shadow-xl transition-shadow duration-300`}
                        >
                            <div className="md:w-1/2 w-full rounded-4xl overflow-hidden rounded-l-2xl">
                                <img
                                    src={industry.image}
                                    alt={industry.name}
                                    className="w-full h-96 p-6 rounded-4xl object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="md:w-1/2 w-full p-8 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-2xl md:text-3xl font-bold text-[#20b2aa] dark:text-[#7fffd4] mb-4">
                                        {industry.name}
                                    </h3>
                                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                                        {industry.description}
                                    </p>
                                    <ul className="list-disc pl-5 text-gray-600 dark:text-gray-400 mb-4 space-y-1">
                                        {industry.points.map((point, idx) => (
                                            <li key={idx}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <Link
                                        to={industry.link}
                                        className="inline-block mt-4 px-6 py-2 bg-[#20b2aa] text-white font-semibold rounded-lg hover:bg-[#178d8d] transition-colors"
                                    >
                                        Explore {industry.name} →
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default IndustryWeServe;
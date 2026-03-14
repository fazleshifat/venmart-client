import React from "react";
import { Link, useNavigation } from "react-router";
import Spinner from "../components/Spinner";
import { Fade } from "react-awesome-reveal";
import { motion } from "framer-motion";
import { useEffect } from "react";

const categories = [
    {
        title: "Gadgets Equipment",
        description: "Top-grade helmets, gloves, and vests for industrial environments.",
        image: "/assets/gadgets.avif",
        path: "/products/gadget",
        items: "120+",
    },
    {
        title: "Machinery Parts",
        description: "Durable mechanical parts and heavy-duty components.",
        image: "/assets/machinery.avif",
        path: "/products/machinery",
        items: "85+",
    },
    {
        title: "Electrical Tools",
        description: "Reliable tools for electrical installation and maintenance.",
        image: "/assets/electrical.avif",
        path: "/products/electrical",
        items: "200+",
    },
    {
        title: "Apparel Supplies",
        description: "Bulk packaging tapes, wraps, and cartons for logistics.",
        image: "/assets/apparel.avif",
        path: "/products/fashion",
        items: "150+",
    },
    {
        title: "Home Appliance",
        description: "Essential gear and tools for building and repair sites.",
        image: "/assets/appliance.avif",
        path: "/products/appliances",
        items: "95+",
    },
    {
        title: "Fashion",
        description: "Essential gear and tools for building and repair sites.",
        image: "/assets/fashion.avif",
        path: "/products/fashion",
        items: "180+",
    },
    {
        title: "Equipment",
        description: "High-quality safety gear including goggles, masks, and boots.",
        image: "/assets/safety.avif",
        path: "/products/equipments",
        items: "110+",
    },
    {
        title: "Materials",
        description: "Reliable construction supplies for both small and large projects.",
        image: "/assets/construction.avif",
        path: "/products/materials",
        items: "75+",
    },
    {
        title: "Others",
        description: "Essential gear and tools for building and repair sites.",
        image: "/assets/others.jpeg",
        path: "/products/others",
        items: "60+",
    },
];


const CategorySection = () => {
    window.scroll(0, 0);

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    useEffect(() => {
        document.getElementById("title").innerText = "Categories"
    }, [])

    return (
        <Fade cascade damping={0.3}>
            <div className="py-10 px-6 md:px-12 mx-auto max-w-[1350px]">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-3">Browse everything</p>
                    <h2 className="text-3xl md:text-4xl section-heading text-gray-800 dark:text-white">
                        All <span className="text-gradient">Categories</span>
                    </h2>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((cat, index) => (
                        <Link
                            to={cat.path}
                            key={index}
                            className="group relative bg-white h-full flex flex-col rounded-2xl overflow-hidden border border-gray-100 dark:border-indigo-500/15 dark:bg-slate-900/60 backdrop-blur-sm card-hover"
                        >
                            <div className="relative overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute top-3 right-3 text-[10px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 px-3 py-1 rounded-full font-semibold border border-indigo-100 dark:border-indigo-500/20">
                                    {cat.items} Items
                                </span>
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-1.5">
                                    {cat.title}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-4 flex-grow">
                                    {cat.description}
                                </p>

                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-gray-400 dark:text-gray-500 flex items-center gap-1">
                                        <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                        4.8 Rating
                                    </span>
                                    <span className="text-sm font-medium text-indigo-600 dark:text-indigo-400 group-hover:translate-x-1 transition-transform duration-300 flex items-center gap-1">
                                        View Items
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </motion.div>
            </div>
        </Fade>
    );
};

export default CategorySection;

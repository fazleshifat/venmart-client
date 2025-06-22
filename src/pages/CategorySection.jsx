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
    },
    {
        title: "Machinery Parts",
        description: "Durable mechanical parts and heavy-duty components.",
        image: "/assets/machinery.avif",
        path: "/products/machinery",
    },
    {
        title: "Electrical Tools",
        description: "Reliable tools for electrical installation and maintenance.",
        image: "/assets/electrical.avif",
        path: "/products/electrical",
    },
    {
        title: "Apparel Supplies",
        description: "Bulk packaging tapes, wraps, and cartons for logistics.",
        image: "/assets/apparel.avif",
        path: "/products/fashion",
    },
    {
        title: "Home Appliance",
        description: "Essential gear and tools for building and repair sites.",
        image: "/assets/appliance.avif",
        path: "/products/appliances",
    },
    {
        title: "Fashion",
        description: "Essential gear and tools for building and repair sites.",
        image: "/assets/fashion.avif",
        path: "/products/fashion",
    },
    {
        title: "Equipment",
        description: "High-quality safety gear including goggles, masks, and boots.",
        image: "/assets/safety.avif",
        path: "/products/equipments",
    },
    {
        title: "Materials",
        description: "Reliable construction supplies for both small and large projects.",
        image: "/assets/construction.avif",
        path: "/products/materials",
    }
    , {
        title: "Others",
        description: "Essential gear and tools for building and repair sites.",
        image: "/assets/others.jpeg",
        path: "/products/others",
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

        <Fade cascade damping={0.5}>

            <div className="py-7 px-6 md:px-16 mx-auto max-w-[1350px]">
                <h2 className="text-2xl md:text-4xl text-center mb-12 text-[#20b2aa] dark:text-[#7fffd4]">
                    Categories<span className="font-extrabold text-yellow-500">|</span>
                </h2>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                        duration: 0.8,
                        ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
                    }}
                    className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {categories.map((cat, index) => (
                        <div

                            key={index}
                            className="group bg-white h-full flex flex-col justify-between rounded-2xl shadow-md hover:shadow-xl  p-5 text-center border border-indigo-300 dark:bg-zinc-800"
                        >
                            <div className="relative overflow-x-hidden">
                                <img
                                    src={cat.image}
                                    alt={cat.title}
                                    className="w-full h-48 object-cover rounded-xl mb-4 transition duration-300 group-hover:scale-105"
                                />
                                <span className="absolute top-2 right-2 text-xs bg-indigo-600 text-white px-2 py-1 rounded-full shadow">
                                    🔥 Popular
                                </span>
                            </div>

                            <h3 className="md:text-2xl font-bold text-[#20b2aa] dark:text-[#7fffd4]">
                                {cat.title}
                            </h3>

                            <p className="text-sm text-gray-600 dark:text-zinc-300 mt-2">
                                {cat.description}
                            </p>

                            <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-300 font-medium flex justify-center items-center gap-2">
                                <span>📦 120+ Items</span>
                                <span>⭐ 4.8 Rating</span>
                            </div>
                            <div className="mt-4 text-sm text-indigo-600 dark:text-indigo-300 font-medium flex justify-center items-center gap-2">
                                <Link to={cat.path}
                                    className="btn bg-sky-400 rounded-xl w-full text-white transition duration-500 hover:scale-105">
                                    View Items
                                </Link>
                            </div>

                        </div>
                    ))}
                </motion.div>
            </div>
        </Fade>


    );
};

export default CategorySection;

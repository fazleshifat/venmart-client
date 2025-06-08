import React from "react";
import { Link } from "react-router";

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
];

const CategoryCards = () => {
    return (
        <div className="bg-base-100 py-16 px-6 md:px-16 mx-auto max-w-7xl">
            <h2 className="text-4xl font-bold text-center text-primary mb-12">Explore Our Categories</h2>

            <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
                {categories.map((cat, index) => (
                    <Link to={cat.path} key={index} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 p-4 text-center">
                        <img
                            src={cat.image}
                            alt={cat.title}
                            className="w-full h-40 object-cover rounded-xl mb-4"
                        />
                        <h3 className="text-xl font-semibold text-gray-800">{cat.title}</h3>
                        <p className="text-sm text-gray-600 mt-2">{cat.description}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default CategoryCards;

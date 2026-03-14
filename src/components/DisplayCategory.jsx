import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa";

const DisplayCategory = ({ product }) => {

    const star = []
    for (let i = 0; i < parseInt(product?.rating); i++) {
        star.push(<FaStar key={i}></FaStar>)
    }

    return (
        <div className="group relative bg-white dark:bg-slate-900/60 rounded-2xl overflow-hidden border border-gray-100 dark:border-indigo-500/15 card-hover flex flex-col">
            {/* Image */}
            <div className="relative overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="absolute top-3 right-3 text-[10px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 px-2.5 py-1 rounded-md font-semibold border border-indigo-100 dark:border-indigo-500/20">
                    {product.category}
                </span>
            </div>

            {/* Content */}
            <div className="p-5 flex flex-col flex-grow">
                <div className="flex items-start justify-between mb-3">
                    <h2 className="text-lg font-semibold text-gray-800 dark:text-white leading-snug">
                        {product.name}
                    </h2>
                </div>

                <div className="space-y-1.5 text-sm text-gray-500 dark:text-gray-400 mb-3">
                    <p>
                        <span className="font-medium text-gray-600 dark:text-gray-300">Brand:</span>{' '}
                        <span className="text-indigo-600 dark:text-indigo-400">{product.brand}</span>
                    </p>
                    <p>
                        <span className="font-medium text-gray-600 dark:text-gray-300">Min Qty:</span>{' '}
                        <span className="text-indigo-600 dark:text-indigo-400">{product.minQty}</span>
                    </p>
                </div>

                <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 leading-relaxed mb-4 flex-grow">
                    {product.description}
                </p>

                {/* Bottom section */}
                <div className="border-t border-gray-100 dark:border-slate-800 pt-4 mt-auto">
                    <div className="flex items-center justify-between mb-4">
                        <span className="text-xl font-bold text-green-600 dark:text-green-400">
                            ${product.price}
                        </span>
                        <span className="text-yellow-500 font-medium flex items-center gap-0.5 text-sm">
                            {star.map((item) => item)}
                        </span>
                    </div>

                    <Link
                        to={`/product/details/${product._id}`}
                        className="w-full btn btn-primary-gradient rounded-xl text-sm font-medium"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default DisplayCategory;

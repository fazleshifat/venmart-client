import React from 'react';
import { Link } from 'react-router';
import { FaStar } from "react-icons/fa";

const DisplayCategory = ({ product }) => {

    const star = []
    for (let i = 0; i < parseInt(product?.rating); i++) {
        star.push(<FaStar key={i}></FaStar>)
    }

    return (
        <div
            className="relative group rounded-3xl bg-white dark:bg-zinc-900/80 p-5 shadow-sm hover:shadow-xl border border-gray-100 dark:border-indigo-500/20 hover:-translate-y-2 transition-all duration-500"
        >
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-xl mb-4 border border-gray-100 dark:border-indigo-500/20"
            />

            <div>
                <div className="flex items-center justify-between mb-3">
                    <h2 className="md:text-lg font-semibold text-gray-800 dark:text-white">
                        {product.name}
                    </h2>
                    <span className="text-xs font-semibold bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full shadow-sm whitespace-nowrap">
                        {product.category}
                    </span>
                </div>

                <p className="text-sm mb-1">
                    🏷️ <span className="font-semibold">Brand:</span>{' '}
                    <span className="text-indigo-600 dark:text-indigo-300">{product.brand}</span>
                </p>
                <p className="text-sm mb-4">
                    📦 <span className="font-semibold">Min Qty:</span>{' '}
                    <span className="text-indigo-600 dark:text-indigo-300">{product.minQty}</span>
                </p>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-4 leading-relaxed">
                    {product.description}
                </p>
            </div>

            <div>
                <div className="flex items-center justify-between mt-6 border-t border-zinc-300 dark:border-zinc-700 pt-4">
                    <span className="text-xl font-bold text-green-600 dark:text-green-400">
                        💲{product.price}
                    </span>
                    <span id="react-stars" className="text-yellow-500 font-medium flex items-center gap-1 text-sm">
                        {
                            star.map((item) => item)
                        }
                    </span>
                </div>

                <Link
                    to={`/product/details/${product._id}`}
                    className="w-full mt-6 btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded-full hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                >
                    🔍 View Details
                </Link>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none bg-gradient-to-tr from-indigo-500/5 via-purple-500/5 to-pink-500/5"></div>
        </div>
    );
};

export default DisplayCategory;
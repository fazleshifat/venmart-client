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
            className="relative group rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
        >
            <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-xl mb-4 border-2 border-indigo-100 dark:border-zinc-700"
            />

            <div>
                <div className="flex items-center justify-between mb-3">
                    <h2 className="md:text-lg font-extrabold text-[#20b2aa] dark:text-[#7fffd4]">
                        🛍️{product.name}
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
                    className="w-full mt-6 btn btn-outline btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all"
                >
                    🔍 View Details
                </Link>
            </div>

            {/* Glow Effect on Hover */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 rounded-3xl pointer-events-none bg-gradient-to-tr from-indigo-400/10 via-pink-400/10 to-purple-400/10 shadow-inner"></div>
        </div>
    );
};

export default DisplayCategory;
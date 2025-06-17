import React, { useState } from 'react';
import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';
import Spinner from '../components/Spinner';


const CardView = ({ products = [], filteredProducts = [], filteredAvailableProducts = [], showAvailableOnly, load }) => {
    let toRender = [];

    if (showAvailableOnly) {
        toRender = filteredAvailableProducts;
    } else if (filteredProducts.length > 0) {
        toRender = filteredProducts;
    } else {
        toRender = products;
    }




    return (
        <Fade cascade damping={0.5}>
            {toRender.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1300px] mx-auto">
                    {load ?
                        <Spinner></Spinner>
                        :
                        toRender.map((product, index) => (
                            <div
                                key={index}
                                className="bg-white p-3 dark:bg-zinc-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col overflow-hidden"
                            >
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-52 w-full object-cover rounded-xl"
                                />
                                <div className="p-4 flex flex-col justify-between">
                                    <h2 className="md:text-xl font-semibold text-[#20b2aa] dark:text-[#7fffd4] flex items-center gap-2">
                                        📦 {product.name}
                                    </h2>
                                    <div className="grid grid-cols-1">
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                                Brand: <span className="font-medium">{product.brand}</span>
                                            </p>
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                                Category: <span className="font-medium">{product.category}</span>
                                            </p>
                                        </div>
                                        <p className="text-xs">⭐ Rating: {product.rating}</p>
                                        <p className="text-xs">📦 Available Quantity: {product.mainQty}</p>
                                        <p className="text-xs">🧾 Min Order Quantity: {product.minQty}</p>
                                    </div>
                                    <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                        ${product.price}
                                    </span>

                                    <div className="flex gap-1 flex-wrap justify-between items-center mt-4">
                                        <Link
                                            to={`/product/details/${product._id}`}
                                            className="btn btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition duration-200 transform hover:scale-105"
                                        >
                                            View Product
                                        </Link>
                                        <Link
                                            to={`/updateProduct/${product._id}`}
                                            className="btn btn-outline btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition duration-200 transform hover:scale-105"
                                        >
                                            ✏️ Update
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
            ) : (
                <p className="text-center text-gray-600 dark:text-white text-lg mt-10">
                    🚫 No products found.
                </p>
            )}
        </Fade>
    );
};

export default CardView;
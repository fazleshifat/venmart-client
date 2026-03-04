import React, { useState } from 'react';
import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';


const CardView = ({ products = [], filteredProducts = [], filteredAvailableProducts = [], showAvailableOnly }) => {
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
                    {toRender.map((product, index) => (
                        <div
                            key={index}
                            className="bg-white p-3 dark:bg-zinc-900/80 rounded-2xl shadow-sm hover:shadow-xl border border-gray-100 dark:border-indigo-500/20 transition-all duration-500 transform hover:-translate-y-2 flex flex-col overflow-hidden"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="h-52 w-full object-cover rounded-xl"
                            />
                            <div className="p-4 flex flex-col justify-between">
                                <h2 className="md:text-lg font-semibold text-gray-800 dark:text-white flex items-center gap-2">
                                    {product.name}
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
                                        className="btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded-full text-sm hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300"
                                    >
                                        View Product
                                    </Link>
                                    <Link
                                        to={`/updateProduct/${product._id}`}
                                        className="btn btn-outline border-indigo-300 dark:border-indigo-400/30 text-indigo-600 dark:text-indigo-300 rounded-full text-sm hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
                                    >
                                        Update
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
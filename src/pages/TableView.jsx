import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const TableView = ({ products = [], filteredProducts = [], filteredAvailableProducts = [], showAvailableOnly }) => {
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
                <div className="overflow-x-auto max-w-[1300px] mx-auto my-8">
                    <Fade cascade direction='left'>
                        <table className="min-w-full border border-gray-100 dark:border-indigo-500/20 rounded-2xl overflow-hidden shadow-sm">
                            <thead className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white">
                                <tr>
                                    <th className="p-3 text-left">Image</th>
                                    <th className="p-3 text-left">Name</th>
                                    <th className="hidden md:table-cell p-3 text-left">Brand</th>
                                    <th className="hidden md:table-cell p-3 text-left">Category</th>
                                    <th className="hidden md:table-cell p-3 text-left">Rating</th>
                                    <th className="hidden md:table-cell p-3 text-left">Available Qty</th>
                                    <th className="hidden md:table-cell p-3 text-left">Min Order Qty</th>
                                    <th className="hidden md:table-cell p-3 text-left">Price</th>
                                    <th className="p-3 text-left">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white dark:bg-zinc-900/80 divide-y divide-gray-50 dark:divide-zinc-800">
                                {toRender.map((product, index) => (
                                    <tr key={index} className="hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20 transition-colors duration-200">
                                        <td className="p-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-26 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="p-3 text-sm md:text-lg font-semibold text-gray-800 dark:text-white">
                                            {product.name}
                                        </td>
                                        <td className="hidden md:table-cell p-3 text-zinc-700 dark:text-zinc-300">{product.brand}</td>
                                        <td className="hidden md:table-cell p-3 text-zinc-700 dark:text-zinc-300">{product.category}</td>
                                        <td className="hidden md:table-cell p-3">⭐ {product.rating}</td>
                                        <td className="hidden md:table-cell p-3">{product.mainQty}</td>
                                        <td className="hidden md:table-cell p-3">{product.minQty}</td>
                                        <td className="hidden md:table-cell  p-3 text-indigo-600 dark:text-indigo-400 font-bold">${product.price}</td>
                                        <td className="p-3">
                                            <div className='flex flex-col md:flex-row gap-1'>
                                                <Link
                                                    to={`/product/details/${product._id}`}
                                                    className="btn btn-sm bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded-full hover:shadow-md transition-all duration-300"
                                                >
                                                    View
                                                </Link>
                                                <Link
                                                    to={`/updateProduct/${product._id}`}
                                                    className="btn btn-sm btn-outline border-indigo-300 dark:border-indigo-400/30 text-indigo-600 dark:text-indigo-300 rounded-full hover:bg-indigo-50 dark:hover:bg-indigo-500/10 transition-all duration-300"
                                                >
                                                    Update
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </Fade>
                </div>
            ) : (
                <p className="text-center text-gray-600 dark:text-white text-lg mt-10">
                    🚫 No products found.
                </p>
            )}
        </Fade>
    );
};

export default TableView;
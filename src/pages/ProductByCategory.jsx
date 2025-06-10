import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation, useParams } from 'react-router';
import Spinner from '../components/Spinner';

const ProductByCategory = () => {
    const products = useLoaderData();
    // console.log(products)

    window.scroll(0, 0)
    const { category } = useParams();
    const title = category.charAt(0).toUpperCase() + category.slice(1);
    // console.log(title);

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    return (
        <section className="max-w-[1350px] mx-auto px-4 py-16">
            {/* Page Heading */}
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-indigo-600 via-purple-500 to-pink-500 text-transparent bg-clip-text mb-4">
                    🛒 Products of <span className='text-gray-500'>{title}</span> Category
                </h1>
                <p className="text-zinc-600 dark:text-zinc-300 text-base md:text-lg">
                    Discover top-quality tools, parts, and equipment with trusted industrial-grade assurance.
                </p>
            </div>

            {/* Product Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="relative group rounded-3xl bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-zinc-800 dark:via-zinc-900 dark:to-zinc-800 p-5 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-56 object-cover rounded-xl mb-4 border-2 border-indigo-100 dark:border-zinc-700"
                        />

                        <div>
                            <div className="flex items-center justify-between mb-3">
                                <h2 className="text-md md:text-lg font-extrabold bg-gradient-to-r from-indigo-500 to-pink-500 bg-clip-text text-transparent">
                                    🛍️ {product.name}
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
                                <span className="text-yellow-500 font-medium flex items-center gap-1 text-sm">
                                    ⭐ {product.rating}/5
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
                ))}
            </div>
        </section>

    );
};

export default ProductByCategory;
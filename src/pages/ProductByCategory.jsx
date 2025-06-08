import React from 'react';
import { useLoaderData } from 'react-router';

const ProductByCategory = () => {
    const products = useLoaderData();
    console.log(products)

    window.scroll(0, 0)

    return (
        <section className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((product, index) => (
                <div
                    key={index}
                    className="bg-white dark:bg-zinc-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-[1.02] transition-transform duration-300"
                >
                    <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-56 object-cover"
                    />
                    <div className="p-5 space-y-3">
                        {/* Title and Category */}
                        <div className="flex items-center justify-between text-zinc-800 dark:text-white">
                            <h2 className="text-lg font-bold flex items-center gap-1">
                                🛍️ {product.name}
                            </h2>
                            <span className="text-xs font-medium bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-3 py-1 rounded-full">
                                {product.category}
                            </span>
                        </div>

                        {/* Min Quantity */}
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">
                            📦 <span className="font-medium">Min Qty:</span> {product.minQty}
                        </p>

                        {/* Description */}
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-2">
                            {product.description}
                        </p>

                        {/* Price and Rating */}
                        <div className="flex items-center justify-between mt-2">
                            <span className="text-xl font-semibold text-green-600 dark:text-green-400">
                                💲{product.price}
                            </span>
                            <span className="text-yellow-500 text-sm flex items-center gap-0.5">
                                ⭐ {product.rating}/5
                            </span>
                        </div>

                        {/* Details Button */}
                        <div className="pt-3">
                            <button className="w-full btn btn-outline btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition">
                                🔍 View Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </section>

    );
};

export default ProductByCategory;
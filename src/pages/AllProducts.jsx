import React from 'react';
import { useLoaderData } from 'react-router';

const AllProducts = () => {

    const products = useLoaderData();
    // console.log(products)

    return (
        <section className="min-h-screen bg-gray-50 dark:bg-zinc-900 px-4 py-10">
            <h1 className="text-4xl font-bold text-center text-zinc-800 dark:text-white mb-10">
                🛍️ All Products
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1350px] mx-auto">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-zinc-800 rounded-2xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-48 w-full object-cover"
                        />
                        <div className="p-5 flex flex-col justify-between h-full space-y-4">
                            <div>
                                <h2 className="text-2xl font-semibold text-zinc-800 dark:text-white flex items-center gap-2">
                                    📦 {product.name}
                                </h2>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                                    Brand: <span className="font-medium">{product.brand}</span>
                                </p>
                                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                                    Category: <span className="font-medium">{product.category}</span>
                                </p>
                            </div>

                            <div className="space-y-1 text-zinc-600 dark:text-zinc-300">
                                <p>⭐ Rating: {product.rating}</p>
                                <p>📦 Available Quantity: {product.mainQty}</p>
                                <p>🧾 Min Order Quantity: {product.minQty}</p>
                                <p className="line-clamp-2">📝 {product.description}</p>
                            </div>

                            <div className="flex justify-between items-center mt-4">
                                <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                    💲{product.price}
                                </span>
                                <button className="btn btn-outline btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition">
                                    ✏️ Update
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AllProducts;
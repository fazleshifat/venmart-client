import React from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';

const AllProducts = () => {
    window.scroll(0, 0)

    const products = useLoaderData();
    // console.log(products)

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    return (
        <section className="min-h-screen bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-4 py-10">
            <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10">
                🛍️ All Products
            </h1>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1300px] mx-auto">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white dark:bg-zinc-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-52 w-full object-cover rounded-t-xl transition-transform duration-300 hover:scale-110"
                        />
                        <div className="p-4 flex flex-col justify-between ">
                            <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center gap-2">
                                📦 {product.name}
                            </h2>
                            <div className='grid grid-cols-1'>
                                <div className='flex items-center justify-between'>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                                        Brand: <span className="font-medium">{product.brand}</span>
                                    </p>
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        Category: <span className="font-medium">{product.category}</span>
                                    </p>
                                </div>

                                <p>⭐ Rating: {product.rating}</p>
                                <p>📦 Available Quantity: {product.mainQty}</p>
                                <p>🧾 Min Order Quantity: {product.minQty}</p>
                            </div>
                            <span className="text-lg font-bold text-indigo-600 dark:text-indigo-400">
                                💲{product.price}
                            </span>

                            <div className="flex justify-between items-center mt-4">
                                <Link to={`/product/details/${product._id}`} className="btn btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition duration-200 transform hover:scale-105">
                                    View Product
                                </Link>
                                <Link to={`/updateProduct/${product._id}`} className="btn btn-outline btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition duration-200 transform hover:scale-105">
                                    ✏️ Update
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default AllProducts;
import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const CardView = ({ products }) => {

    return (
        <Fade cascade damping={0.5}>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1300px] mx-auto">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white p-3 dark:bg-zinc-800 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex flex-col overflow-hidden"
                    >
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-52 object-cover rounded-xl "
                        />
                        <div className="p-4 flex flex-col justify-between ">
                            <h2 className="text-xl font-semibold text-[#20b2aa] dark:text-[#7fffd4] flex items-center gap-2">
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
        </Fade>
    );
};

export default CardView;
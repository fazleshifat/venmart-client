import React from 'react';
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
        <Fade cascade damping={0.3} triggerOnce>
            {toRender.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 max-w-[1300px] mx-auto">
                    {toRender.map((product, index) => (
                        <div
                            key={index}
                            className="group bg-white dark:bg-slate-900/60 rounded-2xl border border-gray-100 dark:border-indigo-500/15 overflow-hidden card-hover flex flex-col"
                        >
                            {/* Image */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <span className="absolute top-2.5 left-2.5 text-[10px] bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm text-indigo-600 dark:text-indigo-400 px-2.5 py-0.5 rounded-md font-semibold border border-indigo-100 dark:border-indigo-500/20">
                                    {product.category}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="p-4 flex flex-col flex-grow">
                                <h2 className="text-sm font-semibold text-gray-800 dark:text-white mb-1 line-clamp-1">
                                    {product.name}
                                </h2>
                                <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">
                                    {product.brand}
                                </p>

                                <div className="space-y-1 mb-3 text-xs text-gray-500 dark:text-gray-400">
                                    <div className="flex justify-between">
                                        <span className="flex items-center gap-1">
                                            <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                            {product.rating}
                                        </span>
                                        <span>Stock: {product.mainQty}</span>
                                    </div>
                                    <p>Min Order: {product.minQty}</p>
                                </div>

                                <div className="mt-auto">
                                    <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-3">
                                        ${product.price}
                                    </p>

                                    <div className="flex gap-2">
                                        <Link
                                            to={`/product/details/${product._id}`}
                                            className="btn btn-sm btn-primary-gradient rounded-lg flex-1 text-xs font-medium"
                                        >
                                            View
                                        </Link>
                                        <Link
                                            to={`/updateProduct/${product._id}`}
                                            className="btn btn-sm btn-ghost-styled rounded-lg text-xs font-medium px-3"
                                        >
                                            Edit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-20">
                    <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                    </div>
                    <p className="text-gray-500 dark:text-gray-400 font-medium">No products found</p>
                    <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Try adjusting your search or filters</p>
                </div>
            )}
        </Fade>
    );
};

export default CardView;

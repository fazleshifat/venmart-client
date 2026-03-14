import React from 'react';
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
        <Fade cascade damping={0.3} triggerOnce>
            {toRender.length > 0 ? (
                <div className="overflow-x-auto max-w-[1300px] mx-auto my-6">
                    <div className="bg-white dark:bg-slate-900/60 rounded-2xl border border-gray-100 dark:border-indigo-500/15 overflow-hidden">
                        <table className="min-w-full">
                            <thead>
                                <tr className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm">
                                    <th className="p-4 text-left font-medium">Product</th>
                                    <th className="p-4 text-left font-medium">Name</th>
                                    <th className="hidden md:table-cell p-4 text-left font-medium">Brand</th>
                                    <th className="hidden md:table-cell p-4 text-left font-medium">Category</th>
                                    <th className="hidden md:table-cell p-4 text-left font-medium">Rating</th>
                                    <th className="hidden md:table-cell p-4 text-left font-medium">Stock</th>
                                    <th className="hidden md:table-cell p-4 text-left font-medium">Min Qty</th>
                                    <th className="hidden md:table-cell p-4 text-left font-medium">Price</th>
                                    <th className="p-4 text-left font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-50 dark:divide-slate-800">
                                {toRender.map((product, index) => (
                                    <tr key={index} className="hover:bg-indigo-50/30 dark:hover:bg-indigo-950/10 transition-colors duration-200">
                                        <td className="p-3">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-16 h-12 object-cover rounded-lg"
                                            />
                                        </td>
                                        <td className="p-3">
                                            <span className="text-sm font-semibold text-gray-800 dark:text-white">{product.name}</span>
                                        </td>
                                        <td className="hidden md:table-cell p-3 text-sm text-gray-600 dark:text-gray-300">{product.brand}</td>
                                        <td className="hidden md:table-cell p-3">
                                            <span className="text-xs bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 px-2 py-0.5 rounded-md font-medium border border-indigo-100 dark:border-indigo-500/20">
                                                {product.category}
                                            </span>
                                        </td>
                                        <td className="hidden md:table-cell p-3">
                                            <span className="flex items-center gap-1 text-sm">
                                                <svg className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                                                {product.rating}
                                            </span>
                                        </td>
                                        <td className="hidden md:table-cell p-3 text-sm text-gray-600 dark:text-gray-300">{product.mainQty}</td>
                                        <td className="hidden md:table-cell p-3 text-sm text-gray-600 dark:text-gray-300">{product.minQty}</td>
                                        <td className="hidden md:table-cell p-3 text-sm font-bold text-indigo-600 dark:text-indigo-400">${product.price}</td>
                                        <td className="p-3">
                                            <div className='flex flex-col md:flex-row gap-1.5'>
                                                <Link
                                                    to={`/product/details/${product._id}`}
                                                    className="btn btn-xs btn-primary-gradient rounded-lg text-[10px] font-medium"
                                                >
                                                    View
                                                </Link>
                                                <Link
                                                    to={`/updateProduct/${product._id}`}
                                                    className="btn btn-xs btn-ghost-styled rounded-lg text-[10px] font-medium"
                                                >
                                                    Edit
                                                </Link>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
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

export default TableView;

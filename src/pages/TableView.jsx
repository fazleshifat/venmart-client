import React from 'react';
import { Fade } from 'react-awesome-reveal';
import { Link } from 'react-router';

const TableView = ({ products }) => {
    return (

        <div className="overflow-x-auto max-w-[1300px] mx-auto my-8">
            <Fade cascade direction='left'>
                <table className="min-w-full border border-gray-300 dark:border-zinc-700 rounded-xl overflow-hidden">
                    <thead className="bg-indigo-500 text-white">
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
                    <tbody className="bg-white dark:bg-zinc-800 divide-y divide-gray-200 dark:divide-zinc-700">
                        {products.map((product, index) => (
                            <tr key={index} className="hover:bg-gray-100 dark:hover:bg-zinc-700 transition">
                                <td className="p-3">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-26 object-cover rounded-md"
                                    />
                                </td>
                                <td className="p-3 text-sm md:text-lg font-semibold text-[#20b2aa] dark:text-[#7fffd4]">
                                    {product.name}
                                </td>
                                <td className="hidden md:table-cell p-3 text-zinc-700 dark:text-zinc-300">{product.brand}</td>
                                <td className="hidden md:table-cell p-3 text-zinc-700 dark:text-zinc-300">{product.category}</td>
                                <td className="hidden md:table-cell p-3">⭐ {product.rating}</td>
                                <td className="hidden md:table-cell p-3">{product.mainQty}</td>
                                <td className="hidden md:table-cell p-3">{product.minQty}</td>
                                <td className="hidden md:table-cell  p-3 text-indigo-600 dark:text-indigo-400 font-bold">${product.price}</td>
                                <td className="p-3 space-x-2 space-y-2">
                                    <Link
                                        to={`/product/details/${product._id}`}
                                        className="btn btn-sm btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
                                    >
                                        View
                                    </Link>
                                    <Link
                                        to={`/updateProduct/${product._id}`}
                                        className="btn btn-sm btn-outline btn-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-zinc-900"
                                    >
                                        ✏️Update
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Fade>
        </div>

    );
};

export default TableView;
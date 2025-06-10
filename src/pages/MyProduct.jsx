import React from 'react';
import { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthProvider/PrivateRoute';

const MyProduct = () => {

    const { user } = use(AuthContext);

    const products = useLoaderData();
    const filterProducts = products.filter(product => product.ownerEmail === user?.email);

    return (
        <section className="p-6 md:p-10 min-h-screen ">
            <div className="text-center mb-10">
                <h1 className="text-4xl text-center font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    📋My added Products
                </h1>
                <p className="text-gray-600 text-lg mt-2">Manage the products you've listed for sale</p>
            </div>

            {filterProducts.length === 0 ? (
                <div className="text-center text-gray-500 text-lg">No products found</div>
            ) : (
                <div className="grid gap-6 grid-cols-1">
                    {filterProducts.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-2xl shadow-md hover:shadow-lg transition"
                        >
                            <div className="p-4 border rounded-2xl shadow-sm bg-white hover:shadow-md transition">
                                <div className="flex flex-col md:flex-row gap-4">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full md:w-48 h-48 object-cover rounded-xl"
                                    />
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
                                            <p className="text-sm text-gray-500 mt-1">Brand: <span className="font-medium">{product.brand}</span></p>
                                            <p className="text-sm text-gray-500">Category: <span className="font-medium">{product.category}</span></p>
                                            <p className="text-sm text-gray-600 mt-2 font-semibold ">Price: ${product.price}</p>
                                            <p className="text-sm text-gray-500">Stock: {product.quantity}</p>
                                            <p className="text-xs text-gray-400 mt-1 italic">
                                                Listed on: {product.listedDate || 'N/A'}
                                            </p>
                                        </div>
                                        <div className="flex gap-4 mt-4">
                                            <button className="text-sm text-blue-600 hover:underline">✏️ Edit</button>
                                            <button className="text-sm text-red-600 hover:underline">🗑️ Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
            )}
        </section>
    );
};

export default MyProduct;
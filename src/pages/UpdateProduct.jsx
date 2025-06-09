import React from 'react';
import { useLoaderData } from 'react-router';

const UpdateProduct = () => {

    const product = useLoaderData();
    console.log(product)
    const { name, brand, category, description, image, mainQty, minQty, price, rating } = product;

    return (
        <div className="min-h-screen w-full bg-gradient-to-tr from-gray-100 via-white to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center px-4 py-10 transition-all duration-300">
            <form className="w-full max-w-5xl p-10 bg-white dark:bg-[#1e1e2f] shadow-2xl rounded-2xl transition-all duration-300 dark:border border-indigo-300">
                <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    🛠️ Update Product Information
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-100">
                    {/* Product Image */}
                    <div className="md:col-span-2">
                        <label className="label font-semibold">Product Image</label>
                        <input
                            type="text"
                            name="image"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={image}
                        />
                    </div>

                    {/* Product Name */}
                    <div>
                        <label className="label font-semibold">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter product name"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={name}
                        />
                    </div>

                    {/* Brand Name */}
                    <div>
                        <label className="label font-semibold">Brand Name</label>
                        <input
                            type="text"
                            name="brand"
                            placeholder="Enter brand name"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={brand}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="label font-semibold">Category</label>
                        <select
                            name="category"
                            className="select select-bordered w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={category}
                        >
                            <option value="">Select Category</option>
                            <option>electrical</option>
                            <option>gadget</option>
                            <option>appliances</option>
                            <option>fashion</option>
                            <option>machinery</option>
                        </select>
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="label font-semibold">Rating (1-5)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={rating}
                        />
                    </div>

                    {/* Price */}
                    <div>
                        <label className="label font-semibold">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            step="0.01"
                            placeholder="Enter product price"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={price}
                        />
                    </div>

                    {/* Main Quantity */}
                    <div>
                        <label className="label font-semibold">Main Quantity</label>
                        <input
                            type="number"
                            name="mainQuantity"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={mainQty}
                        />
                    </div>

                    {/* Minimum Selling Quantity */}
                    <div>
                        <label className="label font-semibold">Minimum Selling Quantity</label>
                        <input
                            type="number"
                            name="minQty"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={minQty}
                        />
                    </div>

                    {/* Description (Full Width) */}
                    <div className="md:col-span-2">
                        <label className="label font-semibold">Description</label>
                        <textarea
                            name="description"
                            placeholder="Product details..."
                            className="textarea textarea-bordered w-full h-24 bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700"
                            defaultValue={description}
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-10">
                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-none px-10 py-2 text-lg rounded-full shadow-lg hover:brightness-110 transition"
                    >
                        Update Product
                    </button>
                </div>
            </form>
        </div>

    );
};

export default UpdateProduct;
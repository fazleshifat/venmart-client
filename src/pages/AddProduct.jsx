import axios from 'axios';
import React from 'react';
import { useNavigate, useNavigation } from 'react-router';
import Swal from 'sweetalert2';
import Spinner from '../components/Spinner';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Fade } from 'react-awesome-reveal';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { useState } from 'react';

const AddProduct = () => {
    const { user } = use(AuthContext);


    const Navigate = useNavigate();



    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const productInfo = Object.fromEntries(formData.entries());
        productInfo.mainQty = parseInt(productInfo?.mainQty)
        productInfo.minQty = parseInt(productInfo?.minQty)
        // console.log(productInfo)

        // Send a POST request
        axios.post(`https://venmart-server.vercel.app/addProducts?email=${user?.email}`, productInfo, {
            headers: { Authorization: `Bearer ${user?.accessToken}` }
        })
            .then(res => {
                if (res.data.insertedId) {
                    // sweet alert after create user
                    Swal.fire({
                        icon: "success",
                        title: "Product Added Successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
                Navigate('/myProduct');
            })
            .catch();
    }


    useEffect(() => {
        document.getElementById("title").innerText = "Add product"
        window.scroll(0, 0)
    }, [])



    return (


        <div className="min-h-screen  flex items-center justify-center flex-col p-4 transition-all duration-300">

            <motion.form
                onSubmit={handleAddProduct}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
                }}
                className="w-full max-w-4xl bg-white dark:bg-zinc-900/80 p-8 rounded-3xl shadow-xl shadow-indigo-500/5 border border-gray-100 dark:border-indigo-500/20 backdrop-blur-sm space-y-8"
            >
                <h1 className="text-2xl md:text-4xl text-center font-light mb-8 text-gray-800 dark:text-white">
                    Add <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Product</span>
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-zinc-800 dark:text-zinc-100">
                    {/* Product Image */}
                    <div>
                        <label className="block text-sm font-semibold mb-1">
                            Product Image URL
                        </label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>

                    {/* Product Name */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-semibold mb-1">
                            Title of the Product
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>

                    {/* Main Quantity */}
                    <div>
                        <label htmlFor="mainQty" className="block text-sm font-semibold mb-1">
                            Main Quantity
                        </label>
                        <input
                            type="number"
                            id="mainQty"
                            name="mainQty"
                            required
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>

                    {/* Minimum Selling Quantity */}
                    <div>
                        <label htmlFor="minQty" className="block text-sm font-semibold mb-1">
                            Minimum Selling Quantity
                        </label>
                        <input
                            type="number"
                            id="minQty"
                            name="minQty"
                            required
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>

                    {/* Brand Name */}
                    <div>
                        <label htmlFor="brand" className="block text-sm font-semibold mb-1">
                            Brand Name
                        </label>
                        <input
                            type="text"
                            id="brand"
                            name="brand"
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-semibold mb-1">
                            Category
                        </label>
                        <select
                            id="category"
                            name="category"
                            required
                            className="select select-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        >
                            <option value="">Select Category</option>
                            <option>electrical</option>
                            <option>gadget</option>
                            <option>fashion</option>
                            <option>appliances</option>
                            <option>machinery</option>
                            <option>tools</option>
                            <option>accessories</option>
                            <option>others</option>
                        </select>
                    </div>
                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-semibold mb-1">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            name="price"
                            required
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>

                    {/* Rating */}
                    <div>
                        <label htmlFor="rating" className="block text-sm font-semibold mb-1">
                            Rating (1–5)
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            min="1"
                            max="5"
                            required
                            onInput={(e) => {
                                const value = parseInt(e.target.value);
                                if (value > 5) e.target.value = 5;
                                if (value < 1) e.target.value = 1;
                            }}
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>
                    {/* Owner Name */}
                    <div>
                        <label htmlFor="ownerName" className="block text-sm font-semibold mb-1">
                            Owner Name
                        </label>
                        <input
                            type="text"
                            id="ownerName"
                            name="ownerName"
                            defaultValue={user?.displayName}
                            readOnly
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>
                    {/* Owner Email */}
                    <div>
                        <label htmlFor="ownerName" className="block text-sm font-semibold mb-1">
                            Owner Email
                        </label>
                        <input
                            type="text"
                            id="ownerEmail"
                            name="ownerEmail"
                            defaultValue={user?.email}
                            readOnly
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        />
                    </div>

                    {/* Short Description */}
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-semibold mb-1">
                            Short Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows={3}
                            className="textarea textarea-bordered w-full bg-white dark:bg-zinc-800 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                        ></textarea>
                    </div>


                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none w-full mt-4 rounded-full text-lg shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300"
                >
                    Add Product
                </button>
            </motion.form>
        </div>


    );
};

export default AddProduct;
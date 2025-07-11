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
                className="w-full max-w-4xl bg-white dark:bg-zinc-900 p-8 rounded-2xl shadow-2xl space-y-8"
            >
                <h1 className="text-2xl md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                    🛒Add Product
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="select select-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="input input-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
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
                            className="textarea textarea-bordered w-full bg-white dark:bg-zinc-800 border-gray-300 dark:border-zinc-700"
                        ></textarea>
                    </div>


                </div>

                {/* Submit */}
                <button
                    type="submit"
                    className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white border-none w-full mt-4 rounded-full text-lg shadow-md hover:brightness-110 transition"
                >
                    Add Product
                </button>
            </motion.form>
        </div>


    );
};

export default AddProduct;
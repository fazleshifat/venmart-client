import axios from 'axios';
import React from 'react';
import { useNavigate, useNavigation } from 'react-router';
import Swal from 'sweetalert2';
import Spinner from '../components/Spinner';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { motion } from "framer-motion";
import { useEffect } from 'react';

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

        axios.post(`https://venmart-server.vercel.app/addProducts?email=${user?.email}`, productInfo, {
            headers: { Authorization: `Bearer ${user?.accessToken}` }
        })
            .then(res => {
                if (res.data.insertedId) {
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
        <div className="min-h-screen flex items-center justify-center flex-col p-4 py-10">
            <motion.form
                onSubmit={handleAddProduct}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="w-full max-w-4xl bg-white dark:bg-slate-900/60 p-8 md:p-10 rounded-2xl border border-gray-100 dark:border-indigo-500/15 space-y-8"
            >
                {/* Header */}
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-2">Create new listing</p>
                    <h1 className="text-2xl md:text-3xl section-heading text-gray-800 dark:text-white">
                        Add <span className="text-gradient">Product</span>
                    </h1>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-800 dark:text-gray-100">
                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product Image URL</label>
                        <input
                            type="text"
                            name="image"
                            placeholder="Image URL"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Title of the Product</label>
                        <input
                            type="text"
                            name="name"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Main Quantity</label>
                        <input
                            type="number"
                            name="mainQty"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Minimum Selling Quantity</label>
                        <input
                            type="number"
                            name="minQty"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Brand Name</label>
                        <input
                            type="text"
                            name="brand"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</label>
                        <select
                            name="category"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
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

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</label>
                        <input
                            type="number"
                            name="price"
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rating (1-5)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            required
                            onInput={(e) => {
                                const value = parseInt(e.target.value);
                                if (value > 5) e.target.value = 5;
                                if (value < 1) e.target.value = 1;
                            }}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner Name</label>
                        <input
                            type="text"
                            name="ownerName"
                            defaultValue={user?.displayName}
                            readOnly
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/50 text-sm text-gray-500 cursor-not-allowed"
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Owner Email</label>
                        <input
                            type="text"
                            name="ownerEmail"
                            defaultValue={user?.email}
                            readOnly
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-50 dark:bg-slate-800/50 text-sm text-gray-500 cursor-not-allowed"
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Short Description</label>
                        <textarea
                            name="description"
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm resize-none"
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary-gradient w-full rounded-xl text-sm font-medium"
                >
                    Add Product
                </button>
            </motion.form>
        </div>
    );
};

export default AddProduct;

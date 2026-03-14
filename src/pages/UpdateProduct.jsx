import axios from 'axios';
import React, { use, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router';
import Swal from 'sweetalert2';
import Spinner from '../components/Spinner';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';

const UpdateProduct = () => {

    const { id } = useParams();
    const { user } = use(AuthContext);
    const [product, setProduct] = useState({});
    const [load, setLoad] = useState(true);

    useEffect(() => {
        axios.get(`https://venmart-server.vercel.app/allProducts/${id}?email=${user?.email}`, {
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        })
            .then(res => {
                setLoad(false);
                setProduct(res.data);
            }
            )
            .catch()
    }, [id])

    const { _id, name, brand, category, description, image, mainQty, minQty, price, rating } = product;
    const navigate = useNavigate();

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedProduct = Object.fromEntries(formData.entries());
        updatedProduct.mainQty = parseInt(updatedProduct?.mainQty)
        updatedProduct.minQty = parseInt(updatedProduct?.minQty)

        axios.put(`https://venmart-server.vercel.app/allProducts/${_id}/${user?.email}`, updatedProduct,
            {
                headers: { Authorization: `Bearer ${user?.accessToken}` }
            })
            .then(response => {
                if (response.data.modifiedCount) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Product updated successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    navigate('/allProducts');
                }
            }
            )
            .catch();
    }

    useEffect(() => {
        document.getElementById("title").innerText = "Update Information"
        window.scroll(0, 0)
    }, [])

    if (load) {
        return <Spinner />;
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center px-4 py-10">
            <motion.form
                onSubmit={handleUpdateProduct}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="w-full max-w-4xl p-8 md:p-10 bg-white dark:bg-slate-900/60 rounded-2xl border border-gray-100 dark:border-indigo-500/15 space-y-8">

                {/* Header */}
                <div className="text-center">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-2">Edit listing</p>
                    <h2 className="text-2xl md:text-3xl section-heading text-gray-800 dark:text-white">
                        Update <span className="text-gradient">Product</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-gray-800 dark:text-gray-100">
                    <div className="md:col-span-2">
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product Image</label>
                        <input
                            type="text"
                            name="image"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                            defaultValue={image}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Product Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter product name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                            defaultValue={name}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Brand Name</label>
                        <input
                            type="text"
                            name="brand"
                            placeholder="Enter brand name"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                            defaultValue={brand}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Category</label>
                        <select
                            name="category"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                            defaultValue={category}
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
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Rating (1-5)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                            defaultValue={rating}
                            onInput={(e) => {
                                const value = parseInt(e.target.value);
                                if (value > 5) e.target.value = 5;
                                if (value < 1) e.target.value = 1;
                            }}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            step="0.01"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                            defaultValue={price}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Main Quantity</label>
                        <input
                            type="number"
                            name="mainQty"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                            defaultValue={mainQty}
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Minimum Selling Qty</label>
                        <input
                            type="number"
                            name="minQty"
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm"
                            defaultValue={minQty}
                        />
                    </div>

                    <div className="md:col-span-2">
                        <label className="block text-xs font-medium mb-1.5 text-gray-500 dark:text-gray-400 uppercase tracking-wider">Description</label>
                        <textarea
                            name="description"
                            rows={3}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm resize-none"
                            defaultValue={description}
                        ></textarea>
                    </div>
                </div>

                <button
                    type="submit"
                    className="btn btn-primary-gradient w-full rounded-xl text-sm font-medium"
                >
                    Update Product
                </button>
            </motion.form>
        </div>
    );
};

export default UpdateProduct;

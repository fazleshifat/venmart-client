import axios from 'axios';
import React, { use, useState } from 'react';
import { useLoaderData, useNavigate, useNavigation, useParams } from 'react-router';
import Swal from 'sweetalert2';
import Spinner from '../components/Spinner';
import { Fade } from 'react-awesome-reveal';
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


    // console.log(product)
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


        <div className="min-h-screen w-full  flex items-center justify-center px-4 py-10 transition-all duration-300">
            <motion.form
                onSubmit={handleUpdateProduct}
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
                }}
                className="w-full max-w-5xl p-10 bg-white dark:bg-zinc-900/80 shadow-xl shadow-indigo-500/5 rounded-3xl transition-all duration-300 border border-gray-100 dark:border-indigo-500/20 backdrop-blur-sm">
                <h2 className="text-2xl md:text-4xl font-light text-center mb-10 text-gray-800 dark:text-white">
                    Update <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Product</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 dark:text-gray-100">
                    {/* Product Image */}
                    <div className="md:col-span-2">
                        <label className="label font-semibold">Product Image</label>
                        <input
                            type="text"
                            name="image"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
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
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
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
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                            defaultValue={brand}
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="label font-semibold">Category</label>
                        <select
                            name="category"
                            className="select select-bordered w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
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

                    {/* Rating */}
                    <div>
                        <label className="label font-semibold">Rating (1-5)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="5"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                            defaultValue={rating}

                            onInput={(e) => {
                                const value = parseInt(e.target.value);
                                if (value > 5) e.target.value = 5;
                                if (value < 1) e.target.value = 1;
                            }}
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
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                            defaultValue={price}
                        />
                    </div>

                    {/* Main Quantity */}
                    <div>
                        <label className="label font-semibold">Main Quantity</label>
                        <input
                            type="number"
                            name="mainQty"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                            defaultValue={mainQty}
                        />
                    </div>

                    {/* Minimum Selling Quantity */}
                    <div>
                        <label className="label font-semibold">Minimum Selling Quantity</label>
                        <input
                            type="number"
                            name="minQty"
                            className="input input-bordered w-full bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                            defaultValue={minQty}
                        />
                    </div>

                    {/* Description (Full Width) */}
                    <div className="md:col-span-2">
                        <label className="label font-semibold">Description</label>
                        <textarea
                            name="description"
                            placeholder="Product details..."
                            className="textarea textarea-bordered w-full h-24 bg-white dark:bg-gray-900 border-gray-200 dark:border-indigo-500/20 rounded-xl"
                            defaultValue={description}
                        ></textarea>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="text-center pt-10">
                    <button
                        type="submit"
                        className="btn bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none px-10 py-2 text-lg rounded-full shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300"
                    >
                        Update Product
                    </button>
                </div>
            </motion.form>
        </div>


    );
};

export default UpdateProduct;
import axios from 'axios';
import React from 'react';
import Swal from 'sweetalert2';

const AddProduct = () => {

    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const productInfo = Object.fromEntries(formData.entries());
        // console.log(productInfo)

        // Send a POST request
        axios.post("http://localhost:3000/allProducts", productInfo)
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
            })
            .catch(err => console.error('Axios error:', err));
    }


    return (
        <div className="min-h-screen bg-gray-100 dark:bg-zinc-900 flex items-center justify-center flex-col p-3">
            <h1 className="text-3xl font-bold text-center text-zinc-800 dark:text-white mb-8">
                🛒 Add Product
            </h1>

            <form onSubmit={handleAddProduct} className="w-full max-w-4xl bg-white dark:bg-zinc-800 p-6 rounded-xl shadow space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Image */}
                    <div className="col-span-1">
                        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Upload Product Cover Image
                        </label>
                        <input type="text" name="image" placeholder='image url' className="w-full file-input file-input-bordered" />
                    </div>

                    {/* Name */}
                    <div className="col-span-1">
                        <label htmlFor="name" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Title of the Product
                        </label>
                        <input type="text" id="name" name="name" className="input input-bordered w-full" required />
                    </div>

                    {/* Main Quantity */}
                    <div>
                        <label htmlFor="mainQty" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Main Quantity
                        </label>
                        <input type="number" id="mainQty" name="mainQty" className="input input-bordered w-full" required />
                    </div>

                    {/* Minimum Selling Quantity */}
                    <div>
                        <label htmlFor="minQty" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Minimum Selling Quantity
                        </label>
                        <input type="number" id="minQty" name="minQty" className="input input-bordered w-full" required />
                    </div>

                    {/* Brand Name */}
                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Brand Name
                        </label>
                        <input type="text" id="brand" name="brand" className="input input-bordered w-full" />
                    </div>

                    {/* Category */}
                    <div>
                        <label htmlFor="category" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Category
                        </label>
                        <select id="category" name="category" className="select select-bordered w-full" required>
                            <option value="">Select Category</option>
                            <option>electrical</option>
                            <option>gadget</option>
                            <option>appliances</option>
                            <option>fashion</option>
                            <option>machinery</option>
                            {/* <option>Health & Beauty</option>
                                <option>Automotive Parts & Accessories</option>
                                <option>Office Supplies & Stationery</option> */}
                            <option>Others</option>
                        </select>
                    </div>

                    {/* Short Description */}
                    <div className="md:col-span-2">
                        <label htmlFor="description" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Short Description
                        </label>
                        <textarea id="description" name="description" className="textarea textarea-bordered w-full" rows={3}></textarea>
                    </div>

                    {/* Price */}
                    <div>
                        <label htmlFor="price" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Price
                        </label>
                        <input type="number" id="price" name="price" className="input input-bordered w-full" required />
                    </div>

                    {/* Rating */}
                    <div>
                        <label htmlFor="rating" className="block text-sm font-medium text-zinc-700 dark:text-zinc-200 mb-1">
                            Rating (1-5)
                        </label>
                        <input
                            type="number"
                            id="rating"
                            name="rating"
                            min="1"
                            max="5"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>
                </div>

                {/* Submit */}
                <button type="submit" className="btn btn-primary w-full mt-4">
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
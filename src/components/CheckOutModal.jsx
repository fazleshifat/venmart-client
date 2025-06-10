import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';

const CheckOutModal = ({ user, product }) => {
    const [quantity, setQuantity] = useState(1);
    const {
        name,
        brand,
        category,
        image,
        description,
        mainQty,
        minQty,
        price,
        rating
    } = product;

    const convertedMinQty = parseInt(minQty);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));

    const customerName = user?.displayName;
    const customerEmail = user?.email;
    const purchaseDate = new Date().toDateString()
    const purchaseTime = new Date().toLocaleTimeString();

    const handleSubmit = (e) => {

        const purchaseInfo = {
            customerName,
            customerEmail,
            name,
            brand,
            category,
            image,
            price,
            quantity,
            purchaseTime,
            purchaseDate,
        }

        e.preventDefault();
        if (quantity < convertedMinQty) {
            Swal.fire({
                toast: true,
                position: "top",
                icon: "error",
                title: "Minimum quantity not met!",
                text: "Please increase your quantity.",
                showConfirmButton: false,
                timer: 3000,
                background: "#fff",
                color: "#333",
                customClass: {
                    popup: 'z-[9999]'
                }
            });
        } else {

            // Send a POST request
            axios.post("http://localhost:3000/products/cart", purchaseInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        // sweet alert after create user
                        document.getElementById('my_modal_4').close();
                        setQuantity(1);
                        Swal.fire({
                            title: "Order Confirmed!",
                            text: `Your order has been confirmed as ${user?.displayName}!`,
                            icon: "success"
                        });
                    }
                })
                .catch(err => console.error('Axios error:', err));
        }

    };

    return (
        <div>
            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-full max-w-sm p-0 overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-xl">
                    <div className="relative p-4">
                        {/* Close Button */}
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-2 top-2 z-10">
                                ✕
                            </button>
                        </form>

                        {/* Header */}
                        <h2 className="text-center text-lg font-semibold bg-gradient-to-r from-yellow-400 to-amber-500 text-white py-2 rounded-md">
                            Checkout
                        </h2>

                        {/* Product Image */}
                        <div className="text-center mt-4">
                            <img
                                src={image}
                                alt={name}
                                className="mx-auto w-24 h-24 object-contain"
                            />
                            <h3 className="text-md font-bold text-zinc-800 dark:text-white mt-2">{name}</h3>
                        </div>

                        {/* Info Grid */}
                        <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm bg-base-300 p-2 text-zinc-700 dark:text-zinc-300">
                            <p><strong>Brand:</strong> {brand}</p>
                            <p><strong>Category:</strong> {category}</p>
                            <p><strong>Min Quantity:</strong> {minQty}</p>
                            <p><strong>Main Quantity:</strong> {mainQty}</p>
                            <p><strong>Price:</strong> ${price}</p>
                            <p><strong>Rating:</strong> {rating}/5</p>
                        </div>

                        {/* Quantity Controller */}
                        <div className="flex justify-center items-center gap-2 mt-4">
                            <label className="text-sm font-medium">Quantity:</label>
                            <button onClick={handleDecrease} type="button" className="btn btn-xs btn-outline">−</button>
                            <span className="w-6 text-center">{quantity}</span>
                            <button onClick={handleIncrease} type="button" className="btn btn-xs btn-outline">+</button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                            <div className="bg-gray-100 text-center dark:bg-zinc-800 p-3 rounded-md shadow-sm text-sm mb-4">
                                <h2 className="font-semibold bg-indigo-600 w-fit mx-auto p-2 rounded-full text-white dark:text-white">👤 Ordered By</h2>
                                <div className='flex justify-center gap-3'>
                                    <p className="text-zinc-700 dark:text-zinc-300"><span className='font-semibold'>Name:</span><span className='font-bold'>{user?.displayName}</span></p>
                                    <p className="text-zinc-700 dark:text-zinc-300"><span className='font-semibold'>Email:</span><span className='font-bold'>{user?.email}</span></p>
                                </div>

                            </div>
                            <button type="submit" className="btn btn-sm btn-primary w-full">Confirm Purchase</button>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* {document.getElementById('my_modal_4').close()} */}
        </div>
    );
};

export default CheckOutModal;
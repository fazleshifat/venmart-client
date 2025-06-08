import React, { useState } from 'react';
import Swal from 'sweetalert2';

const BuyModal = ({ user, product, onClose }) => {
    const [quantity, setQuantity] = useState(1);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));
    const { name, brand, category, image, description, mainQty, minQty, price, rating } = product;
    const convertedMinQty = parseInt(minQty);
    // console.log(typeof convertedMinQty)

    const handleSubmit = (e) => {
        e.preventDefault();
        // post to server here...
        onClose();

        if (quantity < convertedMinQty) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Your purchasing Quantity must have to equal or more then Minimum Quantity!",
                // footer: '<a href="#">Why do I have this issue?</a>'
            });
        }
        else {
            Swal.fire({
                title: "Success!",
                text: "Your Order Has Been Confirmed!",
                icon: "success"
            });
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center px-4">

            <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-xl w-full max-w-md p-6 relative">
                <h1 className='text-center font-bold bg-yellow-400 w-fit mx-auto px-6 py-2 rounded-3xl'>Checkout</h1>
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 btn btn-sm btn-circle"
                >
                    ✖
                </button>

                {/* Product Image and Heading */}
                <div className="text-center">
                    <img
                        src={image}
                        alt={name}
                        className="mx-auto w-48 py-3 object-contain"
                    />
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-white mt-3">
                        {name}
                    </h3>
                </div>

                {/* Order Summary */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-sm text-zinc-700 dark:text-zinc-200">
                    <p><strong>👤 Name:</strong> <span className="font-bold">{name}</span></p>
                    <p><strong>🏷️ Brand:</strong> <span className="font-bold">{brand}</span></p>
                    <p><strong>📦 Minimum Selling Quantity:</strong> <span className="font-bold">{minQty}</span></p>
                    <p><strong>📊 Main Quantity:</strong> <span className="font-bold">{mainQty}</span></p>
                    <p><strong>🗂️ Category:</strong> <span className="font-bold">{category}</span></p>
                    <p><strong>⭐ Rating:</strong> <span className="font-bold">{rating}/5</span></p>
                    <p><strong>💰 Price:</strong> <span className="font-bold">${price}</span></p>
                </div>


                {/* Quantity Control */}
                <div className="flex items-center justify-center gap-3 mt-4">
                    <label className="font-medium">Quantity:</label>
                    <div className="flex items-center gap-2">
                        <button type="button" onClick={handleDecrease} className="btn btn-sm btn-outline">−</button>
                        <span className="w-8 text-center font-bold">{quantity}</span>
                        <button type="button" onClick={handleIncrease} className="btn btn-sm btn-outline">+</button>
                    </div>
                </div>

                {/* Readonly Fields & Submit */}
                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                    <input
                        type="text"
                        value={user?.displayName}
                        readOnly
                        className="input input-bordered w-full"
                    />
                    <input
                        type="email"
                        value={user?.email}
                        readOnly
                        className="input input-bordered w-full"
                    />
                    <button type="submit" className="btn btn-primary w-full">Confirm Purchase</button>
                </form>
            </div>
        </div>
    );
};

export default BuyModal;
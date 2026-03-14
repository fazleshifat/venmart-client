import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../AuthProvider/AuthContext';

const CheckOutModal = ({ user, product }) => {

    const { errorMessage, setErrorMessage } = use(AuthContext);

    const {
        _id,
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

    const [quantity, setQuantity] = useState(1);
    const convertedMinQty = parseInt(minQty);

    const handleIncrease = () => setQuantity(prev => prev + 1);
    const handleDecrease = () => setQuantity(prev => Math.max(1, prev - 1));

    const customerName = user?.displayName;
    const customerEmail = user?.email;
    const purchaseDate = new Date().toDateString()
    const purchaseTime = new Date().toLocaleTimeString();

    const Navigate = useNavigate();

    const handleSubmit = (e) => {

        const purchaseInfo = {
            id: product._id,
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
            setErrorMessage('Minimum quantity not met, Please increase your quantity')
        } else {
            setErrorMessage('')

            axios.post(`https://venmart-server.vercel.app/products/cart?email=${user?.email}`, purchaseInfo,
                {
                    headers: { Authorization: `Bearer ${user?.accessToken}` }
                }
            )
                .then(res => {
                    if (res.data.insertedId) {

                        axios.patch(`https://venmart-server.vercel.app/cart/${purchaseInfo.id}/${user?.email}`, { quantity },
                            {
                                headers: { Authorization: `Bearer ${user?.accessToken}` }
                            }
                        )
                            .then()
                            .catch()

                        document.getElementById('my_modal_4').close();
                        setQuantity(1);
                        Swal.fire({
                            title: "Order Confirmed!",
                            text: `Your order has been confirmed as ${user?.displayName}!`,
                            icon: "success",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        Navigate('/cart');
                    }
                })
                .catch();
        }

    };

    return (
        <div>
            <dialog id="my_modal_4" className="modal p-3 min-h-fit">
                <div className="modal-box w-11/12 min-h-fit max-w-sm p-0 overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-indigo-500/15 shadow-2xl">
                    <div className="relative p-5">
                        {/* Close Button */}
                        <form method="dialog">
                            <button className="absolute right-3 top-3 w-7 h-7 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-white text-xs transition-colors z-10">
                                &times;
                            </button>
                        </form>

                        {/* Header */}
                        <div className="text-center mb-4">
                            <h2 className="text-lg font-bold text-gradient">Checkout</h2>
                        </div>

                        {/* Product Image */}
                        <div className="text-center mb-4">
                            <img
                                src={image}
                                alt={name}
                                className="mx-auto h-20 rounded-xl object-cover"
                            />
                            <h3 className="text-sm font-semibold text-gray-800 dark:text-white mt-2">{name}</h3>
                        </div>

                        {/* Info Grid */}
                        <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl text-gray-600 dark:text-gray-300 mb-4">
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Brand:</span> {brand}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Category:</span> {category}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Min Qty:</span> {minQty}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Stock:</span> {mainQty}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Price:</span> ${price}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Rating:</span> {rating}/5</p>
                        </div>

                        {/* Quantity Controller */}
                        <div className="flex justify-center items-center gap-3 mb-4">
                            <label className="text-xs font-medium text-gray-600 dark:text-gray-300">Quantity:</label>
                            <div className="flex items-center gap-1.5 bg-gray-100 dark:bg-slate-800 rounded-lg p-1">
                                <button onClick={() => (handleDecrease(), setErrorMessage(''))} type="button" className="w-7 h-7 rounded-md bg-white dark:bg-slate-700 text-gray-700 dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors flex items-center justify-center">-</button>
                                <span className="w-8 text-center text-sm font-semibold">{quantity}</span>
                                <button onClick={() => (handleIncrease(), setErrorMessage(''))} type="button" className="w-7 h-7 rounded-md bg-white dark:bg-slate-700 text-gray-700 dark:text-white text-sm font-medium hover:bg-gray-50 dark:hover:bg-slate-600 transition-colors flex items-center justify-center">+</button>
                            </div>
                        </div>

                        {/* Ordered By */}
                        <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl text-center mb-4">
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Ordered By</p>
                            <p className="text-sm font-semibold text-gray-800 dark:text-white">{user?.displayName}</p>
                            <p className="text-xs text-gray-500">{user?.email}</p>
                        </div>

                        {/* Submit */}
                        <form onSubmit={handleSubmit}>
                            <button type="submit" className="btn btn-primary-gradient w-full rounded-xl text-sm font-medium">
                                Confirm Purchase
                            </button>
                            {errorMessage && (
                                <p className='text-xs text-red-500 text-center mt-2'>{errorMessage}</p>
                            )}
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CheckOutModal;

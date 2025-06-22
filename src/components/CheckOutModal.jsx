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

    // const quantityInput = document.getElementById('buyingQuantity').value;
    // console.log(quantityInput)

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
            // document.getElementById('my_modal_4').close();
            setErrorMessage('Minimum quantity not met, Please increase your quantity')
        } else {
            setErrorMessage('')

            // Send a POST request
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

                        // sweet alert after create user
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
                <div className="modal-box w-11/12 min-h-fit max-w-sm p-0 overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-xl">
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
                        <div className="text-center rounded-2xl md:mt-4">
                            <img
                                src={image}
                                alt={name}
                                className="mx-auto h-24 rounded-2xl"
                            />
                            <h3 className="text-md font-bold text-zinc-800 dark:text-white md:mt-2">{name}</h3>
                        </div>

                        {/* Info Grid */}
                        <div className="md:mt-4 grid grid-cols-2 gap-2 text-sm bg-base-300 p-2 text-zinc-700 dark:text-zinc-300">
                            <p><strong>Brand:</strong> {brand}</p>
                            <p><strong>Category:</strong> {category}</p>
                            <p><strong>Min Quantity:</strong> {minQty}</p>
                            <p><strong>Main Quantity:</strong> {mainQty}</p>
                            <p><strong>Price:</strong> ${price}</p>
                            <p><strong>Rating:</strong> {rating}/5</p>
                        </div>

                        {/* Quantity Controller */}
                        <div className="flex justify-center items-center gap-2 mt-2 md:mt-4">
                            <label className="text-sm font-medium">Quantity:</label>
                            <button onClick={() => (handleDecrease(), setErrorMessage(''))} type="button" className="btn btn-xs btn-outline">−</button>
                            {/* <input
                                type="number"
                                className='w-auto outline-1 text-center'
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            /> */}
                            <span className="w-6 text-center">{quantity}</span>
                            <button onClick={() => (handleIncrease(), setErrorMessage(''))} type="button" className="btn btn-xs btn-outline">+</button>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="mt-2 md:mt-4 space-y-3">
                            <div className="bg-gray-100 text-center dark:bg-zinc-800 p-3 rounded-md shadow-sm text-sm mb-4">
                                <h2 className="font-semibold bg-indigo-400 w-fit mx-auto py-2 px-3 rounded-full text-white dark:text-white">Ordered By</h2>
                                <div className=''>
                                    <p className="text-zinc-700 dark:text-zinc-300"><span className='font-semibold'>Name:</span><span className='font-bold'>{user?.displayName}</span></p>
                                    <p className="text-zinc-700 dark:text-zinc-300"><span className='font-semibold'>Email:</span><span className='font-bold'>{user?.email}</span></p>
                                </div>

                            </div>
                            <button type="submit" className="btn btn-sm btn-primary w-full">Confirm Purchase</button>
                            <p className='text-sm text-red-500'>{errorMessage}</p>
                        </form>
                    </div>
                </div>
            </dialog>
            {/* {document.getElementById('my_modal_4').close()} */}
        </div>
    );
};

export default CheckOutModal;
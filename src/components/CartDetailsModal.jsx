import React from 'react';

const CartDetailsModal = ({ item }) => {
    if (!item) return null;

    const { image,
        name,
        brand,
        category,
        quantity,
        price,
        purchaseDate,
        purchaseTime,
        customerName,
        customerEmail
    } = item;

    

    return (
        <div>
            <dialog id="purchase_modal" className="modal p-3 min-h-fit">
                <div className="modal-box w-11/12 min-h-fit max-w-md p-0 overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-xl">
                    <div className="relative p-4">
                        <form method="dialog">
                            <button className="btn btn-sm btn-circle absolute right-2 top-2 z-10">✕</button>
                        </form>

                        <h2 className="text-center text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-md">
                            Purchase Details
                        </h2>

                        <div className="text-center md:mt-4">
                            <img src={image} alt={name} className="mx-auto w-24 h-24 rounded-2xl object-contain" />
                            <h3 className="text-md font-bold text-zinc-800 dark:text-white md:mt-2">{name}</h3>
                        </div>

                        <div className="md:mt-4 grid grid-cols-2 gap-2 text-sm bg-base-300 p-2 text-zinc-700 dark:text-zinc-300">
                            <p><strong>Brand:</strong> {brand}</p>
                            <p><strong>Category:</strong> {category}</p>
                            <p><strong>Quantity:</strong> {quantity}</p>
                            <p><strong>Price:</strong> ${price}</p>
                            <p><strong>Purchase Date:</strong> {purchaseDate}</p>
                            <p><strong>Purchase Time:</strong> {purchaseTime}</p>

                        </div>

                        <div className="bg-gray-100 text-center dark:bg-zinc-800 p-3 md:mt-4 rounded-md shadow-sm text-sm">
                            <p className="text-zinc-700 font-semibold dark:text-zinc-300">Customer Name: {customerName}</p>
                            <p className="text-zinc-700 font-semibold dark:text-zinc-300">Customer Email: {customerEmail}</p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CartDetailsModal;
import React from 'react';

const CartDetailsModal = ({ item }) => {
    if (!item) return null;

    const { image, name, brand, category, quantity, price, purchaseDate, purchaseTime, customerName, customerEmail } = item;

    return (
        <div>
            <dialog id="purchase_modal" className="modal p-3 min-h-fit">
                <div className="modal-box w-11/12 min-h-fit max-w-md p-0 overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-gray-100 dark:border-indigo-500/15 shadow-2xl">
                    <div className="relative p-5">
                        <form method="dialog">
                            <button className="absolute right-3 top-3 w-7 h-7 rounded-lg bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-500 hover:text-gray-700 dark:hover:text-white text-xs transition-colors z-10">
                                &times;
                            </button>
                        </form>

                        <div className="text-center mb-4">
                            <h2 className="text-lg font-bold text-gradient">Purchase Details</h2>
                        </div>

                        <div className="text-center mb-4">
                            <img src={image} alt={name} className="mx-auto w-20 h-20 rounded-xl object-contain" />
                            <h3 className="text-sm font-semibold text-gray-800 dark:text-white mt-2">{name}</h3>
                        </div>

                        <div className="grid grid-cols-2 gap-2 text-xs bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl text-gray-600 dark:text-gray-300 mb-4">
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Brand:</span> {brand}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Category:</span> {category}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Quantity:</span> {quantity}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Price:</span> ${price}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Date:</span> {purchaseDate}</p>
                            <p><span className="font-medium text-gray-800 dark:text-gray-200">Time:</span> {purchaseTime}</p>
                        </div>

                        <div className="bg-gray-50 dark:bg-slate-800/50 p-3 rounded-xl text-center">
                            <p className="text-[10px] uppercase tracking-wider text-gray-400 mb-1">Customer</p>
                            <p className="text-sm font-semibold text-gray-800 dark:text-white">{customerName}</p>
                            <p className="text-xs text-gray-500">{customerEmail}</p>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default CartDetailsModal;

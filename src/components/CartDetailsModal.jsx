import React from 'react';

const CartDetailsModal = () => {
    return (
        <dialog id="purchase_modal" className="modal">
            <div className="modal-box w-full max-w-md p-0 overflow-hidden rounded-xl bg-white dark:bg-zinc-900 shadow-xl">
                <div className="relative p-4">
                    {/* Close Button */}
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle absolute right-2 top-2 z-10">✕</button>
                    </form>

                    {/* Header */}
                    <h2 className="text-center text-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white py-2 rounded-md">
                        Purchase Details
                    </h2>

                    {/* Product Image */}
                    <div className="text-center mt-4">
                        <img
                            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQEBM…"
                            alt="Blender"
                            className="mx-auto w-24 h-24 object-contain"
                        />
                        <h3 className="text-md font-bold text-zinc-800 dark:text-white mt-2">Blender</h3>
                    </div>

                    {/* Info Grid */}
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-2 text-sm bg-base-300 p-2 text-zinc-700 dark:text-zinc-300">
                        <p><strong>Brand:</strong> CAT</p>
                        <p><strong>Category:</strong> Appliances</p>
                        <p><strong>Quantity:</strong> 6</p>
                        <p><strong>Price:</strong> $343</p>
                        <p><strong>Date:</strong> Wed Jun 11 2025</p>
                        <p><strong>Time:</strong> 9:12:28 PM</p>
                    </div>

                    {/* Customer Info */}
                    <div className="bg-gray-100 text-center dark:bg-zinc-800 p-3 mt-4 rounded-md shadow-sm text-sm">
                        <h2 className="font-semibold bg-indigo-600 w-fit mx-auto p-2 rounded-full text-white">👤 Customer Info</h2>
                        <div className="flex flex-col sm:flex-row justify-center gap-3 mt-2">
                            <p className="text-zinc-700 dark:text-zinc-300"><span className="font-semibold">Name:</span> <span className="font-bold">Lincoln D'Costa</span></p>
                            <p className="text-zinc-700 dark:text-zinc-300"><span className="font-semibold">Email:</span> <span className="font-bold">lincoln@gmail.com</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </dialog>
    );
};

export default CartDetailsModal;
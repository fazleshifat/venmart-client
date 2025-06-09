import React, { use, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../AuthProvider/PrivateRoute';
import BuyModal from '../components/BuyModal';
import CheckOutModal from '../components/CheckOutModal';

const ProductDetails = () => {

    const product = useLoaderData();
    const { user } = use(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const handleBuyNow = () => {
        setShowModal(true);
    };

    return (
        <section className="max-w-5xl mx-auto px-4 py-10">
            <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg overflow-hidden p-6">
                <img src={product.image} alt={product.name} className="w-full h-72 object-cover rounded-md mb-4" />
                <h2 className="text-3xl font-bold text-zinc-800 dark:text-white mb-2">🛍️ {product.name}</h2>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Brand:</strong> {product.brand}</p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Category:</strong> {product.category}</p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Available Quantity:</strong> {product.mainQty}</p>
                <p className="text-zinc-600 dark:text-zinc-400 mb-2"><strong>Description:</strong> {product.description}</p>
                <p className="text-lg font-semibold text-green-600 dark:text-green-400 mt-4">💲{product.price}</p>
                {/* <button onClick={handleBuyNow} className="mt-6 btn btn-primary">
                    🛒 Buy Now
                </button> */}
                <button className="btn btn-warning w-full my-5" onClick={() => document.getElementById('my_modal_4').showModal()}>
                    Buy
                </button>
            </div>

            {/* {showModal && <BuyModal user={user} product={product} onClose={() => setShowModal(false)} />} */}

            {/* You can open the modal using document.getElementById('ID').showModal() method */}
            <CheckOutModal user={user} product={product}></CheckOutModal>
        </section>
    );
};

export default ProductDetails;
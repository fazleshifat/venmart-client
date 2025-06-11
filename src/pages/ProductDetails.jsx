import React, { use, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import BuyModal from '../components/BuyModal';
import CheckOutModal from '../components/CheckOutModal';
import PopularProduct from '../components/PopularProduct';
import ProductReview from '../components/ProductReview';
import Spinner from '../components/Spinner';

const ProductDetails = () => {
    window.scroll(0, 0)

    const product = useLoaderData();
    const { user } = use(AuthContext);
    const [showModal, setShowModal] = useState(false);

    const handleBuyNow = () => {
        setShowModal(true);
    };

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }


    return (
        <section className="min-h-screen max-w-[1390px] mx-auto flex flex-col lg:flex-row justify-between px-4 py-10">
            {/* Left Section: Product Card */}

            <div className="w-full lg:w-6/10 mx-auto  p-8 mb-10 lg:mb-0 ">
                <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10">
                    🛍️ Product Details
                </h1>

                <div className='bg-white dark:bg-zinc-900 rounded-2xl shadow-xl  p-8 mb-10 lg:mb-0'>
                    <div className="relative mb-6">
                        {/* Product Image */}
                        <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-72 object-cover rounded-lg shadow-xl"
                        />
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-bold text-sm py-1 px-3 rounded-full shadow-lg">
                            🛍️ {product.name}
                        </div>
                    </div>

                    {/* Product Details */}
                    <div className="space-y-4 grid grid-cols-2">
                        <p className="text-xl font-semibold text-zinc-800 dark:text-white">
                            <strong>Brand:</strong> {product.brand}
                        </p>
                        <p className="text-xl font-semibold text-zinc-800 dark:text-white">
                            <strong>Category:</strong> {product.category}
                        </p>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            <strong>Description:</strong> {product.description}
                        </p>
                        <p className="text-lg text-green-600 dark:text-green-400 font-semibold">
                            <strong>Available Quantity:</strong> {product.mainQty}
                        </p>
                        <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                            💲{product.price}
                        </p>
                    </div>

                    {/* Buy Now Button */}
                    <div className="mt-6 flex justify-between items-center">
                        <button
                            onClick={() => document.getElementById('my_modal_4').showModal()}
                            className="btn btn-warning w-full py-3 rounded-lg text-white text-xl font-semibold transition-all duration-300 transform hover:bg-indigo-600 hover:scale-105 shadow-md"
                        >
                            🛒 Buy Now
                        </button>
                    </div>
                    {/* Product Reviews Section */}
                    <CheckOutModal user={user} product={product}></CheckOutModal>
                </div>
                <div className='bg-base-300 my-3 p-3 rounded-3xl'>
                    <ProductReview></ProductReview>
                </div>
            </div>


            {/* Right Section: Similar Products */}
            <div className="w-full h-fit lg:w-3/10 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 space-y-6">

                <PopularProduct></PopularProduct>

            </div>
        </section>


    );
};

export default ProductDetails;
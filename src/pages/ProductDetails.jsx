import React, { use, useState } from 'react';
import { Link, useLoaderData, useNavigation, useParams } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import CheckOutModal from '../components/CheckOutModal';
import PopularProduct from '../components/PopularProduct';
import ProductReview from '../components/ProductReview';
import Spinner from '../components/Spinner';
import { Fade } from 'react-awesome-reveal';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import axios from 'axios';

const ProductDetails = () => {
    const { id } = useParams();
    const { user } = use(AuthContext);
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);

    const navigation = useNavigation();
    useEffect(() => {
        document.getElementById('title').innerText = 'Product Details';
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0); // ✅ Proper scroll method


        axios.get(`https://venmart-server.vercel.app/allProducts/${id}?email=${user?.email}`, {
            headers: {
                Authorization: `Bearer ${user?.accessToken}`,
            },
        })
            .then((res) => {
                setProduct(res.data);
                setLoading(false);
            })
            .catch((err) => {

                setLoading(false);
            });
    }, [id, user?.accessToken]);


    if (navigation.state === 'loading' || loading || !product) {
        return <Spinner />;
    }


    return (

        <Fade cascade damping={0.5}>

            <motion.section
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
                }}
                className="max-w-[1390px] mx-auto p-3 flex flex-col my-5 lg:flex-row justify-between">
                {/* Left Section: Product Card */}

                <div className="w-full lg:w-6/10">
                    <h1 className="md:text-4xl font-extrabold text-center text-[#20b2aa] dark:text-[#7fffd4] mb-5">
                        🛍️Product Details
                    </h1>

                    <div className="overflow-x-hidden">
                        <div className="bg-white dark:bg-zinc-900 border-2 border-indigo-400 hover:border-indigo-300 rounded-3xl shadow-xl p-6 sm:p-8 mb-10 max-w-5xl mx-auto flex flex-col lg:flex-row gap-8">

                            {/* LEFT: Product Image */}
                            <div className="flex-shrink-0">
                                <img
                                    src={product?.image}
                                    alt="product"
                                    className="h-40 w-40 md:w-96 md:h-70 mx-auto object-cover rounded-2xl shadow-md"
                                />
                            </div>

                            {/* RIGHT: Product Info */}
                            <div className="flex flex-col justify-between flex-grow">
                                <div className="space-y-4 text-zinc-800 dark:text-zinc-200">
                                    <h2 className="md:text-3xl font-bold text-indigo-600 dark:text-indigo-400">{product?.name}</h2>

                                    <div className="grid grid-cols-2 gap-4">
                                        <p className="md:text-lg font-semibold">
                                            <span className="text-indigo-500">Brand:</span> {product?.brand}
                                        </p>
                                        <p className="md:text-lg font-semibold">
                                            <span className="text-indigo-500">Category:</span> {product?.category}
                                        </p>
                                        <p className="md:text-lg font-semibold">
                                            <span className="text-indigo-500">Owner:</span> {product?.ownerName}
                                        </p>
                                        <p className="text-sm md:text-lg font-semibold">
                                            <span className="text-green-600 dark:text-green-400">Available Quantity:</span>{product?.mainQty}
                                        </p>
                                        <p className="text-sm md:text-lg font-semibold">
                                            <span className="text-yellow-500">Min Order Quantity:</span>{product?.minQty}
                                        </p>
                                        <p className="text-sm md:text-lg font-semibold">
                                            <span className="text-indigo-500">Rating:</span> ⭐ {product?.rating}/5
                                        </p>
                                        <p className="text-sm md:text-lg font-semibold">
                                            <span className="text-indigo-500">Price:</span> 💲{product?.price}
                                        </p>
                                    </div>

                                    <p className="text-sm md:text-md text-zinc-600 dark:text-zinc-400 mt-2">
                                        <span className="font-semibold text-indigo-500">Description:</span> {product?.description}
                                    </p>
                                </div>

                                {/* Buy Button */}
                                <div className="mt-6">
                                    <button
                                        onClick={() => document.getElementById('my_modal_4').showModal()}
                                        className="cursor-pointer w-full py-1 md:py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-md md:text-lg font-semibold shadow-md hover:shadow-xl transform transition hover:scale-105 duration-300"
                                    >
                                        🛒Buy Now
                                    </button>
                                </div>

                                {/* Optional Modal */}
                                <CheckOutModal user={user} product={product} />
                            </div>
                        </div>
                    </div>

                    <div className='bg-base-300 my-3 p-3 rounded-3xl'>
                        <ProductReview></ProductReview>
                    </div>
                </div>


                {/* Right Section: Similar Products */}
                <div className="w-full h-fit lg:w-3/10 bg-white dark:bg-zinc-900 rounded-2xl shadow-xl p-6 space-y-6">

                    <PopularProduct></PopularProduct>

                </div>
            </motion.section>
        </Fade>



    );
};

export default ProductDetails;
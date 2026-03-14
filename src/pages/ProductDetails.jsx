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
        window.scrollTo(0, 0);

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
        <Fade cascade damping={0.3}>
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="max-w-[1390px] mx-auto p-4 md:p-6 flex flex-col my-5 lg:flex-row gap-6">

                {/* Left Section: Product Card */}
                <div className="w-full lg:w-7/10 space-y-6">
                    {/* Header */}
                    <div className="text-center lg:text-left">
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-2">Product overview</p>
                        <h1 className="text-2xl md:text-3xl section-heading text-gray-800 dark:text-white">
                            Product <span className="text-gradient">Details</span>
                        </h1>
                    </div>

                    {/* Product Card */}
                    <div className="bg-white dark:bg-slate-900/60 border border-gray-100 dark:border-indigo-500/15 rounded-2xl p-6 md:p-8 flex flex-col lg:flex-row gap-8">
                        {/* Image */}
                        <div className="flex-shrink-0">
                            <img
                                src={product?.image}
                                alt="product"
                                className="w-full lg:w-80 h-48 lg:h-64 object-cover rounded-xl"
                            />
                        </div>

                        {/* Info */}
                        <div className="flex flex-col justify-between flex-grow">
                            <div className="space-y-4">
                                <h2 className="text-xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-400">{product?.name}</h2>

                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { label: "Brand", value: product?.brand, color: "text-indigo-500" },
                                        { label: "Category", value: product?.category, color: "text-indigo-500" },
                                        { label: "Owner", value: product?.ownerName, color: "text-indigo-500" },
                                        { label: "Available", value: product?.mainQty, color: "text-green-600 dark:text-green-400" },
                                        { label: "Min Order", value: product?.minQty, color: "text-amber-500" },
                                        { label: "Rating", value: `${product?.rating}/5`, color: "text-indigo-500" },
                                    ].map((item, i) => (
                                        <div key={i} className="text-sm">
                                            <span className={`${item.color} font-medium`}>{item.label}: </span>
                                            <span className="text-gray-700 dark:text-gray-300 font-semibold">{item.value}</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="text-2xl font-bold text-gray-800 dark:text-white pt-2">
                                    ${product?.price}
                                </p>

                                <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                    {product?.description}
                                </p>
                            </div>

                            {/* Buy Button */}
                            <div className="mt-6">
                                <button
                                    onClick={() => document.getElementById('my_modal_4').showModal()}
                                    className="cursor-pointer w-full py-3 rounded-xl btn-primary-gradient text-white text-base font-semibold transition-all duration-300"
                                >
                                    Buy Now
                                </button>
                            </div>

                            <CheckOutModal user={user} product={product} />
                        </div>
                    </div>

                    {/* Reviews */}
                    <div className='bg-white dark:bg-slate-900/60 border border-gray-100 dark:border-indigo-500/15 p-6 rounded-2xl'>
                        <ProductReview></ProductReview>
                    </div>
                </div>

                {/* Right Section: Popular Products */}
                <div className="w-full lg:w-3/10 h-fit bg-white dark:bg-slate-900/60 rounded-2xl border border-gray-100 dark:border-indigo-500/15 p-6 space-y-6 sticky top-24">
                    <PopularProduct></PopularProduct>
                </div>
            </motion.section>
        </Fade>
    );
};

export default ProductDetails;

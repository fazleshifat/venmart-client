import React, { useState } from 'react';
import { Link, useNavigation, useParams } from 'react-router';
import Spinner from '../components/Spinner';
import { Fade } from 'react-awesome-reveal';
import { motion } from "framer-motion";
import { useEffect } from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import axios from 'axios';
import DisplayCategory from '../components/DisplayCategory';

const ProductByCategory = () => {
    const { category } = useParams();
    const { user } = use(AuthContext);
    const [products, setProducts] = useState([]);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        if (!user?.email || !category) return;

        axios.get(`https://venmart-server.vercel.app/products/${category}/${user.email}`, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                setProducts(res.data);
            })
            .catch()
            .finally(() => setLoad(false));
    }, [category, user]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("title").innerText = "Product by category";
    }, []);

    const title = category?.charAt(0).toUpperCase() + category?.slice(1);

    if (load) return <Spinner />;

    return (
        <Fade cascade damping={0.3}>
            <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.6,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="max-w-[1350px] mx-auto px-4 py-10">

                {/* Page Heading */}
                <div className="text-center mb-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-3">Category</p>
                    <h1 className="text-3xl md:text-4xl section-heading text-gray-800 dark:text-white">
                        Products of <span className='text-gradient'>{title}</span>
                    </h1>
                </div>

                {/* Product Cards */}
                {
                    products.length > 0 ?
                        (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {products.map((product, index) => <DisplayCategory key={index} product={product}></DisplayCategory>)}
                            </div>
                        ) :
                        (
                            <div className="text-center py-16">
                                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                                </div>
                                <p className="text-gray-500 dark:text-gray-400 font-medium">No products in this category</p>
                                <p className="text-sm text-gray-400 dark:text-gray-500 mt-1">Check back later for new listings</p>
                            </div>
                        )
                }
            </motion.section>
        </Fade>
    );
};

export default ProductByCategory;

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

        axios.get(`https://venmart-server.vercel.app/products/${category}?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                setProducts(res.data);
            })
            .catch(err => {
                console.error("Failed to fetch products:", err);
            })
            .finally(() => setLoad(false));
    }, [category, user]);

    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("title").innerText = "Product by category";
    }, []);

    const title = category?.charAt(0).toUpperCase() + category?.slice(1);

    if (load) return <Spinner />;


    return (

        <Fade cascade damping={0.5}>

            <motion.section
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
                }}
                className="max-w-[1350px] mx-auto px-4 py-16">
                {/* Page Heading */}
                <div className="text-center mb-12">
                    <h1 className="md:text-5xl text-[#20b2aa] dark:text-[#7fffd4] mb-4">
                        🛒Products of <span className='text-gray-500'>{title}</span> Category
                    </h1>
                    {/* <p className="text-zinc-600 dark:text-zinc-300 text-base text-sm md:text-lg">
                        Discover top-quality tools, parts, and equipment with trusted industrial-grade assurance.
                    </p> */}
                </div>

                {/* Product Cards */}
                {
                    products.length > 0 ?
                        (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                                {products.map((product, index) => <DisplayCategory key={index} product={product}></DisplayCategory>)}
                            </div>
                        ) :
                        (
                            <div className="mx-auto text-center">
                                <p>🚫no product added for this category</p>
                            </div>
                        )
                }
            </motion.section>
        </Fade>


    );
};

export default ProductByCategory;
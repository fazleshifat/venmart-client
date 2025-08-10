import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import TableView from './TableView';
import CardView from './CardView';
import { Fade } from 'react-awesome-reveal';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { motion } from "framer-motion";
import axios from 'axios';

const AllProducts = () => {


    const [showAvailableOnly, setShowAvailableOnly] = useState(false);
    const [load, setLoad] = useState(true);

    const { user, searchQuery, setSearchQuery } = use(AuthContext);


    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`https://venmart-server.vercel.app/allProducts?email=${user?.email}`, {
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        })
            .then(res => {
                setLoad(false);
                setProducts(res.data);
            }
            )
            .catch()
    }, [user])

    const [view, setView] = useState(() => {
        return localStorage.getItem('view') || 'list';
    });



    useEffect(() => {

        window.scroll(0, 0)
        localStorage.setItem('view', view);
        document.getElementById("title").innerText = "All Products"
    }, [view]);


    const filteredProducts = products.filter(product => product.name.trim().toLowerCase().replace(/\s+/g, '').includes(searchQuery.trim().toLowerCase().replace(/\s+/g, '')));
    const filteredAvailableProducts = products.filter(product => parseInt(product.minQty) > 100);

    const handleShowAvailable = () => {
        setShowAvailableOnly(!showAvailableOnly);
    };


    if (load) {
        return <Spinner />;
    }


    return (



        <motion.section
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
            }}
            className="min-h-screen overflow-x-hidden dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-4 py-7">
            <h1 className="text-3xl md:text-4xl text-[#20b2aa] dark:text-[#7fffd4] text-center">
                All Products🛍️
            </h1>

            <div className="overflow-x-hidden gap-3 my-10 max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between">
                {/* toggle view type function */}
                <select
                    name="viewProduct"
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="p-2 px-4 border-2 border-gray-400 dark:bg-black text-black dark:text-white rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                >
                    <option value="Card">Card View</option>
                    <option value="Table">Table View</option>
                </select>

                <p className='text-black dark:text-white bg-black/10 h-fit rounded-3xl px-5 py-2 text-center'>
                    Products which have minimum ordering quantity of <span className='text-gray-600 font-bold'>100</span> are only <span className='text-gray-600 font-bold'>Available</span>
                </p>

                {/* toggle sorting function */}
                <div className="flex items-center gap-3">
                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="filter"
                            value="all"
                            checked={!showAvailableOnly}
                            onChange={() => setShowAvailableOnly(false)}
                            className="radio radio-primary"
                        />
                        <span>All Products</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                        <input
                            type="radio"
                            name="filter"
                            value="available"
                            checked={showAvailableOnly}
                            onChange={() => setShowAvailableOnly(true)}
                            className="radio radio-primary"
                        />
                        <span>Available Only</span>
                    </label>
                </div>
            </div>

            {
                view === 'Card' ? (
                    <CardView
                        products={products}
                        filteredProducts={filteredProducts}
                        filteredAvailableProducts={filteredAvailableProducts}
                        showAvailableOnly={showAvailableOnly}
                    />
                ) : (
                    <TableView
                        load
                        products={products}
                        filteredProducts={filteredProducts}
                        filteredAvailableProducts={filteredAvailableProducts}
                        showAvailableOnly={showAvailableOnly}
                    />
                )
            }
        </motion.section>



    );
};

export default AllProducts;
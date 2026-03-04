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
            <h1 className="text-3xl md:text-4xl font-light text-center text-gray-800 dark:text-white">
                All <span className="font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">Products</span>
            </h1>

            <div className="overflow-x-hidden gap-3 my-10 max-w-[1300px] mx-auto flex flex-col md:flex-row justify-between">
                {/* toggle view type function */}
                <select
                    name="viewProduct"
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="p-2 px-4 border border-gray-200 dark:border-indigo-500/30 dark:bg-zinc-900 text-gray-700 dark:text-white rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/30 transition-all duration-300"
                >
                    <option value="Card">Card View</option>
                    <option value="Table">Table View</option>
                </select>

                <p className='text-gray-600 dark:text-gray-300 bg-indigo-50 dark:bg-indigo-950/30 h-fit rounded-full px-5 py-2 text-center text-sm border border-indigo-100 dark:border-indigo-500/20'>
                    Products which have minimum ordering quantity of <span className='text-indigo-600 dark:text-indigo-400 font-semibold'>100</span> are only <span className='text-indigo-600 dark:text-indigo-400 font-semibold'>Available</span>
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
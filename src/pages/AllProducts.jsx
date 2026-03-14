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

    if (load) {
        return <Spinner />;
    }

    return (
        <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1]
            }}
            className="min-h-screen overflow-x-hidden px-4 py-10">

            {/* Page Header */}
            <div className="text-center mb-10">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-3">Browse our inventory</p>
                <h1 className="text-3xl md:text-4xl section-heading text-gray-800 dark:text-white">
                    All <span className="text-gradient">Products</span>
                </h1>
            </div>

            {/* Filters Bar */}
            <div className="max-w-[1300px] mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-slate-900/60 p-4 rounded-2xl border border-gray-100 dark:border-indigo-500/15">
                {/* View Toggle */}
                <select
                    name="viewProduct"
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="px-4 py-2.5 border border-gray-200 dark:border-indigo-500/20 dark:bg-slate-800 text-gray-700 dark:text-white rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400/20 transition-all duration-300"
                >
                    <option value="Card">Card View</option>
                    <option value="Table">Table View</option>
                </select>

                {/* Info Badge */}
                <p className='text-gray-500 dark:text-gray-400 text-xs bg-indigo-50 dark:bg-indigo-950/20 rounded-lg px-4 py-2 border border-indigo-100 dark:border-indigo-500/15'>
                    Products with min order qty of <span className='text-indigo-600 dark:text-indigo-400 font-semibold'>100</span> are marked <span className='text-indigo-600 dark:text-indigo-400 font-semibold'>Available</span>
                </p>

                {/* Filter Radio */}
                <div className="flex items-center gap-4">
                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 dark:text-gray-300">
                        <input
                            type="radio"
                            name="filter"
                            value="all"
                            checked={!showAvailableOnly}
                            onChange={() => setShowAvailableOnly(false)}
                            className="radio radio-primary radio-sm"
                        />
                        All
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-sm text-gray-600 dark:text-gray-300">
                        <input
                            type="radio"
                            name="filter"
                            value="available"
                            checked={showAvailableOnly}
                            onChange={() => setShowAvailableOnly(true)}
                            className="radio radio-primary radio-sm"
                        />
                        Available Only
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

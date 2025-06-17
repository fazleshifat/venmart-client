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

    const [availableProducts, setAvailableProducts] = useState();
    const [load, setLoad] = useState(true);

    const { user, searchQuery, setSearchQuery } = use(AuthContext);

    window.scroll(0, 0)

    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/allProducts?email=${user?.email}`, {
            headers: {
                Authorization: `Bearer ${user?.accessToken}`
            }
        })
            .then(res => {
                setLoad(false);
                setProducts(res.data);
            }
            )
            .catch(err => console.log(err))
    }, [])
    const [view, setView] = useState(() => {
        return localStorage.getItem('view') || 'list';
    });



    useEffect(() => {
        localStorage.setItem('view', view);
    }, [view]);

    const [showAvailableOnly, setShowAvailableOnly] = useState(false);

    const filteredProducts = products.filter(product => product.name.trim().toLowerCase().replace(/\s+/g, '').includes(searchQuery.trim().toLowerCase().replace(/\s+/g, '')));
    const filteredAvailableProducts = products.filter(product => parseInt(product.minQty) > 100);

    const handleShowAvailable = () => {
        setShowAvailableOnly(!showAvailableOnly);
    };


    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    useEffect(() => {
        document.getElementById("title").innerText = "All Products"
    }, [])


    return (



        <motion.section
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
            }}
            className="min-h-screen overflow-x-hidden dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-4 py-7">
            <h1 className="text-md md:text-4xl text-[#20b2aa] dark:text-[#7fffd4] text-center">
                All Products🛍️
            </h1>

            <div className="overflow-x-hidden my-10 max-w-[1300px] mx-auto flex justify-between">
                <select
                    name="viewProduct"
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="p-2 px-4 border-2 border-gray-400 dark:bg-indigo-300 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                >
                    <option value="Card">Card View</option>
                    <option value="Table">Table View</option>
                </select>


                <button onClick={() => handleShowAvailable()} className='btn btn-outline hover:border-indigo-500'>{!showAvailableOnly ? 'Show Available Products' : 'Show All Products'}</button>
            </div>

            {
                view === 'Card' ? (
                    <CardView
                        load={load}
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
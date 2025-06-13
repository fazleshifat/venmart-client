import React, { useEffect, useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import TableView from './TableView';
import CardView from './CardView';
import { Fade } from 'react-awesome-reveal';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';

const AllProducts = () => {

    const { searchQuery, setSearchQuery } = use(AuthContext);

    window.scroll(0, 0)

    const products = useLoaderData();

    // console.log(searchQuery.toLowerCase().trim().replace(/\s+/g, ''))


    const filteredProducts = products.filter(product => product.name.trim().toLowerCase().replace(/\s+/g, '').includes(searchQuery.trim().toLowerCase().replace(/\s+/g, '')));

    const [view, setView] = useState(() => {
        return localStorage.getItem('view') || 'list';
    });

    useEffect(() => {
        localStorage.setItem('view', view);
    }, [view]);

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    return (

        <Fade cascade damping={0.5}>

            <section className="min-h-screen dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-4 py-7">
                <h1 className="text-md md:text-4xl text-[#20b2aa] dark:text-[#7fffd4] text-center">
                    All Products🛍️
                </h1>

                <div className="my-10 max-w-[1300px] mx-auto">
                    <select
                        name="viewProduct"
                        value={view}
                        onChange={(e) => setView(e.target.value)}
                        className="p-2 px-4 border-2 border-gray-400 dark:bg-indigo-300 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                    >
                        <option value="Card">Card View</option>
                        <option value="Table">Table View</option>
                    </select>
                </div>

                {
                    view === 'Card' ? <CardView products={(products, filteredProducts)}></CardView> : <TableView products={(products, filteredProducts)}></TableView>
                }

                {/* Table format */}


                {/* <TableView products={products}></TableView> */}
            </section>
        </Fade>


    );
};

export default AllProducts;
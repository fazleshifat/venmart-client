import React, { useState } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import TableView from './TableView';
import CardView from './CardView';

const AllProducts = () => {
    window.scroll(0, 0)

    const products = useLoaderData();
    // console.log(products)

    const [view, setView] = useState(' ');

    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    return (
        <section className="min-h-screen dark:from-indigo-900 dark:via-purple-900 dark:to-pink-900 px-4 py-10">
            <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mb-10">
                🛍️ All Products
            </h1>

            <div className="my-15 w-full">
                <select
                    name="viewProduct"
                    value={view}
                    onChange={(e) => setView(e.target.value)}
                    className="p-2 px-4 bg-blue-200 text-black rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                >
                    <option value="Card">Card View</option>
                    <option value="Table">Table View</option>
                </select>
            </div>

            {
                view === 'Card' ? <CardView products={products}></CardView> : <TableView products={products}></TableView>
            }

            {/* Table format */}


            {/* <TableView products={products}></TableView> */}
        </section>

    );
};

export default AllProducts;
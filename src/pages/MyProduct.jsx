import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { Link, useLoaderData, useNavigation } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import Swal from 'sweetalert2';
import axios from 'axios';
import { Fade } from 'react-awesome-reveal';
import { motion } from "framer-motion";
import Spinner from '../components/Spinner';

const MyProduct = () => {

    const { user } = use(AuthContext);
    const [products, setProducts] = useState([]);
    const [myProducts, setMyProducts] = useState([]);
    const [load, setLoad] = useState(true);

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


    useEffect(() => {
        if (user && products) {
            const filterProducts = products.filter(product => product.ownerEmail === user?.email);
            setMyProducts(filterProducts);
        }
    }, [user, products]);

    if (load) {
        return <Spinner />;
    }
    document.getElementById("title").innerText = "My Products",
        window.scroll(0, 0)


    const handleRemoveProduct = (id) => {
        Swal.fire({
            title: "Want to remove the product!",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://venmart-server.vercel.app/myProduct/delete/${id}/${user?.email}`, {
                    headers: { Authorization: `Bearer ${user?.accessToken}` }
                })
                    .then(response => {
                        const filteredProducts = myProducts.filter(product => product._id !== id);
                        setMyProducts(filteredProducts);
                    })
                    .catch(error => {
                    });

                Swal.fire({
                    title: "Product Removed",
                    text: "your product has been removed",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });

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
                className="p-6 md:p-10 min-h-screen max-w-[1400px] mx-auto">

                {/* Header */}
                <div className="text-center mb-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-3">Manage your listings</p>
                    <h1 className="text-3xl md:text-4xl section-heading text-gray-800 dark:text-white">
                        My <span className="text-gradient">Products</span>
                    </h1>
                </div>

                {myProducts.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"/></svg>
                        </div>
                        <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">No products yet</p>
                        <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">You haven't added any products</p>
                        <Link className='btn btn-primary-gradient rounded-xl text-sm font-medium px-6' to='/addProduct'>Add Your Product</Link>
                    </div>
                ) : (
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {myProducts.map((product) => (
                            <div
                                key={product._id}
                                className="bg-white dark:bg-slate-900/60 rounded-2xl border border-gray-100 dark:border-indigo-500/15 overflow-hidden card-hover"
                            >
                                <div className="flex flex-col lg:flex-row gap-4 p-5">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="h-40 lg:h-auto lg:w-5/12 object-cover rounded-xl"
                                    />
                                    <div className="flex-1 flex flex-col justify-between">
                                        <div>
                                            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">{product.name}</h2>
                                            <p className="text-xs text-gray-400 dark:text-gray-500">{product.brand} / {product.category}</p>
                                            <p className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mt-2">${product.price}</p>
                                            <p className="text-xs text-gray-400 mt-1">Stock: {product.quantity}</p>
                                            <p className="text-[10px] text-gray-400 italic mt-1">
                                                Listed: {product.listedDate || 'N/A'}
                                            </p>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-4">
                                            <Link to={`/product/details/${product._id}`} className="btn btn-xs btn-primary-gradient rounded-lg text-[10px] font-medium">Details</Link>
                                            <Link to={`/updateProduct/${product._id}`} className="btn btn-xs btn-ghost-styled rounded-lg text-[10px] font-medium">Edit</Link>
                                            <button onClick={() => handleRemoveProduct(product._id)} className="btn btn-xs rounded-lg text-[10px] font-medium border border-red-200 dark:border-red-500/20 text-red-500 bg-transparent hover:bg-red-50 dark:hover:bg-red-500/10">Remove</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </motion.section>
        </Fade>
    );
};

export default MyProduct;

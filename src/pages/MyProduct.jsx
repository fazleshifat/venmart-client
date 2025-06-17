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
                axios.delete(`https://venmart-server.vercel.app/allProducts/delete/${id}`)
                    .then(response => {
                        const filteredProducts = myProducts.filter(product => product._id !== id);
                        setMyProducts(filteredProducts);
                    })
                    .catch(error => {
                        // console.error(error);
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
        <Fade cascade damping={0.5}>

            <motion.section
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                    duration: 0.8,
                    ease: [0.22, 1, 0.36, 1] // smooth cubic-bezier
                }}
                className="p-6 md:p-10 min-h-screen max-w-[1450px] mx-auto">
                <div className="text-center md:mb-10">
                    <h1 className="md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        📋My added Products
                    </h1>
                </div>

                {myProducts.length === 0 ? (
                    <div className="text-center text-gray-500 text-sm md:text-lg">you haven't added any product yet
                        <br />

                        <Link className='btn btn-primary mt-2' to='/addProduct'>Add your product</Link>
                    </div>
                ) : (
                    <div className="grid gap-6 grid-cols-1 lg:grid-cols-3 max-h-fit">
                        {myProducts.map((product) => (
                            <div
                                key={product._id}
                                className="bg-white rounded-2xl shadow-md hover:shadow-lg transition border-2 border-gray-300"
                            >
                                <div className="p-4 rounded-2xl bg-white overflow-x-hidden">
                                    <div className="flex flex-col lg:flex-row gap-2 justify-between">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="h-fit my-auto rounded-xl w-6/12"
                                        />
                                        <div className="flex-1 flex flex-col justify-between">
                                            <div>
                                                <h2 className="text-2xl font-semibold text-gray-800">{product.name}</h2>
                                                <p className="text-sm text-gray-500 mt-1">Brand: <span className="font-medium">{product.brand}</span></p>
                                                <p className="text-sm text-gray-500">Category: <span className="font-medium">{product.category}</span></p>
                                                <p className="text-sm text-gray-600 mt-2 font-semibold ">Price: ${product.price}</p>
                                                <p className="text-sm text-gray-500">Stock: {product.quantity}</p>
                                                <p className="text-xs text-gray-400 mt-1 italic">
                                                    Listed on: {product.listedDate || 'N/A'}
                                                </p>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-4 w-auto">

                                                <Link to={`/product/details/${product._id}`} className="btn btn-outline btn-sm text-sm text-blue-600 ">👁️Details</Link>
                                                <Link to={`/updateProduct/${product._id}`} className="btn btn-outline btn-sm text-sm text-blue-600 ">✏️Edit</Link>
                                                <button onClick={() => handleRemoveProduct(product._id)} className="btn btn-sm text-sm btn-outline text-red-600 text">🗑️Remove</button>
                                            </div>
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
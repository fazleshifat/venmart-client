import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import axios from 'axios';
import Swal from 'sweetalert2';
import CartDetailsModal from '../components/CartDetailsModal';
import { Fade } from 'react-awesome-reveal';
import { motion } from "motion/react"
import { useContext } from 'react';

const CartSection = () => {

    const [cartItems, setCartItems] = useState([]);
    const { user } = useContext(AuthContext);
    const [myCarts, setMyCarts] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        axios.get(`https://venmart-server.vercel.app/cart?email=${user.email}`, {
            headers: {
                Authorization: `Bearer ${user.accessToken}`
            }
        })
            .then(res => {
                setCartItems(res.data);
                setLoad(false);
            })
            .catch(err => {
                setLoad(false);
            });
    }, [user]);

    useEffect(() => {
        if (user && cartItems) {
            const filteredCart = cartItems.filter(
                (cart) => cart?.customerEmail === user?.email
            );
            setMyCarts(filteredCart);
        }
    }, [user, cartItems]);

    useEffect(() => {
        if (selectedItem && Object.keys(selectedItem).length > 0) {
            const modal = document.getElementById('purchase_modal');
            if (modal) {
                modal.showModal();
            }
        }
    }, [selectedItem]);

    useEffect(() => {
        window.scroll(0, 0);
        document.getElementById("title").innerText = "Purchased Cart"
    }, [])

    if (load) {
        return <Spinner />;
    }

    const handleCancelOrder = (item) => {
        Swal.fire({
            title: "Want to cancel order!",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`https://venmart-server.vercel.app/cart/delete/${item?._id}/${user?.email}`, {
                    headers: { Authorization: `Bearer ${user?.accessToken}` }
                })
                    .then(response => {
                        const filteredCart = myCarts.filter(cart => cart._id !== item?._id);
                        setMyCarts(filteredCart);

                        axios.patch(`https://venmart-server.vercel.app/allProducts/${item?.id}/${user?.email}`, { quantity: item.quantity },
                            {
                                headers: { Authorization: `Bearer ${user?.accessToken}` }
                            }
                        )
                            .then()
                            .catch()
                    })
                    .catch();

                Swal.fire({
                    title: "Order Cancelled",
                    text: "your order has been canceled",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
            }
        });
    };

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
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-500 dark:text-indigo-400 mb-3">Your orders</p>
                    <h1 className="text-3xl md:text-4xl section-heading text-gray-800 dark:text-white">
                        My <span className="text-gradient">Cart</span>
                    </h1>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-fr">
                    {myCarts.length === 0 ? (
                        <div className="col-span-full text-center py-16">
                            <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gray-100 dark:bg-slate-800 flex items-center justify-center">
                                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"/></svg>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400 font-medium mb-1">Your cart is empty</p>
                            <p className="text-sm text-gray-400 dark:text-gray-500 mb-4">You haven't purchased any products yet</p>
                            <Link className='btn btn-primary-gradient rounded-xl text-sm font-medium px-6' to='/allProducts'>Browse Products</Link>
                        </div>
                    ) : (
                        myCarts.map((item) => (
                            <div
                                key={item._id}
                                className="bg-white dark:bg-slate-900/60 rounded-2xl border border-gray-100 dark:border-indigo-500/15 overflow-hidden card-hover h-full flex flex-col"
                            >
                                <div className="p-5 flex flex-col h-full">
                                    <div className="flex items-start gap-4 mb-4">
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="w-20 h-20 object-cover rounded-xl flex-shrink-0"
                                        />
                                        <div className="flex-1 min-w-0">
                                            <h2 className="text-base font-semibold text-gray-800 dark:text-white truncate">{item.name}</h2>
                                            <p className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{item.brand} / {item.category}</p>
                                            <div className="flex items-center gap-3 mt-2">
                                                <span className="text-base font-bold text-indigo-600 dark:text-indigo-400">${item.price}</span>
                                                <span className="text-xs text-gray-400 bg-gray-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">x{item.quantity}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-[10px] text-gray-400 dark:text-gray-500 mb-4 mt-auto">
                                        {item.purchaseDate} at {item.purchaseTime}
                                    </p>

                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                setSelectedItem(item);
                                                document.getElementById('purchase_modal')?.showModal();
                                            }}
                                            className="btn btn-sm btn-primary-gradient rounded-lg text-xs font-medium flex-1"
                                        >
                                            View Details
                                        </button>
                                        <button onClick={() => handleCancelOrder(item)}
                                            className="btn btn-sm rounded-lg text-xs font-medium border border-red-200 dark:border-red-500/20 text-red-500 bg-transparent hover:bg-red-50 dark:hover:bg-red-500/10 transition-all">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </motion.section>
            <CartDetailsModal item={selectedItem}></CartDetailsModal>
        </Fade>
    );
};

export default CartSection;

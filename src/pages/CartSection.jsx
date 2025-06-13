import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { Link, useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import axios from 'axios';
import Swal from 'sweetalert2';
import CartDetailsModal from '../components/CartDetailsModal';
import { Fade } from 'react-awesome-reveal';

const CartSection = () => {

    const cartItems = useLoaderData();
    const [myCarts, setMyCarts] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);

    const { user } = use(AuthContext);
    // const filteredCart = cartItems.filter(cart => cart.customerEmail === user?.email);

    useEffect(() => {
        if (user && cartItems) {
            const filteredCart = cartItems.filter(
                (cart) => cart?.customerEmail === user?.email
            );
            setMyCarts(filteredCart);
        }
    }, [user, cartItems]);

    useEffect(() => {
        if (selectedItem) {
            const modal = document.getElementById('purchase_modal');
            if (modal) {
                modal.showModal();
            }
        }
    }, [selectedItem]);

    window.scroll(0, 0)
    const Navigation = useNavigation()

    if (Navigation.state === "loading") {
        return <Spinner />;
    }

    const handleCancelOrder = (id) => {
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
                axios.delete(`https://venmart-server.vercel.app/cart/delete/${id}`)
                    .then(response => {
                        const filteredCart = myCarts.filter(cart => cart._id !== id);
                        setMyCarts(filteredCart);
                    })
                    .catch(error => {
                        // console.error(error);
                    });

                Swal.fire({
                    title: "Order Cancelled",
                    text: "your order has been canceled",
                    icon: "success"
                });
            }
        });

    }

    return (
        <Fade cascade damping={0.5}>
            <section className="p-6 md:p-10 min-h-screen max-w-[1450px] mx-auto">
                <div className="text-center md:mb-10">
                    <h1 className="md:text-4xl text-center font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                        🛍️My Cart
                    </h1>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {myCarts.length === 0 ? (
                        <div className="text-center grid col-span-4 text-gray-500 md:text-lg">
                            you haven't purchased any product yet!
                            <br />
                            <Link className='btn btn-primary mt-2 w-fit mx-auto' to='/allProducts'>Purchase products</Link>
                        </div>
                    ) :
                        (

                            myCarts.map((item) => (
                                <div
                                    key={item._id}
                                    className="transition-opacity duration-300 opacity-100 translate-y-0"
                                >
                                    <div className="rounded-2xl shadow-md hover:shadow-lg transition border-indigo-200 border-2 bg-white">
                                        <div className="p-4">
                                            <div className="flex items-center gap-4">
                                                <img
                                                    src={item.image}
                                                    alt={item.name}
                                                    className="w-24 rounded-xl"
                                                />
                                                <div className="flex-1">
                                                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                                                    <p className="text-sm text-gray-500">Brand: {item.brand}</p>
                                                    <p className="text-sm text-gray-500">Category: {item.category}</p>
                                                    <p className="text-sm text-gray-500">Price: ${item.price}</p>
                                                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                                                    <p className="text-xs text-gray-400">
                                                        {item.purchaseDate} at {item.purchaseTime}
                                                    </p>
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-center mt-4">
                                                <button
                                                    onClick={() => {
                                                        setSelectedItem(item); // Save item data
                                                        document.getElementById('purchase_modal').showModal();  // Open modal
                                                    }}
                                                    className="btn btn-sm text-indigo-600 hover:text-red-800 text-sm flex items-center"
                                                >
                                                    👁️View
                                                </button>
                                                <button onClick={() => handleCancelOrder(item._id)} className="btn btn-sm text-red-600 hover:text-red-800 text-sm flex items-center">
                                                    🗑️<span className="ml-1">Cancel Order</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))

                        )}
                </div>

            </section>
            <CartDetailsModal item={selectedItem}></CartDetailsModal>
        </Fade>
    );
};

export default CartSection;
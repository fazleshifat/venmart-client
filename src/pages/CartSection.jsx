import React, { useEffect, useState } from 'react';
import { use } from 'react';
import { AuthContext } from '../AuthProvider/PrivateRoute';
import { useLoaderData, useNavigation } from 'react-router';
import Spinner from '../components/Spinner';
import axios from 'axios';
import Swal from 'sweetalert2';

const CartSection = () => {

    const [myCarts, setMyCarts] = useState([]);

    const { user } = use(AuthContext);
    const cartItems = useLoaderData();
    // const filteredCart = cartItems.filter(cart => cart.customerEmail === user?.email);

    useEffect(() => {
        if (user && cartItems) {
            const filteredCart = cartItems.filter(
                (cart) => cart.customerEmail === user.email
            );
            setMyCarts(filteredCart);
        }
    }, [user, cartItems]);

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
            console.log(result)
            if (result.isConfirmed) {
                axios.delete(`http://localhost:3000/cart/delete/${id}`)
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
        <section className="p-6 md:p-10 min-h-screen">
            <div className="text-center mb-10">
                <h1 className="text-4xl text-center font-bold mb-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-transparent bg-clip-text">
                🛍️My Cart
                </h1>
                <p className="text-gray-600 text-lg mt-2">Review your purchased items</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {myCarts.length === 0 ? (
                    <div className="text-center grid col-span-3 text-gray-500 text-lg">
                        you haven't purchased any product yet!
                    </div>
                ) :
                    (

                        myCarts.map((item) => (
                            <div
                                key={item._id}
                                className="transition-opacity duration-300 opacity-100 translate-y-0"
                            >
                                <div className="rounded-2xl shadow-md hover:shadow-lg transition bg-white">
                                    <div className="p-4">
                                        <div className="flex items-center gap-4">
                                            <img
                                                src={item.image}
                                                alt={item.name}
                                                className="w-24 h-24 object-cover rounded-xl"
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
                                            <button className="btn btn-sm text-blue-500 hover:text-blue-700 text-sm flex items-center">
                                                👁️ <span className="ml-1">View</span>
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
    );
};

export default CartSection;
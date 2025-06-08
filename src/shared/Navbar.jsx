import React, { use, useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { Link } from 'react-router';
import { AuthContext } from '../AuthProvider/PrivateRoute';
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {

    const { user } = use(AuthContext);

    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);


    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Categories</Link></li>
        <li><Link to='/allProducts'>All Product</Link></li>
        <li><Link to='/addProduct'>Add Product</Link></li>
        <li><Link to='/'>My Product</Link></li>
        <li><Link to='/'>Cart</Link></li>
    </>

    return (
        <div className={`navbar fixed w-11/12 bg-indigo-500/40 dark:bg-indigo-700/60 backdrop-blur-md shadow-sm px-3 md:px-8 z-50 rounded-full transition-all duration-300
        left-1/2 -translate-x-1/2 
        top-auto bottom-1 
        md:top-3 md:bottom-auto 
        ${showNavbar ? 'translate-y-0' : 'md:-translate-y-full'}
    `}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn cursor-pointer rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-0 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className='flex items-center'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <p className="text-xl font-bold -ml-3 hidden md:flex">enmart</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-5">

                {
                    !user ?
                        <>
                            <Link to='/logIn' className="btn">Login</Link>
                            <Link to='/register' className="btn">Register</Link>
                        </>
                        :
                        <>
                            <div className="flex gap-1 md:gap-3">
                                <input type="text" placeholder="Search products" className="hidden md:flex relative input input-bordered w-40 rounded-full lg:w-70" />
                                <IoSearchOutline className='absolute text-indigo-500 text-3xl md:text-2xl right-26 md:right-36 top-4 md:top-5' />
                                <ThemeToggle></ThemeToggle>
                                <div className="dropdown dropdown-hover dropdown-end">
                                    <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                        <div className="w-10 rounded-full">
                                            <img
                                                alt="Tailwind CSS Navbar component"
                                                src={user?.photoURL} />
                                        </div>
                                    </div>
                                    <ul
                                        tabIndex={0}
                                        className="menu menu-sm dropdown-content bg-base-300 rounded-box z-1 w-34 md:w-52 p-2 shadow gap-3">
                                        <li className='text-md md:text-lg font-semibold'>{user?.displayName}</li>
                                        <button className='btn btn-accent text-white'>Logout</button>
                                    </ul>
                                </div>
                            </div>


                        </>
                }
            </div>
        </div >
    );
};

export default Navbar;
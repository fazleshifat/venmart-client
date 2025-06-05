import React from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { Link } from 'react-router';

const Navbar = () => {

    const links = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>Categories</Link></li>
        <li><Link to='/'>All Product</Link></li>
        <li><Link to='/'>Add Product</Link></li>
        <li><Link to='/'>My Product</Link></li>
        <li><Link to='/'>Cart</Link></li>
    </>

    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className='flex items-center'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <p className="text-xl font-bold -ml-3">enmart</p>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-8 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <ThemeToggle></ThemeToggle>
                <Link className="btn">Login</Link>
                <Link className="btn">Register</Link>
            </div>
        </div>
    );
};

export default Navbar;
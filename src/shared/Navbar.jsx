import React, { use, useEffect, useState } from 'react';
import ThemeToggle from '../components/ThemeToggle';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../AuthProvider/AuthContext';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase/firebase.init';
import ToggleSearchBar from '../components/ToggleSearchBar';

const Navbar = () => {

    const { user } = use(AuthContext);

    const navigate = useNavigate();
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    // const [isActive, setIsActive] = useState(false)


    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const handleSignOut = () => {
        Swal.fire({
            title: "Want to Log out!",
            text: "Are you sure?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Log out!"
        }).then((result) => {
            if (result.isConfirmed) {
                signOut(auth).then(() => {

                    // navigate('/signIn')
                }).catch((error) => {

                });

                Swal.fire({
                    title: "Logged out successful!",
                    text: "still you can visit the Homepage.",
                    icon: "success"
                });
                navigate('/logIn');
            }
        });

    }






    const links = (
        <>
            {[
                { to: '/', label: 'Home' },
                { to: '/categories', label: 'Categories' },
                { to: '/allProducts', label: 'All Product' },
                { to: '/addProduct', label: 'Add Product' },
                { to: '/myProduct', label: 'My Product' },
                { to: '/cart', label: 'Cart' },
            ].map(({ to, label }) => (
                <li key={to}>
                    <NavLink
                        to={to}
                        className={({ isActive }) =>
                            `group relative px-2 py-1 font-semibold transition duration-300 
                            ${isActive
                                ? 'text-indigo-400 dark:text-white'
                                : 'text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 hover:dark:text-white'
                            }`
                        }
                    >
                        {({ isActive }) => (
                            <span
                                className={`
        relative
        after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-indigo-600 dark:after:bg-white
        after:transition-all after:duration-300 after:ease-in-out
        ${isActive ? 'after:w-full' : 'after:w-0 group-hover:after:w-full'}
      `}
                            >
                                {label}
                            </span>
                        )}
                    </NavLink>
                </li>
            ))}
        </>
    );

    return (
        <div className={`navbar fixed max-w-11/12 bg-black/10 dark:bg-indigo-900/60 backdrop-blur-md shadow-sm px-3 md:px-6 z-50 rounded-full transition-all duration-300
        left-1/2 -translate-x-1/2
        top-auto bottom-2 
        md:top-2 md:bottom-auto
        ${showNavbar ? 'translate-y-0' : 'md:-translate-y-full'}
    `}>
            <div className="navbar-start md:w-fit lg:w-1/2">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn cursor-pointer rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bottom-12 md:top-12 h-fit bg-base-100 rounded-box z-1 mt-0 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link className='flex items-center'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <p className="text-xl font-bold -ml-3 hidden md:flex">enmart</p>



                </Link>
            </div>
            <div className="navbar-center hidden md:flex">
                <ul className="flex md:gap-8 font-semibold">
                    {links}
                </ul>
            </div>
            <div className="navbar-end gap-2 w-full md:w-1/2">

                <ToggleSearchBar></ToggleSearchBar>

                <ThemeToggle></ThemeToggle>

                {
                    !user ?

                        <div className='flex gap-1'>
                            <Link to='/logIn' className="btn btn-accent text-white">Login</Link>
                            <Link to='/register' className="btn btn-error text-white">Register</Link>
                        </div>

                        :
                        <>
                            <div className="flex gap-1 md:gap-3">
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
                                        className="menu menu-sm dropdown-content bottom-10 md:top-10 h-fit bg-base-300 rounded-box z-1 w-34 md:w-52 p-2 shadow gap-3">
                                        <li className='text-md md:text-lg font-semibold'>{user?.displayName}</li>
                                        <button onClick={handleSignOut} className='btn btn-warning text-white'>Logout</button>
                                        {
                                            !user &&
                                            <div className='flex md:hidden'>
                                                <Link className='btn btn-primary text-white'>Login</Link>
                                                <Link className='btn btn-accent text-white'>Register</Link>
                                            </div>
                                        }
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
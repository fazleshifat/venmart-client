import React, { use, useEffect, useState } from 'react';
import ThemeToggle from '../../components/ThemeToggle';
import { Link, NavLink, useNavigate } from 'react-router';
import { AuthContext } from '../../AuthProvider/AuthContext';
import Swal from 'sweetalert2';
import { signOut } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.init';
import ToggleSearchBar from '../../components/ToggleSearchBar';
import NavLinks from './Navlinks';

const Navbar = () => {

    const { user, userSignOut, loading } = use(AuthContext);

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
                userSignOut().then(() => {

                    // navigate('/signIn')
                }).catch((error) => {

                });

                Swal.fire({
                    title: "Logged out successful!",
                    text: "still you can visit the Homepage.",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/logIn');
            }
        });

    }


    return (
        <div className={`navbar fixed max-w-11/12 bg-black/10 dark:bg-indigo-700/60 backdrop-blur-md shadow-sm px-3 md:px-6 z-50 rounded-full transition-all duration-300
        left-1/2 -translate-x-1/2
        top-auto bottom-2 
        md:top-2 md:bottom-auto
        ${showNavbar ? 'translate-y-0' : 'md:-translate-y-full'}
    `}>
            <div className="flex items-center navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn cursor-pointer rounded-full lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bottom-12 md:top-12 h-fit bg-base-100 rounded-box z-1 mt-0 w-52 p-2 shadow">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <Link className='hidden md:flex items-center'>
                    <div className="flex absolute items-center">
                        <img
                            src="/assets/logo.png"
                            className="w-10 md:w-10 h-auto"
                            alt="logo"
                        />
                        <p id="logo" className="text-xl font-extrabold md:text-3xl text-gray-700 dark:text-indigo-400 -ml-1">
                            VENMART
                        </p>
                    </div>
                </Link>


                <div className='flex ml-3 auto w-full md:hidden'>
                    <ThemeToggle></ThemeToggle>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex md:gap-8 font-semibold">
                    <NavLinks></NavLinks>
                </ul>
            </div>
            <div className="gap-1 navbar-end flex">

                <div className="hidden md:flex">
                    <ToggleSearchBar></ToggleSearchBar>
                </div>

                <div className='hidden md:flex'>
                    <ThemeToggle></ThemeToggle>
                </div>

                {
                    loading ? '' :
                        <>
                            {
                                !user ?

                                    <>
                                        <div className='flex gap-1'>
                                            <Link to='/logIn' className="btn bg-sky-500 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition rounded-lg">
                                                Login
                                            </Link>

                                            <Link to='/register' className="btn bg-accent hover:bg-black/10 text-white transition rounded-lg">
                                                Register
                                            </Link>
                                        </div>
                                    </>

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
                                                    <button onClick={handleSignOut} className='btn bg-sky-500 text-white'>Logout</button>
                                                    {
                                                        !user &&
                                                        <div className='flex md:hidden'>
                                                            <Link className="btn bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700 transition rounded-lg">
                                                                Login
                                                            </Link>

                                                            <Link className="btn bg-gradient-to-r from-yellow-400 to-red-500 text-white hover:bg-gradient-to-r hover:from-yellow-500 hover:to-red-600 transition rounded-lg">
                                                                Register
                                                            </Link>
                                                        </div>
                                                    }
                                                </ul>
                                            </div>
                                        </div>


                                    </>
                            }
                        </>
                }
            </div>
        </div >
    );
};

export default Navbar;
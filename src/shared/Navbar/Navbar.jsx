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
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
            setLastScrollY(currentScrollY);
            setScrolled(currentScrollY > 20);
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
        <div className={`navbar fixed max-w-11/12 backdrop-blur-2xl px-4 md:px-6 z-50 rounded-2xl transition-all duration-500 ease-out
        left-1/2 -translate-x-1/2
        top-auto bottom-2
        md:top-3 md:bottom-auto
        ${scrolled
                ? 'bg-white/80 dark:bg-slate-900/80 shadow-lg shadow-indigo-500/5 border border-white/40 dark:border-indigo-500/15'
                : 'bg-white/60 dark:bg-indigo-950/50 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-white/30 dark:border-indigo-500/10'}
        ${showNavbar ? 'translate-y-0 opacity-100' : 'md:-translate-y-full md:opacity-0'}
    `}>
            <div className="flex items-center navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost cursor-pointer rounded-xl lg:hidden hover:bg-indigo-50 dark:hover:bg-indigo-950/30 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bottom-14 md:top-14 h-fit bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl z-1 mt-0 w-56 p-3 shadow-xl shadow-indigo-500/10 border border-gray-100 dark:border-indigo-500/20">
                        <NavLinks></NavLinks>
                    </ul>
                </div>
                <Link to='/' className='hidden md:flex items-center group'>
                    <div className="flex items-center gap-0.5">
                        <img
                            src="/assets/logo.png"
                            className="w-9 h-auto transition-transform duration-300 group-hover:scale-110"
                            alt="logo"
                        />
                        <p id="logo" className="text-2xl bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent tracking-wider">
                            VENMART
                        </p>
                    </div>
                </Link>


                <div className='flex ml-3 auto w-full md:hidden'>
                    <ThemeToggle></ThemeToggle>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex md:gap-6 font-medium">
                    <NavLinks></NavLinks>
                </ul>
            </div>
            <div className="gap-2 navbar-end flex items-center">

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
                                        <div className='flex gap-2'>
                                            <Link to='/logIn' className="btn btn-sm md:btn-md btn-primary-gradient rounded-xl px-5 text-sm font-medium">
                                                Login
                                            </Link>

                                            <Link to='/register' className="btn btn-sm md:btn-md btn-ghost-styled rounded-xl px-5 text-sm font-medium">
                                                Register
                                            </Link>
                                        </div>
                                    </>

                                    :
                                    <>
                                        <div className="flex gap-1 md:gap-3 items-center">
                                            <div className="dropdown dropdown-hover dropdown-end">
                                                <div tabIndex={0} className="btn btn-ghost btn-circle avatar ring-2 ring-indigo-200 dark:ring-indigo-500/30 ring-offset-2 ring-offset-white dark:ring-offset-slate-900 hover:ring-indigo-400 dark:hover:ring-indigo-400/50 transition-all duration-300">
                                                    <div className="w-9 rounded-full">
                                                        <img
                                                            alt="User avatar"
                                                            src={user?.photoURL} />
                                                    </div>
                                                </div>
                                                <ul
                                                    tabIndex={0}
                                                    className="menu menu-sm dropdown-content bottom-12 md:top-12 h-fit bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-2xl z-1 w-48 md:w-56 p-4 shadow-xl shadow-indigo-500/10 border border-gray-100 dark:border-indigo-500/20 space-y-3">
                                                    <li className='text-sm md:text-base font-semibold text-gray-800 dark:text-white px-1'>{user?.displayName}</li>
                                                    <li className='text-xs text-gray-500 dark:text-gray-400 px-1 -mt-2'>{user?.email}</li>
                                                    <button onClick={handleSignOut} className='btn btn-sm bg-gradient-to-r from-red-500 to-rose-500 text-white border-none hover:from-red-600 hover:to-rose-600 rounded-xl text-xs font-medium'>Logout</button>
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

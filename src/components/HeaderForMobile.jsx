import React from 'react';
import { Link } from 'react-router';
import ToggleSearchBar from './ToggleSearchBar';
import ThemeToggle from './ThemeToggle';

const HeaderForMobile = () => {
    return (
        <>
            <div to='/' className='flex md:hidden justify-between items-center py-2 px-2'>
                <Link className='flex items-center'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <p id="logo" className="text-xl font-extrabold md:text-3xl bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent -ml-1">
                        enmart
                    </p>
                </Link>

                <ToggleSearchBar></ToggleSearchBar>
                {/* <ThemeToggle></ThemeToggle> */}
            </div>
        </>
    );
};

export default HeaderForMobile;
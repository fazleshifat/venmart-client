import React from 'react';
import { Link } from 'react-router';
import ToggleSearchBar from './ToggleSearchBar';
import ThemeToggle from './ThemeToggle';

const HeaderForMobile = () => {
    return (
        <>
            <div to='/' className='flex md:hidden justify-between items-center py-2 px-2'>
                <Link className='flex items-center'>
                    <img src="/assets/logo2.png" className='w-10' alt="logo" />
                    <p id="logo" className="text-xl font-extrabold md:text-3xl text-gray-600 dark:text-indigo-400 -ml-3">
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
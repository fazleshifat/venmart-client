import React from 'react';
import { Link } from 'react-router';
import ToggleSearchBar from './ToggleSearchBar';
import ThemeToggle from './ThemeToggle';

const HeaderForMobile = () => {
    return (
        <>
            <div to='/' className='flex md:hidden justify-center items-center py-2'>
                <Link className='flex items-center'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <p className="text-xl font-bold -ml-3 pr-1 flex">enmart</p>
                </Link>

                <ToggleSearchBar></ToggleSearchBar>
                {/* <ThemeToggle></ThemeToggle> */}
            </div>
        </>
    );
};

export default HeaderForMobile;
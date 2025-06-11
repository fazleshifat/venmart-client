import React from 'react';
import { Link } from 'react-router';
import ToggleSearchBar from './ToggleSearchBar';

const HeaderForMobile = () => {
    return (
        <>
            <Link to='/' className='flex md:hidden justify-center items-center gap-4 py-2'>
                <div className='flex items-center'>
                    <img src="/assets/logo.png" className='w-10' alt="logo" />
                    <p className="text-xl font-bold -ml-3 flex">enmart</p>
                </div>

            </Link>
            {/* <ToggleSearchBar className='border-2'></ToggleSearchBar> */}
        </>
    );
};

export default HeaderForMobile;
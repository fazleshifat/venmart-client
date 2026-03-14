import React from 'react';
import { Link } from 'react-router';
import ToggleSearchBar from './ToggleSearchBar';

const HeaderForMobile = () => {
    return (
        <>
            <div className='flex md:hidden justify-between items-center py-2.5 px-3 bg-white/50 dark:bg-slate-900/50 backdrop-blur-sm'>
                <Link to='/' className='flex items-center gap-0.5'>
                    <img src="/assets/logo.png" className='w-9' alt="logo" />
                    <p id="logo" className="text-lg bg-gradient-to-r from-indigo-600 to-purple-600 dark:from-indigo-400 dark:to-purple-400 bg-clip-text text-transparent tracking-wider">
                        VENMART
                    </p>
                </Link>

                <ToggleSearchBar></ToggleSearchBar>
            </div>
        </>
    );
};

export default HeaderForMobile;

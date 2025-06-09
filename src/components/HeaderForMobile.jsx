import React from 'react';
import { Link } from 'react-router';

const HeaderForMobile = () => {
    return (
        <Link className='flex md:hidden justify-center items-center gap-4 my-2'>
            <div className='flex items-center'>
                <img src="/assets/logo.png" className='w-10' alt="logo" />
                <p className="text-xl font-bold -ml-3 flex">enmart</p>
            </div>
            <div className='flex md:hidden gap-1'>
                <Link to='/logIn' className="btn btn-accent text-white">Login</Link>
                <Link to='/register' className="btn btn-error text-white">Register</Link>
            </div>

        </Link>
    );
};

export default HeaderForMobile;
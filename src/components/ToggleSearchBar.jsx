import React from 'react';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { IoSearchOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdSearchOff } from "react-icons/md";
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { useEffect } from 'react';

const ToggleSearchBar = () => {

    const { searchQuery, setSearchQuery } = use(AuthContext);

    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleShowSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    }


    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        // Clear input when route changes
        setSearchQuery('');
    }, [location.pathname]);

    const handleSearchItem = (e) => {
        setSearchQuery(e.target.value);
        navigate('/allProducts', { replace: true });
        // console.log(e.target.value);
    }

    return (
        <div className='relative flex '>
            {/* for small device */}
            <input value={searchQuery} onChange={(e) => handleSearchItem(e)} name="searchBar" type="text" placeholder="products..." className={`
                        input input-bordered mr-10 rounded-full max-w-2/3 md:w-auto mx-auto
                        transition-all duration-300 ease-in-out
                        focus:outline-none focus:ring-0 focus:border-transparent
                        ${showSearchBar ? 'opacity-100 scale-100 w-full' : 'opacity-0 scale-0 w-0'}
                      `}
            />
            <div className=''>
                {
                    !showSearchBar ?

                        < FiSearch onClick={handleShowSearchBar} className='absolute text-indigo-500 text-3xl right-1 mt-1 cursor-pointer' />
                        :
                        < MdSearchOff onClick={handleShowSearchBar} className='absolute text-indigo-500 text-4xl right-0 mt-1 cursor-pointer' />

                }
            </div>
        </div>
    );
};

export default ToggleSearchBar;
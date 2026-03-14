import React from 'react';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { FiSearch } from "react-icons/fi";
import { MdSearchOff } from "react-icons/md";
import { use } from 'react';
import { AuthContext } from '../AuthProvider/AuthContext';
import { useEffect } from 'react';

const ToggleSearchBar = () => {

    const { searchQuery, setSearchQuery } = use(AuthContext);

    const [showSearchBar, setShowSearchBar] = useState(false);

    const handleShowSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    }

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        setSearchQuery('');
    }, [location.pathname]);

    const handleSearchItem = (e) => {
        setSearchQuery(e.target.value);
        navigate('/allProducts', { replace: true });
    }

    return (
        <div className='relative flex items-center'>
            <input value={searchQuery} onChange={(e) => handleSearchItem(e)} name="searchBar" type="text" placeholder="Search products..." className={`
                        px-4 py-2 mr-10 rounded-xl border border-gray-200 dark:border-slate-600 bg-white dark:bg-slate-800 text-gray-800 dark:text-white text-sm placeholder-gray-400
                        transition-all duration-300 ease-out
                        focus:outline-none focus:ring-2 focus:ring-indigo-400/20 focus:border-indigo-300
                        ${showSearchBar ? 'opacity-100 scale-100 w-full' : 'opacity-0 scale-95 w-0 pointer-events-none'}
                      `}
            />
            <div>
                {
                    !showSearchBar ?
                        <FiSearch onClick={handleShowSearchBar} className='absolute text-indigo-500 hover:text-indigo-600 text-2xl right-1 top-1/2 -translate-y-1/2 cursor-pointer transition-colors' />
                        :
                        <MdSearchOff onClick={handleShowSearchBar} className='absolute text-indigo-500 hover:text-indigo-600 text-3xl right-0 top-1/2 -translate-y-1/2 cursor-pointer transition-colors' />
                }
            </div>
        </div>
    );
};

export default ToggleSearchBar;

import React from 'react';
import { useState } from 'react';
import { Navigate, useLocation, useNavigate } from 'react-router';
import { IoSearchOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { MdSearchOff } from "react-icons/md";

const ToggleSearchBar = () => {


    const [showSearchBar, setShowSearchBar] = useState(false);
    const [searchValue, setSearchValue] = useState('');

    const handleShowSearchBar = () => {
        setShowSearchBar(!showSearchBar);
    }

    const location = useLocation();
    // console.log(location)
    const navigate = useNavigate();

    const searchBarInput = document.getElementsByName('searchBar')[0];
    const handleSearchItem = (e) => {
        navigate('/allProducts')
        setSearchValue(e.target.value);

        if (e.target.value.length === 0) {
            navigate(-1);
        } else {
            navigate('/allProducts');
        }
    }

    return (
        <div className='relative flex '>
            {/* for small device */}
            <input onChange={handleSearchItem} name="searchBar" type="text" placeholder="products..." className={`
                        input input-bordered mr-10 rounded-full
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
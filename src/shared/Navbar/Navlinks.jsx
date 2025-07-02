import React from 'react';
import { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { NavLink } from 'react-router';

const NavLinks = () => {
    const { user } = use(AuthContext);

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/categories', label: 'Categories' },
        { to: '/allProducts', label: 'All Product' },
        ...(user
            ? [
                { to: '/addProduct', label: 'Add Product' },
                { to: '/myProduct', label: 'My Product' },
                { to: '/cart', label: 'Cart' },
            ]
            : []),
    ];

    return (
        <>
            {navItems.map(({ to, label }) => (
                <li key={to}>
                    <NavLink
                        to={to}
                        className={({ isActive }) =>
                            `group relative px-2 py-1 font-semibold transition duration-300 
                             ${isActive
                                ? 'text-indigo-400 dark:text-white'
                                : 'text-zinc-700 dark:text-zinc-300 hover:text-indigo-500 hover:dark:text-white'}`
                        }
                    >
                        {({ isActive }) => (
                            <span
                                className={`
                                    relative
                                    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-indigo-600 dark:after:bg-white
                                    after:transition-all after:duration-300 after:ease-in-out
                                    ${isActive ? 'after:w-full' : 'after:w-0 group-hover:after:w-full'}
                                `}
                            >
                                {label}
                            </span>
                        )}
                    </NavLink>
                </li>
            ))}
        </>
    );
};

export default NavLinks;

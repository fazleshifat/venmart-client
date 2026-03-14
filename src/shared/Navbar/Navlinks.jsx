import React from 'react';
import { use } from 'react';
import { AuthContext } from '../../AuthProvider/AuthContext';
import { NavLink } from 'react-router';

const NavLinks = () => {
    const { user } = use(AuthContext);

    const navItems = [
        { to: '/', label: 'Home' },
        { to: '/categories', label: 'Categories' },
        { to: '/allProducts', label: 'All Products' },
        ...(user
            ? [
                { to: '/addProduct', label: 'Add Product' },
                { to: '/myProduct', label: 'My Products' },
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
                            `group relative px-3 py-1.5 text-sm font-medium tracking-wide transition-all duration-300 rounded-lg
                             ${isActive
                                ? 'text-indigo-600 dark:text-indigo-300 bg-indigo-50/80 dark:bg-indigo-500/10'
                                : 'text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:dark:text-indigo-300 hover:bg-indigo-50/50 dark:hover:bg-indigo-500/5'}`
                        }
                    >
                        {({ isActive }) => (
                            <span
                                className={`
                                    relative
                                    after:absolute after:left-1/2 after:-translate-x-1/2 after:-bottom-0.5 after:h-[2px] after:rounded-full after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 dark:after:from-indigo-400 dark:after:to-purple-400
                                    after:transition-all after:duration-300 after:ease-out
                                    ${isActive ? 'after:w-4/5' : 'after:w-0 group-hover:after:w-3/5'}
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

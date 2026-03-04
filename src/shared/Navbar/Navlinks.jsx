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
                            `group relative px-2 py-1 font-medium tracking-wide transition duration-300
                             ${isActive
                                ? 'text-indigo-600 dark:text-indigo-300'
                                : 'text-zinc-600 dark:text-zinc-300 hover:text-indigo-600 hover:dark:text-indigo-300'}`
                        }
                    >
                        {({ isActive }) => (
                            <span
                                className={`
                                    relative
                                    after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 dark:after:from-indigo-400 dark:after:to-purple-400
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

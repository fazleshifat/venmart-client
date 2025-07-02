import React from 'react';
import { Link } from 'react-router';
import NavLinks from './Navbar/Navlinks';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-gray-300 px-6 py-16">
            <div className="max-w-[1400px] mx-auto flex flex-col items-center gap-12">
                {/* Top Section: Logo, Description, Address, Social Icons */}
                <div className="flex flex-col md:flex-row text-center justify-between w-full gap-12">
                    {/* Logo & Info */}
                    <div className="flex flex-col mx-auto space-y-6 md:w-1/2">
                        <div className="flex items-center mx-auto">
                            <img
                                src="/assets/logo.png"
                                alt="VenMart Logo"
                                className="w-16 h-16 object-contain rounded-lg shadow-lg mx-2"
                            />
                            <h1 className="text-3xl font-extrabold text-white tracking-wide">
                                VenMart
                            </h1>
                        </div>
                        <p className="text-gray-400 leading-relaxed">
                            VenMart is your trusted partner for industrial solutions,
                            offering customized manufacturing, logistics, procurement,
                            and after-sales services to keep your business running smoothly.
                        </p>
                        <address className="not-italic text-gray-400 space-y-2">
                            <p><strong>Address:</strong> 123 Industrial Ave, Suite 400, Cityville, USA</p>
                            <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                            <p><strong>Email:</strong> support@venmart.com</p>
                        </address>

                        {/* Social Icons */}
                        <div className="flex mx-auto space-x-6 mt-4">

                            <Link
                                to="https://web.facebook.com/al.fazle.shifat/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-600 text-3xl hover:text-[#34d399] transition-colors"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </Link>

                            <Link
                                to="https://github.com/fazleshifat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-600 text-3xl hover:text-[#34d399] transition-colors"
                                aria-label="GitHub"
                            >
                                <FaGithub />
                            </Link>

                            <Link
                                to="https://www.linkedin.com/in/fazle-shifat-5490a8270/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-sky-600 text-3xl hover:text-[#34d399] transition-colors"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin />
                            </Link>
                        </div>
                    </div>
                </div>

                {/* NavLinks */}
                <nav className="w-full">
                    <ul className="flex flex-wrap gap-6 text-gray-400 justify-center text-sm md:text-base">
                        <NavLinks></NavLinks>
                    </ul>
                </nav>

                {/* Copyright */}
                <div className="border-t border-gray-700 pt-6 text-center w-full text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} VenMart Industries. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
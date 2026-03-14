import React from 'react';
import { Link } from 'react-router';
import NavLinks from './Navbar/Navlinks';
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-b from-slate-900 via-[#0f172a] to-[#020617] text-gray-300 px-6 pt-20 pb-10 border-t border-indigo-500/10">
            <div className="max-w-[1300px] mx-auto">
                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">
                    {/* Brand Column */}
                    <div className="space-y-5">
                        <div className="flex items-center gap-1">
                            <img
                                src="/assets/logo.png"
                                alt="VenMart Logo"
                                className="w-12 h-12 object-contain"
                            />
                            <h1 id="logo" className="text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                                VENMART
                            </h1>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Your trusted partner for industrial solutions — offering customized manufacturing, logistics, procurement, and after-sales services.
                        </p>
                        {/* Social Icons */}
                        <div className="flex gap-3 pt-2">
                            <Link
                                to="https://web.facebook.com/al.fazle.shifat/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebook className="text-lg" />
                            </Link>
                            <Link
                                to="https://github.com/fazleshifat"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
                                aria-label="GitHub"
                            >
                                <FaGithub className="text-lg" />
                            </Link>
                            <Link
                                to="https://www.linkedin.com/in/fazle-shifat-5490a8270/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-indigo-400 hover:bg-indigo-500/10 hover:border-indigo-500/30 transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="text-lg" />
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links Column */}
                    <div className="space-y-5">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Quick Links</h3>
                        <nav>
                            <ul className="space-y-3 text-sm">
                                <NavLinks></NavLinks>
                            </ul>
                        </nav>
                    </div>

                    {/* Contact Column */}
                    <div className="space-y-5">
                        <h3 className="text-white font-semibold text-sm uppercase tracking-widest">Contact Us</h3>
                        <div className="space-y-3 text-sm text-gray-400">
                            <div className="flex items-start gap-3">
                                <span className="mt-0.5 text-indigo-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                                </span>
                                <p>123 Industrial Ave, Suite 400, Cityville, USA</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-indigo-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                                </span>
                                <p>+1 (555) 123-4567</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <span className="text-indigo-400">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                                </span>
                                <p>support@venmart.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-xs">
                        &copy; {new Date().getFullYear()} VenMart Industries. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <span className="hover:text-indigo-400 cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-indigo-400 cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

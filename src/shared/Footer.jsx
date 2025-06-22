import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-gray-300 px-12 py-16">
            <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row gap-16">
                {/* Left Side - Logo & Description */}
                <div className="flex flex-col items-start md:w-1/3 space-y-6">
                    <div className="flex items-center">
                        <img
                            src="/assets/logo.png"
                            alt="VenMart Logo"
                            className="w-20 h-20 object-contain rounded-lg shadow-lg mx-2"
                        />
                        <h1 className="text-4xl font-extrabold text-white tracking-wide">
                            VenMart
                        </h1>
                    </div>
                    <p className="text-gray-400 leading-relaxed">
                        VenMart is your trusted partner for industrial solutions,
                        offering customized manufacturing, logistics, procurement, and
                        after-sales services to keep your business running smoothly.
                    </p>
                    <address className="not-italic text-gray-400 space-y-2">
                        <p><strong>Address:</strong> 123 Industrial Ave, Suite 400, Cityville, USA</p>
                        <p><strong>Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>Email:</strong> support@venmart.com</p>
                    </address>
                    <div className="flex space-x-6 mt-4">
                        {/* Social Icons */}
                        <Link
                            to="https://twitter.com/venmart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#34d399] transition-colors"
                            aria-label="Twitter"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </Link>
                        <Link
                            to="https://youtube.com/venmart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#34d399] transition-colors"
                            aria-label="YouTube"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                            </svg>
                        </Link>
                        <Link
                            to="https://facebook.com/venmart"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-[#34d399] transition-colors"
                            aria-label="Facebook"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-7 h-7"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </Link>
                    </div>
                </div>

                {/* Right Side - Links & Info Sections */}
                <div className="flex flex-wrap gap-12 md:w-2/3 justify-between">
                    {/* Company */}
                    <div className="min-w-[160px]">
                        <h3 className="text-xl font-semibold text-[#34d399] mb-4">Company</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link to="/about" className="hover:text-white transition">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link to="/careers" className="hover:text-white transition">
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link to="/blog" className="hover:text-white transition">
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link to="/press" className="hover:text-white transition">
                                    Press
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="min-w-[160px]">
                        <h3 className="text-xl font-semibold text-[#34d399] mb-4">Services</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link to="/services/manufacturing" className="hover:text-white transition">
                                    Custom Manufacturing
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/equipment" className="hover:text-white transition">
                                    Equipment Supply
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/logistics" className="hover:text-white transition">
                                    Logistics Support
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/consultancy" className="hover:text-white transition">
                                    Technical Consultancy
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/support" className="hover:text-white transition">
                                    After-Sales Support
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/installation" className="hover:text-white transition">
                                    On-Site Installation
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/training" className="hover:text-white transition">
                                    Training Programs
                                </Link>
                            </li>
                            <li>
                                <Link to="/services/procurement" className="hover:text-white transition">
                                    Procurement Planning
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className="min-w-[160px]">
                        <h3 className="text-xl font-semibold text-[#34d399] mb-4">Resources</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>
                                <Link to="/faq" className="hover:text-white transition">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link to="/support" className="hover:text-white transition">
                                    Support Center
                                </Link>
                            </li>
                            <li>
                                <Link to="/documentation" className="hover:text-white transition">
                                    Documentation
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:text-white transition">
                                    Terms of Service
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:text-white transition">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="min-w-[160px]">
                        <h3 className="text-xl font-semibold text-[#34d399] mb-4">Contact Us</h3>
                        <ul className="space-y-3 text-gray-400">
                            <li>Phone: +1 (555) 123-4567</li>
                            <li>Email: contact@venmart.com</li>
                            <li>Fax: +1 (555) 987-6543</li>
                            <li>Office Hours: Mon-Fri, 9am - 6pm</li>
                            <li>123 Industrial Ave, Cityville</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-16 pt-8 text-center text-gray-500 text-sm">
                &copy; {new Date().getFullYear()} VenMart Industries. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
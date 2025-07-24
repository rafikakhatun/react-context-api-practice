import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300 px-10 py-12">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold text-white mb-4">Context API</h2>
                    <p className="text-sm">
                        We help you learn React, JavaScript, and MERN Stack in a structured and practical way.
                    </p>
                    <div className="flex space-x-4 mt-4">
                        <FaFacebookF className="hover:text-blue-500 cursor-pointer" />
                        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                        <FaInstagram className="hover:text-pink-400 cursor-pointer" />
                        <FaLinkedin className="hover:text-blue-300 cursor-pointer" />
                    </div>
                </div>

                {/* Links Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-yellow-400">Home</a></li>
                        <li><a href="#" className="hover:text-yellow-400">About</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Courses</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
                    </ul>
                </div>

                {/* Support Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Support</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-yellow-400">Help Center</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Terms of Service</a></li>
                        <li><a href="#" className="hover:text-yellow-400">Contact Us</a></li>
                    </ul>
                </div>

                {/* Newsletter Section */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Newsletter</h3>
                    <p className="text-sm mb-3">Subscribe to get our latest updates.</p>
                    <form className="flex flex-col sm:flex-row gap-2 md:mr-8">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="px-3 py-2 rounded-md  outline-none text-white placeholder:text-white w-full sm:w-auto border focus:border-yellow-500"
                        />
                        <button
                            type="submit"
                            className="bg-yellow-500 text-gray-900 font-semibold px-4 py-2 rounded-md hover:bg-yellow-400"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center py-4 border-t border-gray-700 mt-10 text-sm">
               © 2025 Context API. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;


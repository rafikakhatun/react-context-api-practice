import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-white shadow-md py-4">
            <div className="container mx-auto px-8 flex justify-between items-center">
                
                {/* Logo Title Only */}
                <h1 className="text-2xl font-bold text-blue-700">
                    Context API
                </h1>

                {/* Navigation */}
                <nav className="space-x-6 text-gray-600 font-medium">
                    <Link to="/home" className="hover:text-blue-600">Home</Link>
                    <Link to="/about" className="hover:text-blue-600">About</Link>
                    <Link to="/contact" className="hover:text-blue-600">Contact</Link>
                    <Link to="/drashboard" className="hover:text-blue-600">Dashboard</Link>
                </nav>
                {/* Reginter button */}
                <button className='px-4 py-2 cursor-pointer bg-blue-600 text-white rounded-xl'>Register Now</button>
            </div>
        </header>
    );
};

export default Header;

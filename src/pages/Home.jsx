import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';





const Home = () => {


// context api data use 
const {data} = useContext(AuthContext);
console.log(data)





    return (
        <section className="min-h-[80vh] flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-600 px-6">
            <div className="text-center text-white space-y-6 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold">Welcome to Our Website</h1>
                <h1 className='text-xl font-bold  text-white'>{data}</h1>
                <p className="text-lg md:text-xl">
                    Discover the power of React and Tailwind CSS. Build fast, responsive, and modern web applications with ease.
                </p>
                <button className="px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full hover:bg-yellow-400 transition">
                    Get Started
                </button>
            </div>
        </section>
    );
};

export default Home;

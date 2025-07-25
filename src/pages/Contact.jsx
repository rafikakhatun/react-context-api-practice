import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Contact = () => {


    // context api data uses
     const {data} = useContext(AuthContext)
     console.log(data)






    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
             {/* context api data show */}
                <h1 className='text-2xl font-bold text-blue-600 text-center mb-6'>{data}</h1>
           
            <div className="bg-white shadow-xl rounded-xl p-8 w-full max-w-xl">
                <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">Contact Us</h2>
                
                <form className="space-y-6">
                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Your Name</label>
                        <input
                            type="text"
                            placeholder="Enter your name"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div>
                        <label className="block mb-1 font-medium text-gray-700">Message</label>
                        <textarea
                            rows="4"
                            placeholder="Write your message here..."
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;

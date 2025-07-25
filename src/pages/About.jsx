import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const About = () => {

    // context api data uses

    const { data } = useContext(AuthContext)
    console.log(data)





    return (
        <section className="bg-white py-16 px-4 md:px-10">
            <div className="max-w-5xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">About Us</h2>
                <h1 className="text-xl font-bold  text-blue-600 mb-4">{data}</h1>

                <p className="text-lg text-gray-600 mb-4">
                    Welcome to <span className="text-blue-600 font-semibold">Context API</span> – your go-to solution for modern and efficient web applications.
                </p>
                <p className="text-gray-600">
                    We are a passionate team of developers committed to delivering high-quality solutions using the latest technologies like React, Tailwind CSS, and the Context API.
                    Our mission is to simplify development while offering rich and scalable user experiences.
                </p>

            </div>
        </section>
    );
};

export default About;

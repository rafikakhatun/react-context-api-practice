import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {

    const { register } = useContext(AuthContext);

    console.log(register)

    const handleSubmit = (e) => {
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        register(email, password)
            .then(user => {
                console.log(user)
            }).catch(error => console.log(error));

    }








    return (
        <>
            <div className='w-full h-[400px] flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='p-8 shadow-lg rounded-md border border-gray-300 w-full max-w-md space-y-6'>
                    <div className='space-y-2'>
                        <label className='block text-lg text-gray-800'>Email</label>
                        <input className=' w-full px-4 py-3 rounded-md outline-none border border-gray-300 bg-gray-200' type="email" placeholder='Enter a valid Email' name="email" />
                    </div>

                    <div className='space-y-2'>
                        <label className='block text-lg text-gray-800'>Password</label>
                        <input className='w-full px-4 py-3 rounded-md outline-none border border-gray-300 bg-gray-200' type="password" name="password" />
                    </div>

                    <button className='w-full px-4 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'>Register</button>

                </form>

            </div>
        </>
    );
};

export default Register;
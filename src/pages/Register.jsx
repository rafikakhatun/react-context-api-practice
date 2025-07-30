import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

const Register = () => {

    const { register } = useContext(AuthContext);



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
            <div className='w-full h-screen flex justify-center items-center'>
                <form onSubmit={handleSubmit} className='p-8 shadow-lg rounded-md border border-gray-300 w-full max-w-md space-y-6'>
                    <h1 className='text-center text-2xl font-semibold text-gray-700 underline underline-offset-7 '>Registration Now</h1>
                    <div className='space-y-2'>
                        <label className='block text-lg text-gray-800'>Email</label>
                        <input className=' w-full px-4 py-3 rounded-md outline-none border border-gray-300 bg-gray-200' type="email" placeholder='Enter a valid Email' name="email" />
                    </div>

                    <div className='space-y-2'>
                        <label className='block text-lg text-gray-800'>Password</label>
                        <input className='w-full px-4 py-3 rounded-md outline-none border border-gray-300 bg-gray-200' type="password" name="password" />
                    </div>

                    {/*Show password and terms and condition */}
                    <div className='flex justify-between'>
                        <div className='flex gap-1'>
                            <input type="checkbox" id="showPassword" />
                            <label className='text-sm' htmlFor="showPassword">Show password</label>
                        </div>

                        <div className='flex gap-1'>
                            <input type="checkbox" id="termsCondition" />
                            <label className='text-sm' htmlFor="termsCondition">I agree to <Link to="/termsCondition" className='text-blue-700 cursor-pointer'>terms & condition</Link></label>
                        </div>


                    </div>


                    <button className='w-full px-4 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'>Register</button>

                    {/* Continue with google */}
                    <div className='flex justify-center items-center space-x-2'>
                        <hr className='border w-1/5 border-gray-700' />
                        <span className='text-gray-700'>Or Continue With</span>
                        <hr className='border w-1/5 border-gray-700' />
                    </div>

                    {/* continue with Google*/}
                    <button className='w-full cursor-pointer'>
                        <div className="flex items-center justify-center gap-2 px-6 py-2 border border-gray-300 shadow rounded-md text-md text-gray-700">
                            <FcGoogle className='w-6 h-6' />
                            <span>Continue With Google</span>
                        </div>
                    </button>

                    {/*Already have an account */}
                    <div className='flex gap-2 justify-center items-center'>
                        <span className='text-gray-700'>Already have an account? Please</span>
                        <Link className='text-blue-600' to="/login">Login</Link>
                    </div>


                </form>

            </div>
        </>
    );
};

export default Register;
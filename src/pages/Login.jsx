import React from 'react';

const Login = () => {
    return (
        <>
            <div className='w-full h-[500px] flex justify-center items-center'>
                <form className='p-8 shadow-lg rounded-md border border-gray-300 w-full max-w-md space-y-6'>
                    <h1 className='text-center text-2xl font-semibold text-gray-700 underline underline-offset-7 '>Login</h1>
                    {/* Email field */}
                    <div className='space-y-2'>
                        <label className='block text-lg text-gray-800'>Email</label>
                        <input className=' w-full px-4 py-3 rounded-md outline-none border border-gray-300 bg-gray-200' type="email" placeholder='Enter a valid Email' name="email" />
                    </div>

                    {/*Password Field*/}
                    <div className='space-y-2'>
                        <label className='block text-lg text-gray-800'>Password</label>
                        <input className='w-full px-4 py-3 rounded-md outline-none border border-gray-300 bg-gray-200' type="password" name="password" />
                    </div>

                    {/* Continue with google */}
                    <div className='flex justify-center items-center space-x-2'>
                        <hr className='border w-1/4 border-gray-700' />
                        <span>Or Continue With</span>
                        <hr className='border w-1/4 border-gray-700' />
                    </div>



                    <button className='w-full px-4 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'>Login</button>



                </form>

            </div>


        </>
    );
};

export default Login;
import React from 'react';

const Register = () => {
    return (
        <div>

            <form>
                <div>
                    <label>Email</label>
                    <input type="email" placeholder='Enter a valid Email' name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" />
                </div>
            </form>
            
        </div>
    );
};

export default Register;
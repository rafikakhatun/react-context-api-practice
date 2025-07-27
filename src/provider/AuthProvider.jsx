import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext } from 'react';


// contect api uses

export const AuthContext = createContext(null);







const AuthProvider = ({ children }) => {

    // Email and password authentication 

    const register = (email,password)=>{

        return createUserWithEmailAndPassword(auth,email,password);

    


    }


    //  Sample user info for testing Context API data sharing

    const userInfo = {

        data: "Context API empowers our React app by enabling smooth and efficient state sharing across components without prop drilling.",
        register,

    }


    








    return (
        <>

            <AuthContext.Provider value={userInfo}>

                {children}

            </AuthContext.Provider>







        </>
    );
};

export default AuthProvider;   
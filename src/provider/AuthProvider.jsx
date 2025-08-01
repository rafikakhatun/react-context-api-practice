import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import auth from '../firebase/FirebaseInit';


// contect api uses

export const AuthContext = createContext(null);









const AuthProvider = ({ children }) => {

    // user details useState
    const [details, setDetails] = useState(null);



    // Register with Email and password authentication 

    const register = (email, password) => {

        return createUserWithEmailAndPassword(auth, email, password);
    }

    // Login with Email and password authentication

    const login = (email,password) => {

     return   signInWithEmailAndPassword(auth,email,password);




    }


    //  Sample user info for testing Context API data sharing

    const userInfo = {

        data: "Context API empowers our React app by enabling smooth and efficient state sharing across components without prop drilling.",
        register,
        details,
        setDetails,
        login

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
import React, { Children, createContext } from 'react';


// contect api uses

export const AuthContext = createContext(null);

const userInfo = {

    data: "This is my Website",

}





const AuthProvider = ({children}) => {
    return (
        <>

            <AuthContext.Provider value={userInfo}>

                {children}

            </AuthContext.Provider>







        </>
    );
};

export default AuthProvider;   
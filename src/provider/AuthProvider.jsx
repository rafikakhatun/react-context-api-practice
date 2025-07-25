import React, { Children, createContext } from 'react';


// contect api uses

export const AuthContext = createContext(null);

const userInfo = {

    data: "Context API empowers our React app by enabling smooth and efficient state sharing across components without prop drilling.",

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
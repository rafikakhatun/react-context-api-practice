import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {details,loading} = useContext(AuthContext);

    if(loading){
        return <h2>loading...</h2>
    }
    if(details){
        return children;
    }



    return (
       <Navigate to="/login"></Navigate>
    );
};

export default PrivateRoute;
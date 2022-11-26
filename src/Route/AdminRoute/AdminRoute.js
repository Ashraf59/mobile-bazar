import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import useAdmin from '../../hooks/useAdmin';
import Spinner from '../../Pages/Shared/Spinner/Spinner';


// Step- 09(Admin)
const AdminRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);

    // Step- 10(Admin)
    const [isAdmin, isAdminLoading] = useAdmin(user?.email);

    const location = useLocation();

    // for loading 
    if(loading || isAdminLoading){
        return <Spinner></Spinner>
    }

    if(user && isAdmin ){
        return children;
    }

    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default AdminRoute;
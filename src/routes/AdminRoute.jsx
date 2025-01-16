import React from 'react';
import useAuth from '../hooks/useAuth';
import { useLocation } from 'react-router-dom';
import useCheckRole from '../hooks/useCheckRole';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const AdminRoute = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [role, isloading] = useCheckRole();

    if (loading || isloading) return <LoadingSpinner />
    if (role === 'admin') return children
    return <Navigate to='/' state={{ from: location }} replace='true' />
}



export default AdminRoute;
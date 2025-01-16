import React from 'react';
import useAuth from '../hooks/useAuth';
import useCheckRole from '../hooks/useCheckRole';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const TeacherRoute = ({children}) => {
    const { user, loading } = useAuth()
    const location = useLocation();
    const [role, isloading] = useCheckRole();

    if (loading || isloading) return <LoadingSpinner />
    if (role === 'teacher') return children
    return <Navigate to='/dashboard' replace='true' />
}


export default TeacherRoute;
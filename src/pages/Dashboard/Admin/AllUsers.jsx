import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAlluser from '../../../hooks/useAlluser';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const AllUsers = () => {
    const {user} = useAuth();
    const [allUsers, refetch, isLoading] = useAlluser();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    return (
        <section>
            
        </section>
    );
};

export default AllUsers;
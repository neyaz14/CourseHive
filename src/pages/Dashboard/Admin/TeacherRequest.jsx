import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useCheckRole from '../../../hooks/useCheckRole';
import useAlluser from '../../../hooks/useAlluser';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const TeacherRequest = () => {
    const {user} = useAuth();
    const [users, refetch, isLoading] = useAlluser()
    // const [role , isLoading, refetch] = useCheckRole();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>;
    const RequestedStudents = [...users].map(teacher=>teacher.status ==='requested')
    return (
        <section>
            
        </section>
    );
};

export default TeacherRequest;
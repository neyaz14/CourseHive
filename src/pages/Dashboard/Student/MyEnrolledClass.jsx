import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAllCourses from '../../../hooks/useAllCourses';
import useAllAssignments from '../../../hooks/useAllAssignments';

const MyEnrolledClass = () => {
    // const {user} = useAuth();
    // const [courses, refetch, isLoading] = useAllCourses();
    // const [assignments] = useAllAssignments();


    return (
        <section>
            <div>
                <p className='text-4xl'>My Enrolled Classes</p>
            </div>
            {/* all course table  */}
            <div>

            </div>
        </section>
    );
};

export default MyEnrolledClass;
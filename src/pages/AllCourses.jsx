import React from 'react';
import useAllCourses from '../hooks/useAllCourses';


const AllCourses = () => {
    const AllCourses = useAllCourses();
    const [courses, refetch] = AllCourses ;
    console.log(courses.length)
    return (
        <div>
            {courses.length}
            
        </div>
    );
};

export default AllCourses;
import React from 'react';
import Container from '../../Shared/Container';
import useAllCourses from '../../../hooks/useAllCourses';
import CourseCard from '../../Shared/CourseCard';
import LoadingSpinner from '../../Shared/LoadingSpinner';

const PopularCourses = () => {
    const AllCourses = useAllCourses();
    const [courses, refetch, isLoading] = AllCourses ;
    const acceptedCourses = [...courses].filter(i=>i.status ==="accepted");
    const sortedCourses = [...acceptedCourses].sort((a, b) => b.TotalEnrollment - a.TotalEnrollment).slice(0, 3);
    // TODO : fix it accroding to highest enrollment
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    refetch();
    return (
        // className='bg-[#fee68e]'
        // TODO : design it more beautifully
        <Container>
            <div className='my-6'>
                <p className='text-4xl text-[#2c2e2d] font-bold text-center'>Popular Courses </p>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    sortedCourses.map(course=> <CourseCard course={course} key={course._id}></CourseCard>)
                }
            </div>

            
            
        </Container>
    );
};

export default PopularCourses;
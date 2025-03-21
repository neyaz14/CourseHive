import React from 'react';
import useAllCourses from '../hooks/useAllCourses';
import Container from '../components/Shared/Container';
import CourseCard from '../components/Shared/CourseCard';
import LoadingSpinner from '../components/Shared/LoadingSpinner';


const AllCourses = () => {
    const AllCourses = useAllCourses();
    const [courses, refetch, isLoading] = AllCourses ;
    const acceptedCourses = [...courses].filter(i=>i.status ==="accepted")
    if(isLoading)  return <LoadingSpinner></LoadingSpinner>
    refetch();
    // console.log(courses.length)
    return (
        <Container>
            <div className='my-5'>
                <h1 className='text-4xl text-[#2c2e2d] font-bold text-center'>All Courses</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    acceptedCourses.map(course=> <CourseCard course={course} key={course._id}></CourseCard>)
                }
            </div>

            
            
        </Container>
    );
};

export default AllCourses;
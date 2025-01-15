import React from 'react';
import useAllCourses from '../hooks/useAllCourses';
import Container from '../components/Shared/Container';
import CourseCard from '../components/Shared/CourseCard';


const AllCourses = () => {
    const AllCourses = useAllCourses();
    const [courses, refetch] = AllCourses ;
    console.log(courses.length)
    return (
        <Container>
            {courses.length}
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
                {
                    courses.map(course=> <CourseCard course={course} key={course._id}></CourseCard>)
                }
            </div>

            
            
        </Container>
    );
};

export default AllCourses;
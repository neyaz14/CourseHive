import React from 'react';
import useAllCourses from './useAllCourses';
import useAlluser from './useAlluser';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const useStat = () => {
    const [courses, refetch, isloading] = useAllCourses();
    const [users,,isLoading] = useAlluser();
    if(isloading) return <LoadingSpinner></LoadingSpinner>
    const CourseLength = courses.length;
    const usersLength = users.length;
    const EnrollmentLength = courses.reduce((sum, course) => sum + course.TotalEnrollment, 0);
    console.log(CourseLength, usersLength, EnrollmentLength)
    const statInfo = {CourseLength, usersLength, EnrollmentLength}
    refetch();
    return statInfo
};

export default useStat;
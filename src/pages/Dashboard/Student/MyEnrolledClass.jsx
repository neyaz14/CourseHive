import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAllCourses from '../../../hooks/useAllCourses';
import useAllAssignments from '../../../hooks/useAllAssignments';
import useEnrollmentInfo from '../../../hooks/useEnrollmentInfo';
import { FaCheck, FaUsers } from 'react-icons/fa';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { Link } from 'react-router-dom';
const MyEnrolledClass = () => {
    const { user } = useAuth();
    const [courses] = useAllCourses();
    const [enrolleCourse, refetch, isLoading] = useEnrollmentInfo();
    const [assignments] = useAllAssignments();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    console.log(enrolleCourse)

    return (
        <section>
            <div>
                <p className='text-4xl'>My Enrolled Classes</p>
            </div>
            {/* all course table  */}
            <div className="overflow-x-auto text-xs text-black">
                <table className="table  table-xs w-full">
                    {/* head */}
                    <thead >
                        {/* TODO : make it responsive */}
                        <tr className='flex items-center justify-between text-black'>
                            {/* TODO : write flex-1 in every-form */}
                            <th className='flex-1'>Title</th>
                            <th className='w-8 flex-1'>Image</th>
                            <th className='flex-1'>Teacher Email</th>
                            <th className='flex-1'>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            enrolleCourse.map((course, index) =>
                                <tr
                                    className='flex items-center justify-between'
                                    key={course._id}>
                                    <td className='flex-1'>{course?.title}</td>
                                    <td className='flex-1'><img src={course?.image} alt="" className='w-8' /></td>
                                    <td className='flex-1'>{course?.TeacherEmail}</td>
                                 
                                    <td className='flex flex-1 gap-1 md:gap-3'>

                                        <Link to={`${course?._id}`}>
                                            <button
                                                className="btn btn-sm border-none bg-orange-500">
                                                <FaCheck className="text-white 
                                                                text-2xl"></FaCheck >
                                            </button>
                                        </Link>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default MyEnrolledClass;
import React from 'react';
import useAllCourses from '../../../hooks/useAllCourses';
import { FaBan, FaCheck, FaUsers } from 'react-icons/fa';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import useAuth from '../../../hooks/useAuth';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AllCoursesAdmin = () => {
    const AxiosSecure = useAxiosSecure();
    const {user} = useAuth();
    const [courses, refetch, isLoading] = useAllCourses();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>



    const handleAccept=async (cors)=>{
        try {
                    const res = await AxiosSecure.patch(`/courses/acept/${cors._id}`)
                    console.log(res.data)
                    if (res.data.modifiedCount) {
                        Swal.fire({
                            title: "Successfully approved ",
                            icon: "success",
                            draggable: true
                        });
                        refetch();
                    }
                } catch (err) {
                    console.log(err)
                    Swal.fire({
                        title: { err },
                        icon: "error",
                        draggable: true
                    });
                }
    }

    const handleRejectCourse=async (cors)=>{
        try {
                    const res = await AxiosSecure.patch(`/courses/reject/${cors._id}`)
                    console.log(res.data)
                    if (res.data.modifiedCount) {
                        Swal.fire({
                            title: "Successfully Rejected ",
                            icon: "success",
                            draggable: true
                        });
                        refetch();
                    }
                } catch (err) {
                    console.log(err)
                    Swal.fire({
                        title: { err },
                        icon: "error",
                        draggable: true
                    });
                }
    }
    return (
        <div>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Courses</h2>
                <h2 className="text-3xl"> {courses?.length}</h2>
            </div>
            <div className="overflow-x-auto text-xs text-black">
                <table className="table  table-xs w-full">
                    {/* head */}
                    <thead >
                        {/* TODO : make it responsive */}
                        <tr className='flex items-center justify-between text-black'>
                            <th>Title</th>
                            <th className='w-8 '>Image</th>
                            <th>Teacher Email</th>
                            <th>Progress</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            courses.map((course, index) =>
                                <tr
                                    className='flex items-center justify-between'
                                    key={course._id}>
                                    <td>{course?.title}</td>
                                    <td><img src={course?.image} alt="" className='w-8' /></td>
                                    <td>{course?.TeacherEmail}</td>
                                    <td>{course?.status}</td>
                                    <td className='flex gap-1 md:gap-3'>
                                        {course?.status === 'pending' ?
                                            <>
                                                <button
                                                    onClick={() => handleAccept(course)}
                                                    className="btn btn-sm border-none bg-orange-500">
                                                    <FaCheck  className="text-white 
                                                    text-2xl"></FaCheck >
                                                </button>
                                                <button
                                                    onClick={() => handleRejectCourse(course)}
                                                    className="btn btn-sm border-none bg-orange-500">
                                                    <FaBan  className="text-white 
                                                    text-2xl"></FaBan >
                                                </button>
                                            </>
                                            // TODO : fix this button condition 
                                            : <button
                                                // onClick={() => handleMakeAdmin(course)}
                                                className="btn btn-disabled btn-sm border-none bg-orange-500">
                                                <FaUsers className="text-white 
                                            text-2xl"></FaUsers>
                                            </button>
                                        }
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllCoursesAdmin;
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import useAllCourses from '../../../hooks/useAllCourses';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { FaRegFileLines, FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6';

const AssingmentsTable = () => {
  const {id} = useParams();
    const AxiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [courses, refetch, isLoading] = useAllCourses();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
  
    const courseDetails = [...courses].filter(course => course?.TeacherEmail === user?.email && course._id===id);
    // console.log(courseDetails, id)
    const CourseD = courseDetails[0]
    return (
        <section>
             <div className="overflow-x-auto text-xs text-black">
                      <table className="table  table-xs w-full">
                        {/* head */}
                        <thead >
                          {/* TODO : make it responsive */}
                          <tr className='flex items-center justify-between text-black'>
                            <th className='flex-1'>Title</th>
                            <th className='w-8 flex-1'>Image</th>
                            <th className='flex-1'>Teacher Email</th>
                            <th className='flex-1'>Price</th>
                            <th className='flex-1'>Status</th>
                            <th className='flex-1'>Action</th>
                          </tr>
                        </thead>
                        <tbody >
                          
                              <tr
                                className='flex items-center justify-between'>
                                <td className='flex-1'></td>
                                <td className='flex-1'><img src='' alt="" className='w-8' /></td>
                                <td className='flex-1'></td>
                                <td className='flex-1'></td>
                                <td className='flex-1'></td>
                                <td className='flex flex-1 gap-1 md:gap-3'>
                                  
                                 
            {/* TODO : apply conditional based on status */}
                                      <button
                                        // onClick={() => handleUpdate(course)}
                                        className="btn btn-sm border-none bg-orange-500">
                                        <FaRegPenToSquare className="text-white 
                                        text-2xl"></FaRegPenToSquare >
                                      </button>
                                      <Link >
                                        <button
                                          // onClick={() => handledetails(course)}
                                          className="btn btn-sm border-none bg-orange-500">
                                          <FaRegFileLines  className="text-white text-2xl">
                                          </FaRegFileLines   >
                                        </button>
                                      </Link>
                                      <button
                                        // onClick={() => handleDelete(course)}
                                        className="btn btn-sm border-none bg-orange-500">
                                        <FaRegTrashCan  className="text-white text-2xl"></FaRegTrashCan  >
                                      </button>
                                
                                </td>
                              </tr>
                         
                        </tbody>
                      </table>
                    </div>
        </section>
    );
};

export default AssingmentsTable;
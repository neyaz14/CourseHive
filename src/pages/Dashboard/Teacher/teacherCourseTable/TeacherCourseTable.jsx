import React, { useState } from 'react';
import { FaRegFileLines, FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6';
import UpdateCourseModal from '../../../../components/Modal/UpdateCourseModal';
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const TeacherCourseTable = ({ course, refetch }) => {
    const AxiosSecure = useAxiosSecure();
    const [isOpen, setIsOpen] = useState(false)
    const [EditModalOpen, setIsEditModalOpen] = useState(false);

   
    const handleDelete = async (cours) => {
        try {
            const res = await AxiosSecure.delete(`/courses/${cours._id}`)
            if (res.data.deletedCount) {
          
                toast.success('Successfully deleted a course !')
                refetch();
            }
        }
        catch (err) {
            toast.error(err)
        }
    }
    return (
        <>
            <tr
                className='flex items-center justify-between'
                key={course._id}>
                <td className='flex-1'>{course?.title}</td>
                <td className='flex-1'><img src={course?.image} alt="" className='w-8' /></td>
                <td className='flex-1'>{course?.TeacherEmail}</td>
                <td className='flex-1'>{course?.price}</td>
                <td className='flex-1'>{course?.status}</td>
                <td className='flex flex-1 gap-1 md:gap-3'>
                    <div>
                        <button
                            onClick={() => handleDelete(course)}
                            className="btn btn-sm border-none bg-orange-500">
                            <FaRegTrashCan className="text-white text-2xl"></FaRegTrashCan  >
                        </button>
                    </div>



                    <div>
                        {course.status === 'accepted'
                            ?
                            <>
                                <button
                                    onClick={() => setIsEditModalOpen(true)}

                                    className="btn btn-sm border-none bg-orange-500">
                                    <FaRegPenToSquare className="text-white 
                                        text-2xl"></FaRegPenToSquare >
                                    
                                    <UpdateCourseModal
                                        refetch={refetch}
                                        course={course}
                                        EditModalOpen={EditModalOpen}
                                        setIsEditModalOpen={setIsEditModalOpen}
                                    ></UpdateCourseModal>
                                </button>
                                <Link to={`${course?._id}`}>
                                    <button
                                        className="btn btn-sm border-none bg-orange-500">
                                        <FaRegFileLines className="text-white text-2xl">
                                        </FaRegFileLines>
                                    </button>
                                </Link>
                            </>
                            :
                            <>
                                <button
                                    className="btn btn-sm btn-disabled border-none ">
                                    <FaRegPenToSquare className="text-white 
                                        text-2xl"></FaRegPenToSquare >
                                </button>
                              
                                    <button
                       
                                        className="btn btn-sm btn-disabled border-none ">
                                        <FaRegFileLines className="text-white text-2xl">
                                        </FaRegFileLines>
                                    </button>
                               
                            </>
                        }

                    </div>




                </td>
            </tr>
        </>
    );
};

export default TeacherCourseTable;
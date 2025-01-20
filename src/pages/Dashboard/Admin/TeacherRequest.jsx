import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAlluser from '../../../hooks/useAlluser';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2'

const TeacherRequest = () => {
    const { user } = useAuth();
    const [users, refetch, isLoading] = useAlluser()
    const AxiosSecure = useAxiosSecure();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>;
    const RequestedStudents = [...users].filter(teacher => teacher?.status === 'requested')
    // make teacher 
    const handleMakeTeacher = async (use) => {
     
        try {
            const res = await AxiosSecure.patch(`/user/teacher/${use.email}`)
            // console.log(res.data)
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Successfully updated role as a teacher",
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

    const handleReject = async (useR) => {
        try {
            const res = await AxiosSecure.patch(`/user/teacher/reject/${useR.email}`)
            // console.log(res.data)
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Successfully rejected ",
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
        <section>
            <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Teache Requests</h2>
                <h2 className="text-3xl"> {RequestedStudents?.length}</h2>
            </div>
            <div className="overflow-x-auto text-xs text-black">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead >
                        {/* TODO : make it responsive */}
                        <tr className='flex items-center justify-between text-black'>

                            <th>Name</th>
                            <th className='w-8 '>Image</th>
                            <th>Expreience</th>
                            <th>Category</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            RequestedStudents.map((user, index) =>
                                <tr
                                    className='flex items-center justify-between'
                                    key={user._id}>

                                    <td>{user?.name}</td>
                                    <td><img src={user?.image} alt="" className='w-8' /></td>
                                    <td>{user?.experience}</td>
                                    <td>{user?.category}</td>
                                    <td>{user?.status}</td>

                                    <td className='flex gap-1 md:gap-3'>
                                        {<button
                                            onClick={() => handleMakeTeacher(user)}
                                            className="btn btn-sm border-none bg-orange-500">
                                            <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                        </button>}
                                        {<button
                                            onClick={() => handleReject(user)}
                                            className="btn btn-sm border-none text-white font-bold bg-orange-500">
                                            (X)
                                            {/* <ImCancelCircle className="text-white  */}
                                            {/*  text-2xl"></ImCancelCircle> */}
                                        </button>}
                                    </td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TeacherRequest;
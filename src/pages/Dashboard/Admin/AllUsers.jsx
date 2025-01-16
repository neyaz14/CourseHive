import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAlluser from '../../../hooks/useAlluser';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2'
const AllUsers = () => {
    const { user } = useAuth();
    const [allUsers, refetch, isLoading] = useAlluser();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    const AxiosSecure = useAxiosSecure();




    const handleMakeAdmin = async (useR) => {
        console.log(useR)
        try {
            const res = await AxiosSecure.patch(`/user/admin/${useR.email}`)
            console.log(res.data)
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Successfully maked an admin  ",
                    icon: "success",
                    draggable: true
                });
                refetch()
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
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {allUsers?.length}</h2>
            </div>
            <div className="overflow-x-auto text-xs text-black">
                <table className="table  table-xs w-full">
                    {/* head */}
                    <thead >
                        {/* TODO : make it responsive */}
                        <tr className='flex items-center justify-between text-black'>

                            <th>Name</th>
                            <th className='w-8 '>Image</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            allUsers.map((user, index) =>
                                <tr
                                    className='flex items-center justify-between'
                                    key={user._id}>

                                    <td>{user?.name}</td>
                                    <td><img src={user?.image} alt="" className='w-8' /></td>
                                    <td>{user?.email}</td>
                                    <td>{user?.role}</td>
                                    <td className='flex gap-1 md:gap-3'>
                                        {user?.role === 'student' || user?.role === 'teacher' ? <button
                                            onClick={() => handleMakeAdmin(user)}
                                            className="btn btn-sm border-none bg-orange-500">
                                            <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
                                        </button>
                                            : <button
                                                onClick={() => handleMakeAdmin(user)}
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
        </section>
    );
};

export default AllUsers;
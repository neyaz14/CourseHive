import React from 'react';
import useAuth from '../../../hooks/useAuth';
import useAlluser from '../../../hooks/useAlluser';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2'

const TeacherRequest = () => {
    const {user} = useAuth();
    const [users, refetch, isLoading] = useAlluser()
    const AxiosSecure = useAxiosSecure();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>;
    const RequestedStudents = [...users].filter(teacher=>teacher?.status ==='requested')
    // console.log(RequestedStudents)
// make teacher 
const handleMakeTeacher=async (use)=>{
    // console.log(use.email)
    try{
        const res = await AxiosSecure.patch(`/user/teacher/${use.email}`)
        console.log(res.data)
        if(res.data. modifiedCount){
            Swal.fire({
                title: "Successfully updated role as a teacher",
                icon: "success",
                draggable: true
              });
        }
        
    }catch(err){
        console.log(err)
        Swal.fire({
            title: {err},
            icon: "error",
            draggable: true
          });
    }

}


    return (
        <section>
             <div className="flex justify-evenly my-4">
                <h2 className="text-3xl">All Users</h2>
                <h2 className="text-3xl">Total Users: {RequestedStudents?.length}</h2>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            RequestedStudents.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user?.name}</td>
                                <td>{user?.email}</td>
                                <td>{user?.role}</td>
                                <td>
                                    { user.role === 'admin' ? 'Admin' : <button
                                        onClick={() => handleMakeTeacher(user)}
                                        className="btn btn-lg bg-orange-500">
                                        <FaUsers className="text-white 
                                        text-2xl"></FaUsers>
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
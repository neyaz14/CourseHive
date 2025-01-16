import React, { useEffect } from 'react';
import Swal from 'sweetalert2'
import Container from '../components/Shared/Container';
import useAuth from '../hooks/useAuth';
import { useForm } from 'react-hook-form';
// import axiosSecure from '../hooks/useAxiosSecure';
import toast from 'react-hot-toast';
import useAxiosSecure from '../hooks/useAxiosSecure';
import useAlluser from '../hooks/useAlluser';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../hooks/useAxiosPublic';
import LoadingSpinner from '../components/Shared/LoadingSpinner';

const TeachOnCourseHive = () => {
    const { user } = useAuth();
    // console.log(user)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const axiosSecure = useAxiosSecure();
 
    const [users, refetch, isLoading] = useAlluser();
    if(isLoading) return <LoadingSpinner></LoadingSpinner>
    // console.log(users)
    // item?.email === user?.email
    const userInfo = users.filter(item=> item?.email == user?.email)
    // console.log(userInfo[0]?.status)
    const onSubmit = async data => {
        // console.log(data)
        const newInfo = {
            title: data.title,
            experience: data.experience,
            category: data.category,
        }
        if(userInfo[0]?.status ==='requested'){
            Swal.fire({
                title: "You have allready requested",
                icon: "warning",
                draggable: true
              });
        }
        else{
            try {
                const { data } = await axiosSecure.patch(`/users/${user.email}`)
                if(data.modifiedCount ){
                    // console.log(' ---> success')
                    Swal.fire({
                        title: "Successfully applied for the teacher post.Wait for the approval !",
                        icon: "success",
                        draggable: true
                      });
                }
                // console.log(data)
            } catch (error) {
                console.log(error)
            }
            // --------  update
            try {
                const { data } = await axiosSecure.put(`/users/${user.email}`,newInfo)
                if(data ){
                    // console.log(' ---> success', data)
                }
                // console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        // console.log(user.email, newInfo)
        
    }
    return (
        // TODO : reimagine the design
        <Container>
            <div className="max-w-lg mx-auto p-4 my-5 shadow-md rounded-lg bg-[#fee68e]">
                <h2 className="text-3xl text-center font-bold mb-4 text-[#2c2e2d]">Apply for Teaching Position</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Name</label>
                        <input
                            type="text"
                            value={user?.displayName}
                            readOnly
                            {...register('name', { required: 'Name is required' })}
                            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        />

                    </div>

                    {/* Profile Image (Logged-in User) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Profile Image</label>
                        <div className="mt-1 flex items-center">
                            <img
                                src={user?.photoURL}
                                alt="Profile"
                                className="h-12 w-12 rounded-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Email (Read-Only) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={user?.email}
                            readOnly
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 bg-gray-100 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    {/* Experience */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Experience</label>
                        <select
                            {...register('experience', { required: 'Please select your experience level' })}
                            className={`mt-1 block w-full px-3 py-2 border  bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        >
                            <option value="">Select</option>
                            <option value="beginner">Beginner</option>
                            <option value="mid-level">Mid-Level</option>
                            <option value="experienced">Experienced</option>
                        </select>

                    </div>

                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            {...register('title', { required: 'Title is required' })}
                            className={`mt-1 block w-full px-3 py-2 border  rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        />

                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Category</label>
                        <select
                            {...register('category', { required: 'Please select a category' })}
                            className={`mt-1 block w-full px-3 py-2 border bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
                        >
                            <option value="">Select</option>
                            <option value="web-development">Web Development</option>
                            <option value="digital-marketing">Digital Marketing</option>
                            <option value="graphic-design">Graphic Design</option>
                            <option value="data-science">Data Science</option>
                            <option value="cyber-security">Cyber Security</option>
                        </select>

                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                        >
                            Submit for Review
                        </button>
                    </div>
                </form>
            </div>
        </Container>
    );
};

export default TeachOnCourseHive;
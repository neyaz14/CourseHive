import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import useAllAssignments from '../../hooks/useAllAssignments';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2'

const SubmitAssignmentModal = ({ isOpen, setIsOpen, enrolledCourseDetails, assignmentID,cAssingment }) => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const [assignments, refetch, isLoading] = useAllAssignments();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const currentAssignment = [...assignments].filter(i => i?._id === assignmentID);
    const currentassignment = currentAssignment[0]
    console.log(currentassignment)
    const onSubmit = async (data) => {
        const submissionResult = {
            stdentemail: user.email,
            link: data.assignment,
            assignment: currentassignment
        }
        const res = await axiosSecure.post('/assignmentSubmission', submissionResult)
        if (res.data.insertedId) {
            Swal.fire({
                title: "Successfully submited an assignment ",
                icon: "success",
                draggable: true
            });
            refetch();
             setIsOpen(false)
        }
        console.log(submissionResult)
        
    }
    return (
        <div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-90">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 bg-opacity-98 rounded-2xl bg-green-800 p-12 text-white ">
                        <DialogTitle className="font-bold">Assingment Upload </DialogTitle>

                        <section className='text-white'>
                            <div>
                                <p className='text-4xl'>Submit Assignment </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    
                                    <input
                                        id="assignment"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        {...register('assignment', { required: 'link is required' })}
                                    />

                                </div>
                                <button
                                    // onClick={() => setIsOpen(false)}
                                    type="submit"
                                    id="assignment-submit-btn"
                                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Submit Assignment
                                </button>
                            </form>
                        </section>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default SubmitAssignmentModal;
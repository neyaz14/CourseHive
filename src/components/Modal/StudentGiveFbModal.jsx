import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';
import useAllAssignments from '../../hooks/useAllAssignments';
import { useForm } from 'react-hook-form';
import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import Swal from 'sweetalert2'
const StudentGiveFbModal = ({ enrolledCourseDetails, isFeedbackOpen, setIsFeedbackOpen }) => {

    const axiosSecure = useAxiosSecure();
    const { user } = useAuth()
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = async (data) => {
        // Done : post feedback data also in server side
        // console.log(data)
        const feedbackInfo = {
            feedback: data.feedback,
            studentEmail: user.email,
            courseiD: enrolledCourseDetails._id,
            image: user?.photoURL,
            name: user?.displayName
        }
        const res = await axiosSecure.post('/feedback', feedbackInfo)
        if (res.data.insertedId) {
            Swal.fire({
                title: "Successfully submited a feedback ",
                icon: "success",
                draggable: true
            });
            setIsFeedbackOpen(false)
        }
        // console.log(feedbackInfo)
    }
    return (
        <div>
            <Dialog open={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} className="relative z-90">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 bg-opacity-98 rounded-2xl bg-green-300 p-12 text-white ">
                        <DialogTitle className="font-bold"> Feedback </DialogTitle>

                        <section className='text-white'>
                            <div>
                                <p className='text-4xl'>Give teacher feedback </p>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>

                                    <input
                                        id="feedback"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        {...register('feedback', { required: 'Feedback is required' })}
                                    />

                                </div>
                                <button
                                    type="submit"
                                    id="feedback-submit-btn"
                                    className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                                    Submit Feedback
                                </button>
                            </form>
                        </section>
                    </DialogPanel>
                </div>
            </Dialog>
        </div>
    );
};

export default StudentGiveFbModal;
import React, { useState } from 'react';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useForm } from 'react-hook-form';

const UploadAsignmentModal = ({ isOpen, setIsOpen }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log('Form Data:', data);
        console.log(data)
    };

    return (
        <div>
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="relative z-90">
                <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                    <DialogPanel className="max-w-lg space-y-4 bg-opacity-98 rounded-2xl bg-green-800 p-12 text-white ">
                        <DialogTitle className="font-bold">Assingment upload </DialogTitle>

                        <section className='text-white'>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <label htmlFor="assignment-title" className="block text-sm font-medium ">
                                        Assignment Title
                                    </label>
                                    <input
                                        id="assignment-title"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        {...register('assignmentTitle', { required: 'Title is required' })}
                                    />
                                    {errors.assignmentTitle && <p className="text-red-500 text-sm mt-1">{errors.assignmentTitle.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="assignment-deadline" className="block text-sm font-medium ">
                                        Assignment Deadline
                                    </label>
                                    <input
                                        id="assignment-deadline"
                                        type="date"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        {...register('assignmentDeadline', { required: 'Deadline is required' })}
                                    />
                                    {errors.assignmentDeadline && <p className="text-red-500 text-sm mt-1">{errors.assignmentDeadline.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="assignment-deadline" className="block text-sm font-medium ">
                                        Assignment Marks
                                    </label>
                                    <input
                                        id="assignment-deadline"
                                        type="number"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        {...register('assignmentDeadline', { required: 'Deadline is required' })}
                                    />
                                    {errors.assignmentDeadline && <p className="text-red-500 text-sm mt-1">{errors.assignmentDeadline.message}</p>}
                                </div>

                                <div>
                                    <label htmlFor="assignment-description" className="block text-sm font-medium ">
                                        Assignment Description
                                    </label>
                                    <textarea
                                        id="assignment-description"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                                        {...register('assignmentDescription', { required: 'Description is required' })}
                                    />
                                    {errors.assignmentDescription && <p className="text-red-500 text-sm mt-1">{errors.assignmentDescription.message}</p>}
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

export default UploadAsignmentModal;
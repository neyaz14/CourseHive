import React from 'react';
import useAllAssignments from '../../../hooks/useAllAssignments';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const AssignmentSection = ({ enrolledCourseDetails }) => {
    const [assignments, refetch, isLoading] = useAllAssignments();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    const currentAssignments = [...assignments].filter(assignment => assignment?.courseID === enrolledCourseDetails?._id);
    console.log(currentAssignments)
    return (
        <div>

            <div className="overflow-x-auto text-xs text-black">
                <table className="table  table-xs w-full">
                    {/*  head */}
                    <thead >
                        {/* TODO : make it responsive */}
                        <tr className='flex flex-1 items-center justify-between text-black'>
                            <th className='flex-1'>Title</th>
                            <th className='w-8 flex-1'>Marks</th>
                            <th className='flex-1'>Submition</th>
                            <th className='flex-1'>Deadline</th>
                            <th className='flex-1'>Action</th>
                        </tr>
                    </thead>
                    <tbody >

                        {
                            currentAssignments.map((cAssingment, index) =>
                                <tr
                                    className='flex flex-1 items-center justify-between'
                                    key={cAssingment._id}>

                                    <td className='flex-1'>{cAssingment?.title}</td>
                                    <td className='flex-1'>{cAssingment?.marks}</td>
                                    <td className='flex-1'>{cAssingment?.TotalSubmissionAssignment}</td>
                                    <td className='flex-1'>{cAssingment?.deadline}</td>
                                    <td className='flex-1'>

                                        <button
                                            onClick={() => handleCheck(cAssingment)}
                                            className="btn text-white btn-sm border-none bg-orange-500">
                                            Submit
                                        </button>

                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignmentSection;
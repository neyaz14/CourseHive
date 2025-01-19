import React, { useState } from 'react';
import useAllAssignments from '../../../hooks/useAllAssignments';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import SubmitAssignmentModal from '../../../components/Modal/SubmitAssignmentModal';
import AssignmentTableS from './Table/AssignmentTableS';

const AssignmentSection = ({ enrolledCourseDetails }) => {
    const [isOpen ,setIsOpen]= useState(false)
    const [assignments, refetch, isLoading] = useAllAssignments();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    const currentAssignments = [...assignments].filter(assignment => assignment?.courseID === enrolledCourseDetails?._id);
    refetch();
    // console.log(currentAssignments)
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
                            currentAssignments.map((cAssingment, index) =><AssignmentTableS cAssingment={cAssingment} key={cAssingment?._id}></AssignmentTableS>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AssignmentSection;
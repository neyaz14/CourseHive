import React, { useState } from 'react';
import useAllAssignments from '../../../../hooks/useAllAssignments';
import LoadingSpinner from '../../../../components/Shared/LoadingSpinner';
import SubmitAssignmentModal from '../../../../components/Modal/SubmitAssignmentModal';

const AssignmentTableS = ({ cAssingment }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [assignments, refetch, isLoading] = useAllAssignments();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    // const currentAssignments = [...assignments].filter(assignment => assignment?.courseID === enrolledCourseDetails?._id);
    refetch();
    return (
        <>
            <tr
                className='flex flex-1 items-center justify-between'
                key={cAssingment._id}>

                <td className='flex-1'>{cAssingment?.title}</td>
                <td className='flex-1'>{cAssingment?.marks}</td>
                <td className='flex-1'>{cAssingment?.TotalSubmissionAssignment}</td>
                <td className='flex-1'>{cAssingment?.deadline}</td>
                <td className='flex-1'>

                    <button
                        onClick={() => setIsOpen(true)}
                        className="btn text-white btn-sm border-none bg-orange-500">
                        Submit
                        <SubmitAssignmentModal

                            assignmentID={cAssingment?._id}
                            cAssingment={cAssingment}
                            // enrolledCourseDetails={enrolledCourseDetails}
                            isOpen={isOpen} setIsOpen={setIsOpen}></SubmitAssignmentModal>
                    </button>

                </td>
            </tr>
        </>
    );
};

export default AssignmentTableS;
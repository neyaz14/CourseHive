import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import useAllCourses from '../../../hooks/useAllCourses';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { FaRegFileLines, FaRegPenToSquare, FaRegTrashCan } from 'react-icons/fa6';
import useAllAssignments from '../../../hooks/useAllAssignments';

const AssingmentsTable = ({ courseDetails }) => {
  const { id } = useParams();
  const AxiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [courses] = useAllCourses();
  const [assignments, refetch, isLoading] = useAllAssignments();
  // console.log(assignments)
  if (isLoading) return <LoadingSpinner></LoadingSpinner>
  refetch();
  // console.log(courseDetails[0])
  const currentAssignments = [...assignments].filter(assignment => assignment?.courseID === courseDetails[0]?._id);
  // console.log(currentAssignments)
  // const CourseD = coursedetails[0]
  return (
    <section>
      <div>
        <p>Assignments</p>
      </div>
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
                      Check
                    </button>

                  </td>
                </tr>)
            }

          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AssingmentsTable;

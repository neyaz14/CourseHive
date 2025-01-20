import { Helmet } from 'react-helmet-async'

import useAuth from '../../../hooks/useAuth';
import useAllCourses from '../../../hooks/useAllCourses';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import TeacherCourseTable from './teacherCourseTable/TeacherCourseTable';
const MyCourses = () => {
  
  
  const { user } = useAuth();
  const [courses, refetch, isLoading] = useAllCourses();
  if (isLoading) return <LoadingSpinner></LoadingSpinner>

  const TeacherCourses = [...courses].filter(course => course?.TeacherEmail === user?.email)
  // console.log(TeacherCourses)
  refetch();

 



  return (
    <>
      <Helmet>
        <title>My Courses</title>
      </Helmet>
      <div>
        <div className="flex justify-evenly my-4">
          <h2 className="text-3xl">All Courses</h2>
          <h2 className="text-3xl"> {TeacherCourses?.length}</h2>
        </div>
        <div className="overflow-x-auto text-xs text-black">
          <table className="table  table-xs w-full">
            {/* head */}
            <thead >
              {/* TODO : make it responsive */}
              <tr className='flex items-center justify-between text-black'>
                <th className='flex-1'>Title</th>
                <th className='w-8 flex-1'>Image</th>
                <th className='flex-1'>Teacher Email</th>
                <th className='flex-1'>Price</th>
                <th className='flex-1'>Status</th>
                <th className='flex-1'>Action</th>
              </tr>
            </thead>
            <tbody >
              {
                TeacherCourses.map((course, index) =><TeacherCourseTable course={course} key={course._id} refetch={refetch}></TeacherCourseTable>)
              }
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default MyCourses

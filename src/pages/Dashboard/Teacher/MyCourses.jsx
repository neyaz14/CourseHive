import { Helmet } from 'react-helmet-async'
import { FaBan, FaCheck, FaUsers } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import useAllCourses from '../../../hooks/useAllCourses';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';

const MyCourses = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [courses, refetch, isLoading] = useAllCourses();
  if (isLoading) return <LoadingSpinner></LoadingSpinner>

  const TeacherCourses = [...courses].filter(course => course?.TeacherEmail === user?.email )
  console.log(TeacherCourses)
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
                <th>Title</th>
                <th className='w-8 '>Image</th>
                <th>Teacher Email</th>
                <th>Price</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody >
              {
                TeacherCourses.map((course, index) =>
                  <tr
                    className='flex items-center justify-between'
                    key={course._id}>
                    <td>{course?.title}</td>
                    <td><img src={course?.image} alt="" className='w-8' /></td>
                    <td>{course?.TeacherEmail}</td>
                    <td>{course?.price}</td>
                    <td>{course?.status}</td>
                    <td className='flex gap-1 md:gap-3'>
                      {course?.status === 'accepted' ?
                        <>
                          <button
                            onClick={() => handleAccept(course)}
                            className="btn btn-sm border-none bg-orange-500">
                            <FaCheck className="text-white 
                            text-2xl"></FaCheck >
                          </button>
                          <button
                            onClick={() => handleRejectCourse(course)}
                            className="btn btn-sm border-none bg-orange-500">
                            <FaBan className="text-white text-2xl"></FaBan >
                          </button>
                          <button
                            onClick={() => handleDelete(course)}
                            className="btn btn-sm border-none bg-orange-500">
                            <FaBan className="text-white text-2xl"></FaBan >
                          </button>
                        </>
                        : <button
                        onClick={() => handleDelete(course)}
                        className="btn btn-sm border-none bg-orange-500">
                        <FaBan className="text-white text-2xl"></FaBan >
                      </button>
                      }
                    </td>
                  </tr>)
              }
            </tbody>
          </table>
        </div>
      </div>

    </>
  )
}

export default MyCourses

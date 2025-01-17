import { Helmet } from 'react-helmet-async'
import { FaBan, FaCheck, FaUsers, } from 'react-icons/fa';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import useAllCourses from '../../../hooks/useAllCourses';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { Link } from 'react-router-dom';

const MyCourses = () => {
  const AxiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [courses, refetch, isLoading] = useAllCourses();
  if (isLoading) return <LoadingSpinner></LoadingSpinner>

  const TeacherCourses = [...courses].filter(course => course?.TeacherEmail === user?.email)
  // console.log(TeacherCourses)
  refetch();

  const handleDelete =async (cours) => {
    try{
      const res = await AxiosSecure.delete(`/courses/${cours._id}`)

      if(res.data.deletedCount){
        //  TODO : give swal fire or toast
        refetch();
      }

    }
    catch(err){

    }
  }

  const handleUpdate=(cours)=>{
    console.log(cours)
  }

  
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
                TeacherCourses.map((course, index) =>
                  <tr
                    className='flex items-center justify-between'
                    key={course._id}>
                    <td className='flex-1'>{course?.title}</td>
                    <td className='flex-1'><img src={course?.image} alt="" className='w-8' /></td>
                    <td className='flex-1'>{course?.TeacherEmail}</td>
                    <td className='flex-1'>{course?.price}</td>
                    <td className='flex-1'>{course?.status}</td>
                    <td className='flex flex-1 gap-1 md:gap-3'>
                      
                     
{/* TODO : apply conditional based on status */}
                          <button
                            onClick={() => handleUpdate(course)}
                            className="btn btn-sm border-none bg-orange-500">
                            <FaCheck className="text-white 
                            text-2xl"></FaCheck >
                          </button>
                          <Link to={`/myCourse/${course?._id}`}>
                            <button
                              // onClick={() => handledetails(course)}
                              className="btn btn-sm border-none bg-orange-500">
                              <FaBan className="text-white text-2xl">
                              </FaBan  >
                            </button>
                          </Link>
                          <button
                            onClick={() => handleDelete(course)}
                            className="btn btn-sm border-none bg-orange-500">
                            <FaBan className="text-white text-2xl"></FaBan >
                          </button>
                    
                       
                     
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

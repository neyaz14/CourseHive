import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxiosSecure from "../../hooks/useAxiosSecure";


const image_hosting_key = import.meta.env.VITE_IMAGE_Hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`


const UpdateCourseForm = ({course}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // console.log(course)

  const onSubmit = async (data) => {
    // TODO : img is not hosting 
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { 'content-type': 'multipart/form-data' }
    });
    if (res.data.success) {
      toast.success('pic Successfully uploaded')
      const CourseUPInfo = {
        TeacherName: user.displayName,
        TeacherEmail: user.email,
        TeacherPhotoURL: user.photoURL,
        price: parseFloat(data.price),
        description: data.description,
        title: data.title,
        image: res.data.data.display_url
      }
      console.log(course)
      const courseRES = await axiosSecure.patch(`/courses/${course?._id}`, CourseUPInfo);
      if (courseRES.data.insertedId) {
        // reset();
        toast.success('Successfully Updated a course !')
      }
    }
  }




  return (
    <div className='w-full flex flex-col justify-center items-center text-gray-800 rounded-xl bg-gray-50'>
      <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
        <div className="mb-4 text-white">
          <label className="block ">Title</label>
          <input
          defaultValue={course.title}
            {...register('title', { required: 'Title is required' })}
            className="w-full px-3 py-2 border rounded"
            placeholder="Class Title"
          />
          
        </div>

        <div className="mb-4 text-white">
          <label className="block ">Name</label>
          <input
            value={user.displayName}
            readOnly
            className="w-full px-3 py-2 border  rounded"
          />
        </div>

        <div className="mb-4 text-white">
          <label className="block ">Email</label>
          <input
            value={user.email}
            readOnly
            className="w-full px-3 py-2 border  rounded"
          />
        </div>

        <div className="mb-4 text-white">
          <label className="block ">Price</label>
          <input
            type="number"
            {...register('price', { required: 'Price is required', min: { value: 0, message: 'Price must be positive' } })}
            className="w-full px-3 py-2 border rounded"
            placeholder="Class Price"
          />
         
        </div>

        <div className="mb-4 text-white">
          <label className="block text-gray-700">Description</label>
          <textarea
            {...register('description', { required: 'Description is required' })}
            className="w-full px-3 py-2 border rounded"
            placeholder="Class Description"
          />
          
        </div>

        <div className="mb-4 text-white">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            {...register('image', { required: 'Image is required' })}
            className="w-full px-3 py-2 border rounded"
          />
        </div>

        <button type="submit" className="w-full btn text-white py-2 rounded hover:bg-blue-600">
          Add Class
        </button>
      </form>
    </div>
  )
}

export default UpdateCourseForm

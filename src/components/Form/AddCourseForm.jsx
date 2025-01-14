import React from 'react';
import { useForm } from "react-hook-form";
import useAxiosPublic from '../../hooks/useAxiosPublic';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useAuth from '../../hooks/useAuth';



const image_hosting_key = import.meta.env.VITE_IMAGE_Hosting_key;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddCourseForm = () => {
  // const { register, handleSubmit, reset } = useForm();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  console.log(user)


  const onSubmit = async (data) => {
    console.log(data)
    const imageFile = { image: data.image[0] }
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: { 'content-type': 'multipart/form-data' }
    });
    // console.log(res)
    if(res.data.success){
      const CourseInfo = {
        TeacherName: user.displayName,
        TeacherEmail: user.email,
        TeacherPhotoURL: user.photoURL,
        price: parseFloat(data.price),
        description: data.description,
        title: data.title,
        image: res.data.data.display_url
    }
    console.log(CourseInfo)
    }

  }


  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-md">
      <div className="mb-4">
        <label className="block ">Title</label>
        <input
          {...register('title', { required: 'Title is required' })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Class Title"
        />
        {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block ">Name</label>
        <input
          value={user.displayName}
          readOnly
          className="w-full px-3 py-2 border  rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block ">Email</label>
        <input
          value={user.email}
          readOnly
          className="w-full px-3 py-2 border  rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block ">Price</label>
        <input
          type="number"
          {...register('price', { required: 'Price is required', min: { value: 0, message: 'Price must be positive' } })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Class Price"
        />
        {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          {...register('description', { required: 'Description is required' })}
          className="w-full px-3 py-2 border rounded"
          placeholder="Class Description"
        />
        {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Image</label>
        <input
          type="file"
          {...register('image', { required: 'Image is required' })}
          className="w-full px-3 py-2 border rounded"
        />
        {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
      </div>

      <button type="submit" className="w-full btn text-white py-2 rounded hover:bg-blue-600">
        Add Class
      </button>
    </form>
  )
}

export default AddCourseForm

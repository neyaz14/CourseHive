import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import { useParams } from 'react-router-dom';
import LoadingSpinner from '../../components/Shared/LoadingSpinner';
import Container from '../../components/Shared/Container';
import toast from 'react-hot-toast';
import useAuth from '../../hooks/useAuth';

const CourseDetails = () => {
    // TODO : Reimagine the design
    // TODO : add stripe here 
    const {user} = useAuth()
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxiosSecure();
    const { id } = useParams();
    // console.log(id)

    const { data: course = {}, refetch, isLoading } = useQuery({
        queryKey: ['course', id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/courses/${id}`);
            return res.data;
        }
    });
    if (isLoading) return <LoadingSpinner></LoadingSpinner>

    const { _id, image, title, description, price, TeacherName, TeacherEmail, TeacherPhotoURL, timestamp } = course;
 
    const handlePay=async(id)=>{
        const enrolledInfo ={
            // ! jokhon course deoa hocce or id ta _id hoye jacce tai same data field hocce 
            //  TODO : fix this problem 

            courseID: id,
            studentEmail: user.email
        }
        const res = await axiosSecure.post('/enrolledINFO', enrolledInfo);
        if(res.data.insertedId){
            toast.success(' Successfylly enrolled a course ')
        }
    }

    return (
        <Container>
            <div className='my-5'>
                <h1 className='text-4xl font-bold text-[#2c2e2d] text-center'>{title} Details</h1>
            </div>
            <div className="container mx-auto p-4">
                <div className="bg-white shadow-md rounded-lg overflow-hidden flex">
                    <img
                        className=""
                        src={image}
                        alt={title}
                    />
                    <div className="p-6">
                        <h1 className="text-2xl font-bold mb-2">{title}</h1>
                        <p className="text-gray-700 mb-4">{description}</p>
                        <div className="flex items-center mb-4">
                            <img
                                className="w-12 h-12 rounded-full mr-4"
                                src={TeacherPhotoURL}
                                alt={TeacherName}
                            />
                            <div>
                                <p className="text-lg font-semibold">{TeacherName}</p>
                                <p className="text-gray-600">{TeacherEmail}</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <span className="text-xl font-bold text-blue-600">${price}</span>

                            <button
                            onClick={()=>handlePay(_id)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Go for payment
                            </button>
                        </div>
                        <p className="text-gray-500 text-sm mt-4">
                            {/* TODO : fix the language */}
                            Published: {new Date(timestamp).toLocaleDateString('bn-BD')}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default CourseDetails;
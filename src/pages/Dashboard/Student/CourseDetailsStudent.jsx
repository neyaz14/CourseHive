import React from 'react';
import { useParams } from 'react-router-dom';
import useAllCourses from '../../../hooks/useAllCourses';
import AssignmentSection from './AssignmentSection';

const CourseDetailsStudent = () => {
    const { id } = useParams();
    // console.log(id)
    const [courses,refetch, isLoading] = useAllCourses();
    const specificCourse = [...courses].filter(i=> i._id=== id)
    // console.log(specificCourse[0])
    const enrolledCourseDetails = specificCourse[0];
    const { _id, image, title, description, price, TeacherName, TeacherEmail, TeacherPhotoURL, timestamp } = enrolledCourseDetails;
    return (
        <div>
            <div>

            </div>

            <section>
                <div className='my-5'>
                    <h1 className='text-4xl font-bold text-[#2c2e2d] text-center'>{title} Details</h1>
                </div>
                <div className=" mx-auto p-4">
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

                               
                            </div>
                            <p className="text-gray-500 text-sm mt-4">
                                {/* TODO : fix the language */}
                                Published: {new Date(timestamp).toLocaleDateString('bn-BD')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>


            <section>
                <div>
                    <p className='text-4xl font-bold text-center text-black my-5'>Assingments</p>
                </div>
                <AssignmentSection enrolledCourseDetails={enrolledCourseDetails}></AssignmentSection>
            </section>
        </div>
    );
};

export default CourseDetailsStudent;
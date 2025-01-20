import React from 'react';
import useAlluser from '../../hooks/useAlluser';
import Container from '../Shared/Container';
import LoadingSpinner from '../Shared/LoadingSpinner';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
const OurTeachers = () => {
    const [users, refetch, isLoading] = useAlluser();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
    refetch();
    const teachers = [...users].filter(i => i.role === 'teacher')
    console.log(teachers)
    return (
        <Container>
            <h1 className='text-4xl font-bold text-black text-center my-2'>Our Teachers</h1>
            <div className='grid grid-cols-1 md:grid-cols-2  py-4 gap-4 justify-center mx-auto'>
                {
                    teachers.map(tech =>

                        <section tech={tech}>
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md mx-auto flex items-center space-x-4">
                                <div className="w-1/3">
                                    <img
                                        src={tech?.image} // Replace with actual image URL
                                        alt="Dennis Barrett"
                                        className="rounded-lg w-full"
                                    />
                                </div>
                                <div className="w-2/3">
                                    <div className="flex justify-between items-center">
                                        <div>
                                            <h3 className="text-lg font-semibold">{tech?.name}</h3>
                                            <p className="text-gray-600 text-sm">{tech?.title}</p>
                                            <p className="text-gray-600 text-sm">{tech?.email}</p>
                                        </div>

                                    </div>

                                    <p className="text-orange-500 font-medium mt-4">Category: {tech?.category}</p>
                                    <p className="text-orange-500 font-medium mt-4">Experience: {tech?.experience}</p>
                                    <div className="flex space-x-4 mt-4 text-gray-600">
                                        <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
                                        <FaInstagram className="hover:text-pink-500 cursor-pointer" />
                                        <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                                        <FaLinkedinIn className="hover:text-blue-700 cursor-pointer" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    )
                }
            </div>
        </Container>
    );
};

export default OurTeachers;
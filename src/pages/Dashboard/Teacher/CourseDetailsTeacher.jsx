import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaUserGraduate, FaChalkboardTeacher, FaCertificate, } from 'react-icons/fa';
import { FaBook, FaBookBookmark, FaRegSquarePlus } from 'react-icons/fa6';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import useAuth from '../../../hooks/useAuth';
import useAllCourses from '../../../hooks/useAllCourses';
import LoadingSpinner from '../../../components/Shared/LoadingSpinner';
import { useParams } from 'react-router-dom';
import AssingmentsTable from './AssingmentsTable';
import UploadAsignmentModal from '../../../components/Modal/UploadAsignmentModal';




const CourseDetailsTeacher = () => {
    const [isOpen, setIsOpen] = useState(false)
    const {id} = useParams();
    const AxiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [courses, refetch, isLoading] = useAllCourses();
    if (isLoading) return <LoadingSpinner></LoadingSpinner>
  
    const courseDetails = [...courses].filter(course => course?.TeacherEmail === user?.email && course._id===id);
    // console.log(courseDetails, id)
    const CourseD = courseDetails[0]
    return (
        <section>
            <div>
                <h1 className='lg:text-5xl font-bold md:text-3xl text-2xl text-[#1b1c1b] text-center my-5'>Course Details</h1>

            </div>
            {/* top three card  */}
            <motion.div className='grid lg:grid-cols-3 grid-cols-1 gap-5'>
                {/* total enrollment */}
                {/*     - */}
                <motion.div
                    className={`flex   flex-1 flex-col items-center justify-center p-6 rounded-lg  shadow-md w-full `}
                    whileHover="hover" >
                    <motion.div className="mb-4"><FaUserGraduate />  </motion.div>
                    <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">
                        Total Enrollment </motion.h3>
                    <motion.p className="text-[#2c2e2d]"> </motion.p>
                </motion.div>

                {/* total assignment */}
                <motion.div
                    className={`flex  flex-1 flex-col items-center justify-center p-6 rounded-lg  shadow-md w-full `}
                    whileHover="hover" >
                    <motion.div className="mb-4"><FaBook />  </motion.div>
                    <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">
                        Total Enrollment </motion.h3>
                    <motion.p className="text-[#2c2e2d]"> </motion.p>
                </motion.div>

                {/* total assignment submission */}
                <motion.div
                    className={`flex flex-1 flex-col items-center justify-center p-6 rounded-lg  shadow-md w-full `}
                    whileHover="hover" >
                    <motion.div className="mb-4"><FaBookBookmark />  </motion.div>
                    <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">
                        Total Enrollment </motion.h3>
                    <motion.p className="text-[#2c2e2d]"> </motion.p>
                </motion.div>
            </motion.div>
            <div>
                <p className='text-4xl font-bold text-[#1b1c1b] text-center my-4'>{courseDetails[0].title} </p>  
                <div>
                    <button
                    onClick={() => setIsOpen(true)}
                    className='btn text-white'>Assignment <FaRegSquarePlus/></button>
                    <UploadAsignmentModal setIsOpen={setIsOpen} isOpen={isOpen}></UploadAsignmentModal>
                </div>
            </div>

            <div>
                <AssingmentsTable></AssingmentsTable>
            </div>
        </section>
    );
};

export default CourseDetailsTeacher;



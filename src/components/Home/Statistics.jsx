import React from 'react';
import { FaDesktop, FaUserGraduate, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
import useAllCourses from '../../hooks/useAllCourses';
import useAlluser from '../../hooks/useAlluser';
import useStat from '../../hooks/useStat';
import Container from '../Shared/Container';
const stats = [
  { icon: <FaDesktop size={40} className="text-yellow-500" />, value: '10K', label: 'Online Courses', bg: 'bg-yellow-100' },
  { icon: <FaChalkboardTeacher size={40} className="text-blue-800" />, value: '200+', label: 'Expert Tutors', bg: 'bg-gray-200' },
  { icon: <FaUserGraduate size={40} className="text-purple-600" />, value: '60K+', label: 'Online Students', bg: 'bg-purple-100' },
 
];

// Animation variants for container and item
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hover: { scale: 1.05, transition: { duration: 0.3 } },
};

const Statistics = () => {
 
const statInfo = useStat();
// console.log()

  return (
    <Container>
      <h1 className='text-3xl font-bold text-center my-4 text-[#1c1d1d]'>Statistics of ours platform </h1>
      <motion.div
        className="flex flex-wrap justify-center items-center p-6 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

    
          <motion.div
         
            className={`flex flex-1 flex-col items-center justify-center p-6 rounded-lg text-yellow-500 text-4xl bg-yellow-100 shadow-md font-bold w-full sm:w-1/2 lg:w-1/5`}
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div className="mb-4"><FaDesktop></FaDesktop></motion.div>
            <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">{statInfo.CourseLength}</motion.h3>
            <motion.p className="text-[#2c2e2d]">Online Courses</motion.p>
          </motion.div>

          <motion.div
         
            className={`flex flex-1 flex-col items-center justify-center p-6 rounded-lg text-blue-800 bg-gray-200 text-4xl font-bold shadow-md w-full sm:w-1/2 lg:w-1/5`}
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div className="mb-4"><FaUserGraduate></FaUserGraduate></motion.div>
            <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">{statInfo.usersLength}</motion.h3>
            <motion.p className="text-[#2c2e2d]">All Students</motion.p>
          </motion.div>


          <motion.div
         
            className={`flex flex-1 flex-col items-center justify-center p-6 rounded-lg text-purple-600 bg-purple-100 text-4xl font-bold shadow-md w-full sm:w-1/2 lg:w-1/3`}
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div className="mb-4"><FaChalkboardTeacher></FaChalkboardTeacher></motion.div>
            <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">{statInfo.EnrollmentLength}</motion.h3>
            <motion.p className="text-[#2c2e2d]">Total Enrollment</motion.p>
          </motion.div>
  
      </motion.div>
    </Container>

  );
};

export default Statistics;

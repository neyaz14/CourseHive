import React from 'react';
import { FaDesktop, FaUserGraduate, FaChalkboardTeacher, FaCertificate } from 'react-icons/fa';
import { motion } from 'framer-motion';
const stats = [
  { icon: <FaDesktop size={40} className="text-yellow-500" />, value: '10K', label: 'Online Courses', bg: 'bg-yellow-100' },
  { icon: <FaChalkboardTeacher size={40} className="text-blue-800" />, value: '200+', label: 'Expert Tutors', bg: 'bg-gray-200' },
  { icon: <FaUserGraduate size={40} className="text-purple-600" />, value: '60K+', label: 'Online Students', bg: 'bg-purple-100' },
  { icon: <FaCertificate size={40} className="text-teal-500" />, value: '6K+', label: 'Certified Courses', bg: 'bg-blue-100' },
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
  return (
    <motion.div
      className="flex flex-wrap justify-center items-center p-6 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
        {/* <h1 className='text-3xl font-bold text-[#1c1d1d]'>Statistics of ours platform </h1> */}
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className={`flex flex-col items-center justify-center p-6 rounded-lg ${stat.bg} shadow-md w-full sm:w-1/2 lg:w-1/5`}
          variants={itemVariants}
          whileHover="hover"
        >
          <motion.div className="mb-4">{stat.icon}</motion.div>
          <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">{stat.value}</motion.h3>
          <motion.p className="text-[#2c2e2d]">{stat.label}</motion.p>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Statistics;

// export default Statistics;
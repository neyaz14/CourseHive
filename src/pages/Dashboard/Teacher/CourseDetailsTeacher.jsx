import React from 'react';
import { motion } from 'framer-motion';
import { FaDesktop, FaUserGraduate, FaChalkboardTeacher, FaCertificate,  } from 'react-icons/fa';
import { FaBook ,FaBookBookmark  } from 'react-icons/fa6';

const CourseDetailsTeacher = () => {
    
    return (
        <section>
            <div>
                <h1 className='lg:text-5xl font-bold md:text-3xl text-2xl text-[#1b1c1b] text-center my-5'>Course Details</h1>
            </div>
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
                    <motion.div className="mb-4"><FaBook  />  </motion.div>
                    <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">
                        Total Enrollment </motion.h3>
                    <motion.p className="text-[#2c2e2d]"> </motion.p>
                </motion.div>

                {/* total assignment submission */}
                <motion.div
                    className={`flex flex-1 flex-col items-center justify-center p-6 rounded-lg  shadow-md w-full `}
                    whileHover="hover" >
                    <motion.div className="mb-4"><FaBookBookmark  />  </motion.div>
                    <motion.h3 className="text-2xl text-[#1b1c1b] font-extrabold">
                        Total Enrollment </motion.h3>
                    <motion.p className="text-[#2c2e2d]"> </motion.p>
                </motion.div>
            </motion.div>

            <div>

            </div>
        </section>
    );
};

export default CourseDetailsTeacher;


      
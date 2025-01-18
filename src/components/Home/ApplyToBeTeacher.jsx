import React from 'react';
import { motion } from 'framer-motion';
import Container from '../Shared/Container';
import { Link } from 'react-router-dom';

const ApplyToBeTeacher = () => {
    // TODO : Rethink this design , add img 

    
    return (
        <Container>
            <div className="flex justify-center items-center p-6 bg-green-500 rounded-lg px-28   mb-3">
                <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between w-full ">
                    <div className='max-w-96'>
                        <motion.h2
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.5 }}
                            className="text-2xl sm:text-3xl font-bold text-white"
                        >
                            Become an Instructor!
                        </motion.h2>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1.8, delay: 0.2 }}
                            className="text-white mt-2 text-sm sm:text-base"
                        >
                            Speedily say has suitable disposal add boy. On forth doubt miles of child. Exercise joy man children rejoiced. Yet uncommonly his ten who diminution astonished.
                        </motion.p>
                    </div>
                    <motion.div
                        whileHover={{ scale: 1.1 }}
                        className="mt-4 lg:mt-0"
                    >
                        <Link to='/teachOnCourseHive'>
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 1.5, delay: 0.4 }}
                                className="bg-gray-800 text-white px-6 py-3 rounded-lg shadow-md hover:bg-gray-700"
                            >
                                Start Teaching today
                            </motion.button>
                        </Link>

                    </motion.div>
                </div>
            </div>
        </Container>
    );
};

export default ApplyToBeTeacher;

// export default ApplyToBeTeacher;
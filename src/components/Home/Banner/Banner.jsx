import React from 'react';
import Container from '../../Shared/Container';
import { motion } from 'framer-motion';

const Banner = () => {
    return (
        <Container>
            <motion.section
                className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 bg-amber-100 py-36"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 , transition: { duration: 1.8 }}}
                >

                <div className="md:w-1/2 text-center md:text-left">
                    <motion.h1 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, scale: 1.05 ,transition: { duration: 2.5 }}}
                    
                    
                    className="text-4xl md:text-6xl font-bold text-gray-800  mb-6">Learn from anywhere around the globe with us</motion.h1>

                    <p className="mb-6 text-gray-700">Get quality courses with us with the best price. Now you can get the best course from us. We have top mentors around the globe.</p>

                    <div className="flex justify-center md:justify-start space-x-4">
                        <button className="bg-red-300 btn border-none r px-6 py-2 rounded-2xl hover:bg-red-400 hover:text-white font-bold text-gray-700">Get Started</button>

                        <button className="flex items-center px-6 py-2 border-none btn rounded-2xl hover:bg-none">
                            <span className="mr-2">▶</span>
                            How it works?
                        </button>
                    </div>
                </div>

                
                <div className="md:w-1/2 mt-10 md:mt-0">
                    <img src="/path/to/your/image.jpg" alt="Student" className="w-full h-auto" />
                    <div className="absolute top-16 right-16 bg-white p-4 rounded shadow-md">
                        <p className="text-lg font-bold">110K</p>
                        <p className="text-gray-500">Active Students</p>
                    </div>
                    <div className="absolute bottom-16 left-16 bg-white p-4 rounded shadow-md">
                        <p className="text-lg font-bold">100+</p>
                        <p className="text-gray-500">Top Class Mentors</p>
                    </div>
                </div>
            </motion.section>
        </Container>
    );
};

export default Banner;
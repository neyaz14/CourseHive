import React from 'react';
import Container from '../../Shared/Container';
import { motion } from 'framer-motion';
import BannerPNG from '../../../assets/images/Banner.png'
const Banner = () => {
    return (
        <Container>
            <motion.section
                className="flex flex-col lg:flex-row items-center justify-between rounded-xl md:pl-20 md:px-0 sm:px-4 bg-[#FFF9E7] py-10"
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


                <div className="md:w-1/2 flex justify-end mt-10 md:mt-0 relative">
                    <img src={BannerPNG} alt="Student" className="md:max-w-[440px] max-w-80 z-30 " />
                    <motion.div 
                    
                    className="absolute lg:top-10 lg:right-3 bg-white p-4 rounded shadow-md z-40">
                        <p className="text-lg text-gray-950  font-bold">110K</p>
                        <p className="text-gray-700">Active Students</p>
                    </motion.div>
                    <motion.div 
                    
                    className="absolute lg:bottom-16 lg:left-16 bg-white p-4  rounded shadow-2xl">
                        <p className="text-gray-950 text-lg font-bold">100+</p>
                        <p className="text-gray-700">Top Class Mentors</p>
                    </motion.div>
                </div>
            </motion.section>
        </Container>
    );
};

export default Banner;